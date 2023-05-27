// https://github.com/luciozhang/vitepress-plugin-autobar/blob/master/src/index.ts
import startCase from 'lodash/startCase';
import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';
import remove from 'lodash/remove';
import { globbySync } from '@cjs-exporter/globby';
import { sep, basename, join } from 'node:path';

type Sidebar = SidebarGroup[] | SidebarItem;

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup extends SidebarItem {
  items: SidebarItem[] | undefined
  collapsible?: boolean
  collapsed?: boolean
}

interface Options {
  /** Item could be Linked to File */
  indexLink: string,
  /** Directoty path to ignore from being captured. */
  ignoreDirectory?: Array<string>,
  /** File path to ignore from being captured. */
  ignoreMDFiles?: Array<string>, //
  /** Function to customize files sorting rules, use lodash's sortBy. */
  sortBy?: (filepath: string) => number
}

const defaultOptions = {
  indexLink: '',
  ignoreMDFiles: ['index'],
  ignoreDirectory: ['node_modules'],
}

// handle md file name
const getName = (path: string) => {
  let name = path.split(sep).pop() || path;
  const argsIndex = name.lastIndexOf('--');
  if (argsIndex > -1) {
    name = name.substring(0, argsIndex);
  }

  // "001.guide" or "001-guide" or "001_guide" or "001 guide" -> "guide"
  name = name.replace(/^\d+[.\-_ ]?/, '');
  return startCase(name);
};

// handle dir name
const getDirName = (path: string) => {
  let name = path.split(sep).shift() || path;
  name = name.replace(/^\d+[.\-_ ]?/, '');

  return startCase(name);
};

// Load all MD files in a specified directory
const getChildren = function(parentPath: string, options: Options) {
  const { indexLink, sortBy: sortFn, ignoreMDFiles } = options
  const pattern = '/**/*.md';
  const files = globbySync(join(parentPath, pattern)).map((path) => {
    // fix parentPath relative dir
    const newPath = path.slice((new RegExp(`.*?${sep}`)).exec(path)![0].length, -3);
    // ignore some files
    if (ignoreMDFiles?.length && ignoreMDFiles.indexOf(newPath) !== -1) {
      return undefined;
    }
    if (indexLink === basename(newPath)) return undefined;
    return { path: '/' + newPath };
  });

  remove(files, file => file === undefined);
  // Return the ordered list of files, sort by 'path'
  return sortBy(files, sortFn ? (f) => sortFn(f!.path) : ['path']).map(file => file?.path || '');
};

/**
  必须要`/`开头的绝对路径，否则上一页、下一页会出问题；
  https://vitepress.dev/reference/default-theme-sidebar#the-basics
*/
function normalize(path: string) {
  return '/' + path + '.md'
}

// Return sidebar config for given baseDir.
function side(baseDir: string, opts?: Options) {
  const options = merge(defaultOptions, opts);
  const mdFiles = getChildren(baseDir, options);

  const sidebars: Sidebar = [];
  // strip number of folder's name
  mdFiles.forEach((item) => {
    item = item.slice(1);
    const dirName = getDirName(item);
    const isDirectChildFile = item.search(sep) < 0;
    if (options?.ignoreDirectory?.length
      && options?.ignoreDirectory.findIndex(item => getDirName(item) === dirName) !== -1) {
      return;
    }
    const mdFileName = getName(item);
    const sidebarItemIndex = sidebars.findIndex(sidebar => sidebar.text === dirName);
    if (sidebarItemIndex !== -1) {
      sidebars[sidebarItemIndex].items?.push({
        text: mdFileName,
        link: normalize(item)
      });
    } else {
      sidebars.push({
        text: dirName,
        link: normalize((isDirectChildFile ? mdFileName : options.indexLink && join(dirName, options.indexLink))),
        items: isDirectChildFile ? undefined : [{
          text: mdFileName,
          link: normalize(item)
        }],
      });
    }
  });

  return sidebars;
}

/**
 * Returns `sidebar` configuration for VitePress calculated using structure of directory and files in given path.
 * @param {String}  rootDir - Directory to get configuration for.
 * @param {Options} options - Option to create configuration.
 */
export const getSideBar = (rootDir = './', options?: Options) => side(rootDir, options);
