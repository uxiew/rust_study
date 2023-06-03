// from https://github.com/runarberg/markdown-it-math/tree/master

import type MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

function alignRule(state, startLine, endLine, silent) {
  const delimiters = {
    ':--': 'left',
    '-:-': 'center',
    '--:': 'right'
  }
  const iLen = 3;
  let open = '';
  let close = '';

  let openDelim, len, nextLine, token, firstLine, lastLine, lastLinePos,
    haveEndMarker = false,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];

  if (pos + iLen > max) { return false; }
  openDelim = state.src.slice(pos, pos + iLen);
  if (!delimiters[openDelim]) { return false; }
  open = close = openDelim

  pos += iLen;
  firstLine = state.src.slice(pos, max);
  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  if (firstLine.trim().slice(-close.length) === close) {
    // Single line expression
    firstLine = firstLine.trim().slice(0, -close.length);
    haveEndMarker = true;
  }

  // search end of block
  nextLine = startLine;
  for (; ;) {
    if (haveEndMarker) { break; }
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      break;
    }
    if (state.src.slice(pos, max).trim().slice(-close.length) !== close) {
      continue;
    }
    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      // closing block math should be indented less then 4 spaces
      continue;
    }
    lastLinePos = state.src.slice(0, max).lastIndexOf(close);
    lastLine = state.src.slice(pos, lastLinePos);
    pos += lastLine.length + close.length;
    // make sure tail has spaces only
    pos = state.skipSpaces(pos);
    if (pos < max) { continue; }
    // found!
    haveEndMarker = true;
  }

  // If math block has heading spaces, they should be removed from its inner block
  len = state.tShift[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token = state.push('align', 'align', 0);
  token.block = true;
  token.content = (firstLine && firstLine.trim() ? firstLine + '\n' : '') +
    state.getLines(startLine + 1, nextLine, len, true) +
    (lastLine && lastLine.trim() ? lastLine : '');
  token.info = delimiters[open]
  token.map = [startLine, state.line];
  token.markup = open;

  return true;
};



export function alignPlugin(md: MarkdownIt) {
  md.block.ruler.after('blockquote', 'align', alignRule, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  });

  md.renderer.rules.align = (tokens: Token[], idx: number) => {
    const direction = tokens[idx].info
    return `<div class="md-align-${direction}" style="text-align: ${direction};">${tokens[idx].content}</div>`;
  }
};
