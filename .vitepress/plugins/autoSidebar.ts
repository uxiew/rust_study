// https://github.com/luciozhang/vitepress-plugin-autobar/blob/master/src/index.ts
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
  indexLink?: string,
  /** Directoty path to ignore from being captured. */
  ignoreDirs?: Array<string>,
  /** File path to ignore from being captured. */
  ignoreMDFiles?: Array<string>, //
  /** Function to customize files sorting rules, use lodash's sortBy. */
  sortBy?: (filepath: string) => number
  /** The subdirectories are treated as hierarchies. when value is false, All markdown files in the directory are read*/
  hierarchy?: boolean
}

const defaultOptions = {
  hierarchy: true,
  indexLink: 'index',
  ignoreDirs: ['node_modules'],
}

// handle md file name
const getName = (path: string) => {
  let name = path.split(sep).pop() || path;
  const argsIndex = name.lastIndexOf('--');
  if (argsIndex > -1) {
    name = name.substring(0, argsIndex);
  }
  // name = name.replace(/^\d+[.\-_ ]?/, '');
  return name
};

// handle dir name
const getDirName = (path: string) => {
  let name = path.split(sep).shift() || path;
  name = name.replace(/^\d+[.\-_ ]?/, '');
  return name
};

// Load all MD files in a specified directory
const getChildren = function(parentPath: string, options: Options) {
  const { indexLink, sortBy: sortFn, ignoreMDFiles, hierarchy } = options
  const pattern = '/**/*.md';
  const files = globbySync(join(parentPath, pattern)).map((path) => {
    // fix parentPath relative dir
    const newPath = path.slice((new RegExp(`.*?${sep}`)).exec(path)![0].length, -3);
    // ignore some files
    if (ignoreMDFiles?.length && ignoreMDFiles.some((ifile) => newPath.endsWith(ifile))) {
      return 0;
    }
    if (hierarchy && indexLink === basename(newPath)) return 0;
    return { path: newPath };
  });

  remove(files, file => file === 0);
  // Return the ordered list of files, sort by Options.sortBy or 'path'
  return sortBy(files, sortFn ? (f) => sortFn(f!.path) : ['path']).map(file => file?.path || '');
};

/**
  必须要`/`开头的绝对路径，否则上一页、下一页会出问题；
  https://vitepre
  ss.dev/reference/default-theme-sidebar#the-basics
*/
function normalize(path: string) {
  return sep + path + '.md'
}

// Return sidebar config for given baseDir.
function side(baseDir: string, opts?: Options) {
  const options = merge({}, defaultOptions, opts);
  const mdFiles = getChildren(baseDir, options);

  const sidebars: Sidebar = [];
  // strip number of folder's name
  mdFiles.forEach((item) => {
    const dirName = options.hierarchy ? getDirName(item) : item.split(sep).pop() || 'index';
    const isDirectChildFile = item.search(sep) < 0;

    if (options?.ignoreDirs?.length
      && options?.ignoreDirs.findIndex(item => options.hierarchy ? dirName === getDirName(item) : dirName.indexOf(getDirName(item)) !== -1) !== -1) {
      // terminating subsequent logic
      return;
    }

    const mdFileName = getName(item);
    const sidebarItemIndex = sidebars.findIndex(sidebar => sidebar.text === dirName);

    if ((sidebarItemIndex !== -1) && options.hierarchy) {
      sidebars[sidebarItemIndex].items?.push({
        text: mdFileName,
        link: normalize(item)
      });
    } else {
      const link = isDirectChildFile ?
        mdFileName :
        options.hierarchy
          ? options.indexLink && join(dirName, options.indexLink)
          : item

      sidebars.push({
        text: dirName,
        link: normalize(link),
        items: (!options.hierarchy || isDirectChildFile) ? undefined : [{
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
