'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _renderer = _interopRequireDefault(require('./renderer'));

var _inlineRules = require('./inlineRules');

var _options = _interopRequireDefault(require('./options'));

var _utils = require('./utils');

var _utils2 = require('../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Inline Lexer & Compiler
 */
function InlineLexer(links, footnotes, options) {
  this.options = options || _options.default;
  this.links = links;
  this.footnotes = footnotes;
  this.rules = _inlineRules.normal;
  this.renderer = this.options.renderer || new _renderer.default();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = _inlineRules.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = _inlineRules.breaks;
    } else {
      this.rules = _inlineRules.gfm;
    }
  }

  this.highPriorityEmpRules = {};
  this.highPriorityLinkRules = {};

  for (const key of Object.keys(this.rules)) {
    if (/^(?:autolink|link|code|tag)$/.test(key) && this.rules[key] instanceof RegExp) {
      this.highPriorityEmpRules[key] = this.rules[key];
    }
  }

  for (const key of Object.keys(this.rules)) {
    if (/^(?:autolink|code|tag)$/.test(key) && this.rules[key] instanceof RegExp) {
      this.highPriorityLinkRules[key] = this.rules[key];
    }
  }
}
/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function (src) {
  // src = src
  // .replace(/\u00a0/g, ' ')
  const { disableInline, emoji, math, superSubScript, footnote } = this.options;

  if (disableInline) {
    return (0, _utils.escape)(src);
  }

  let out = '';
  let link;
  let text;
  let href;
  let title;
  let cap;
  let prevCapZero;
  let lastChar = '';

  while (src) {
    // escape
    cap = this.rules.escape.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += (0, _utils.escape)(cap[1]);
      continue;
    } // footnote identifier

    if (footnote) {
      cap = this.rules.footnoteIdentifier.exec(src);

      if (cap) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        const identifier = cap[1];
        const footnoteInfo = this.footnotes[identifier] || {};
        footnoteInfo.footnoteIdentifierId = (0, _utils.getUniqueId)();
        out += this.renderer.footnoteIdentifier(identifier, footnoteInfo);
      }
    } // tag

    cap = this.rules.tag.exec(src);

    if (cap) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }

      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : (0, _utils.escape)(cap[0])
        : cap[0];
      continue;
    } // link

    cap = this.rules.link.exec(src);

    if (cap && (0, _utils2.lowerPriority)(src, cap[0].length, this.highPriorityLinkRules)) {
      const lastParenIndex = (0, _utils.findClosingBracket)(cap[2], '()');

      if (lastParenIndex > -1) {
        const start = cap[0].indexOf('!') === 0 ? 5 : 4;
        const linkLen = start + cap[1].length + lastParenIndex;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }

      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      this.inLink = true;
      href = cap[2];

      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: this.escapes(href),
        title: this.escapes(title)
      });
      this.inLink = false;
      continue;
    } // reflink, nolink

    cap = this.rules.reflink.exec(src) || this.rules.nolink.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];

      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }

      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    } // math

    if (math) {
      cap = this.rules.math.exec(src);

      if (cap) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        text = cap[1];
        out += this.renderer.inlineMath(text);
      }
    } // emoji

    if (emoji) {
      cap = this.rules.emoji.exec(src);

      if (cap) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        text = cap[0];
        out += this.renderer.emoji(text, cap[2]);
      }
    } // superSubScript

    if (superSubScript) {
      cap = this.rules.superscript.exec(src) || this.rules.subscript.exec(src);

      if (cap) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        const content = cap[2];
        const marker = cap[1];
        out += this.renderer.script(content, marker);
      }
    } // strong

    cap = this.rules.strong.exec(src);

    if (cap) {
      const marker = cap[0].match(/^(?:_{1,2}|\*{1,2})/)[0];
      const isValid = (0, _utils2.validateEmphasize)(
        src,
        cap[0].length,
        marker,
        lastChar,
        this.highPriorityEmpRules
      );

      if (isValid) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }
    } // em

    cap = this.rules.em.exec(src);

    if (cap) {
      const marker = cap[0].match(/^(?:_{1,2}|\*{1,2})/)[0];
      const isValid = (0, _utils2.validateEmphasize)(
        src,
        cap[0].length,
        marker,
        lastChar,
        this.highPriorityEmpRules
      );

      if (isValid) {
        src = src.substring(cap[0].length);
        lastChar = cap[0].charAt(cap[0].length - 1);
        out += this.renderer.em(
          this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1])
        );
        continue;
      }
    } // code

    cap = this.rules.code.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += this.renderer.codespan((0, _utils.escape)(cap[2].trim(), true));
      continue;
    } // br

    cap = this.rules.br.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += this.renderer.br();
      continue;
    } // del (gfm)

    cap = this.rules.del.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    } // autolink

    cap = this.rules.autolink.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);

      if (cap[2] === '@') {
        text = (0, _utils.escape)(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = (0, _utils.escape)(cap[1]);
        href = text;
      }

      out += this.renderer.link(href, null, text);
      continue;
    } // url (gfm)

    cap = this.rules.url.exec(src);

    if (!this.inLink && cap) {
      if (cap[2] === '@') {
        text = (0, _utils.escape)(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        text = (0, _utils.escape)(cap[0]);

        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }

      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);
      out += this.renderer.link(href, null, text);
      continue;
    } // text

    cap = this.rules.text.exec(src);

    if (cap) {
      src = src.substring(cap[0].length);
      lastChar = cap[0].charAt(cap[0].length - 1);

      if (this.inRawBlock) {
        out += this.renderer.text(
          this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(cap[0])
              : (0, _utils.escape)(cap[0])
            : cap[0]
        );
      } else {
        out += this.renderer.text((0, _utils.escape)(this.smartypants(cap[0])));
      }

      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.prototype.escapes = function (text) {
  return text ? text.replace(this.rules._escapes, '$1') : text;
};
/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function (cap, link) {
  const href = link.href;
  const title = link.title ? (0, _utils.escape)(link.title) : null;
  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, (0, _utils.escape)(cap[1]));
};
/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function (text) {
  /* eslint-disable no-useless-escape */
  if (!this.options.smartypants) return text;
  return text // em-dashes
    .replace(/---/g, '\u2014') // en-dashes
    .replace(/--/g, '\u2013') // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // closing singles & apostrophes
    .replace(/'/g, '\u2019') // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // closing doubles
    .replace(/"/g, '\u201d') // ellipses
    .replace(/\.{3}/g, '\u2026');
  /* eslint-ensable no-useless-escape */
};
/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function (text) {
  if (!this.options.mangle) return text;
  const l = text.length;
  let out = '';
  let ch;

  for (let i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
};

var _default = InlineLexer;
exports.default = _default;
