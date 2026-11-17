// Fails the build if a doc is missing its front-matter `description`, or if
// the description is too long. docusaurus-plugin-llms puts each description
// into /llms.txt, which the in-app AI assistant uses to choose which pages to
// read. The plugin falls back to the page's first paragraph when there is no
// description, and cuts descriptions over 150 characters to 147 plus "...".
// Runs automatically before `npm run build` (the "prebuild" script).
import {readdirSync, readFileSync} from 'node:fs';
import {join, relative} from 'node:path';

const DOCS_DIR = 'docs';
const MAX_LENGTH = 150;

function docFiles(dir) {
  return readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return docFiles(path);
    return /\.mdx?$/.test(entry.name) ? [path] : [];
  });
}

function description(source) {
  const frontMatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatter) return undefined;
  const line = frontMatter[1].match(/^description:[ \t]*(.*)$/m);
  if (!line) return undefined;
  const value = line[1].trim();
  if (value.startsWith('"')) return JSON.parse(value);
  if (value.startsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
  return value;
}

const problems = [];
for (const file of docFiles(DOCS_DIR)) {
  const name = relative('.', file);
  let text;
  try {
    text = description(readFileSync(file, 'utf8'));
  } catch {
    problems.push(`${name}: can't read the description (keep it on one line, in double quotes)`);
    continue;
  }
  if (!text) {
    problems.push(`${name}: no front-matter description`);
  } else if (text.length > MAX_LENGTH) {
    problems.push(`${name}: description is ${text.length} characters (max ${MAX_LENGTH})`);
  }
}

if (problems.length > 0) {
  console.error('Doc description check failed. See "llms.txt and Markdown copies" in README.md.');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}
console.log('Doc description check passed.');
