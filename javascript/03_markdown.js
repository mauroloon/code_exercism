function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+?)${delimiter}`, 'g');
  return markdown.replace(pattern, `<${tag}>$1</${tag}>`);
}

function parseText(markdown) {
  return parser(parser(markdown, '__', 'strong'), '_', 'em');
}

function parseHeader(markdown) {
  const match = markdown.match(/^(#{1,6})\s*(.*)/);
  if (!match) return null;
  const [, hashes, text] = match;
  return wrap(text, `h${hashes.length}`);
}

function parseLineItem(markdown) {
  if (!markdown.startsWith('* ')) return null;
  return wrap(parseText(markdown.substring(2)), 'li');
}

function parseLine(markdown, list) {
  const header = parseHeader(markdown);
  if (header) return [list ? `</ul>${header}` : header, false];

  const lineItem = parseLineItem(markdown);
  if (lineItem) return [list ? lineItem : `<ul>${lineItem}`, true];

  const paragraph = wrap(parseText(markdown), 'p');
  return [list ? `</ul>${paragraph}` : paragraph, false];
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let list = false;
  for (const line of lines) {
    const [lineResult, newList] = parseLine(line, list);
    result += lineResult;
    list = newList;
  }
  return list ? result + '</ul>' : result;
}