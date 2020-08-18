(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[447],{

/***/ "./node_modules/prismjs/components/prism-xquery.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-xquery.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.xquery = Prism.languages.extend('markup', {
		'xquery-comment': {
			pattern: /\(:[\s\S]*?:\)/,
			greedy: true,
			alias: "comment"
		},
		'string': {
			pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
			greedy: true
		},
		'extension': {
			pattern: /\(#.+?#\)/,
			alias: 'symbol'
		},
		'variable': /\$[\w-:]+/,
		'axis': {
			pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
			lookbehind: true,
			alias: 'operator'
		},
		'keyword-operator': {
			pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
			lookbehind: true,
			alias: 'operator'
		},
		'keyword': {
			pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
			lookbehind: true
		},
		'function': /[\w-]+(?::[\w-]+)*(?=\s*\()/,
		'xquery-element': {
			pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
			lookbehind: true,
			alias: 'tag'
		},
		'xquery-attribute': {
			pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
			lookbehind: true,
			alias: 'attr-name'
		},
		'builtin': {
			pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
			lookbehind: true
		},
		'number': /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
		'operator': [
			/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
			{
				pattern: /(\s)-(?=\s)/,
				lookbehind: true
			}
		],
		'punctuation': /[[\](){},;:/]/
	});

	Prism.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
	Prism.languages.xquery['tag'].inside['attr-value'].pattern = /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i;
	Prism.languages.xquery['tag'].inside['attr-value'].inside['punctuation'] = /^="|"$/;
	Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {
		// Allow for two levels of nesting
		pattern: /{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}/,
		inside: Prism.languages.xquery,
		alias: 'language-xquery'
	};

	// The following will handle plain text inside tags
	var stringifyToken = function (token) {
		if (typeof token === 'string') {
			return token;
		}
		if (typeof token.content === 'string') {
			return token.content;
		}
		return token.content.map(stringifyToken).join('');
	};

	var walkTokens = function (tokens) {
		var openedTags = [];
		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			var notTagNorBrace = false;

			if (typeof token !== 'string') {
				if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
					// We found a tag, now find its kind

					if (token.content[0].content[0].content === '</') {
						// Closing tag
						if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
							// Pop matching opening tag
							openedTags.pop();
						}
					} else {
						if (token.content[token.content.length - 1].content === '/>') {
							// Autoclosed tag, ignore
						} else {
							// Opening tag
							openedTags.push({
								tagName: stringifyToken(token.content[0].content[1]),
								openedBraces: 0
							});
						}
					}
				} else if (
					openedTags.length > 0 && token.type === 'punctuation' && token.content === '{' &&
					// Ignore `{{`
					(!tokens[i + 1] || tokens[i + 1].type !== 'punctuation' || tokens[i + 1].content !== '{') &&
					(!tokens[i - 1] || tokens[i - 1].type !== 'plain-text' || tokens[i - 1].content !== '{')
				) {
					// Here we might have entered an XQuery expression inside a tag
					openedTags[openedTags.length - 1].openedBraces++;

				} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

					// Here we might have left an XQuery expression inside a tag
					openedTags[openedTags.length - 1].openedBraces--;

				} else if (token.type !== 'comment') {
					notTagNorBrace = true
				}
			}
			if (notTagNorBrace || typeof token === 'string') {
				if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
					// Here we are inside a tag, and not inside an XQuery expression.
					// That's plain text: drop any tokens matched.
					var plainText = stringifyToken(token);

					// And merge text with adjacent text
					if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
						plainText += stringifyToken(tokens[i + 1]);
						tokens.splice(i + 1, 1);
					}
					if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
						plainText = stringifyToken(tokens[i - 1]) + plainText;
						tokens.splice(i - 1, 1);
						i--;
					}

					if (/^\s+$/.test(plainText)) {
						tokens[i] = plainText;
					} else {
						tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
					}
				}
			}

			if (token.content && typeof token.content !== 'string') {
				walkTokens(token.content);
			}
		}
	};

	Prism.hooks.add('after-tokenize', function (env) {
		if (env.language !== 'xquery') {
			return;
		}
		walkTokens(env.tokens);
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXhxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCLEVBQUU7O0FBRUYsdUdBQXVHLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzdJLHFGQUFxRixJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSTtBQUMzSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLGtGQUFrRjtBQUNsRixrQkFBa0I7QUFDbEIsNEZBQTRGO0FBQzVGLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7O0FBRUEsS0FBSyw2SUFBNkk7O0FBRWxKO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUMiLCJmaWxlIjoiNDQ3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdFByaXNtLmxhbmd1YWdlcy54cXVlcnkgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG5cdFx0J3hxdWVyeS1jb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogL1xcKDpbXFxzXFxTXSo/OlxcKS8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogXCJjb21tZW50XCJcblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcMVxcMXwoPyFcXDEpW1xcc1xcU10pKlxcMS8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdleHRlbnNpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFwoIy4rPyNcXCkvLFxuXHRcdFx0YWxpYXM6ICdzeW1ib2wnXG5cdFx0fSxcblx0XHQndmFyaWFibGUnOiAvXFwkW1xcdy06XSsvLFxuXHRcdCdheGlzJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLV0pKD86YW5jZXN0b3IoPzotb3Itc2VsZik/fGF0dHJpYnV0ZXxjaGlsZHxkZXNjZW5kYW50KD86LW9yLXNlbGYpP3xmb2xsb3dpbmcoPzotc2libGluZyk/fHBhcmVudHxwcmVjZWRpbmcoPzotc2libGluZyk/fHNlbGYpKD89OjopLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdH0sXG5cdFx0J2tleXdvcmQtb3BlcmF0b3InOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W146LV0pXFxiKD86YW5kfGNhc3RhYmxlIGFzfGRpdnxlcXxleGNlcHR8Z2V8Z3R8aWRpdnxpbnN0YW5jZSBvZnxpbnRlcnNlY3R8aXN8bGV8bHR8bW9kfG5lfG9yfHVuaW9uKVxcYig/PSR8W146LV0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdH0sXG5cdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W146LV0pXFxiKD86YXN8YXNjZW5kaW5nfGF0fGJhc2UtdXJpfGJvdW5kYXJ5LXNwYWNlfGNhc2V8Y2FzdCBhc3xjb2xsYXRpb258Y29uc3RydWN0aW9ufGNvcHktbmFtZXNwYWNlc3xkZWNsYXJlfGRlZmF1bHR8ZGVzY2VuZGluZ3xlbHNlfGVtcHR5ICg/OmdyZWF0ZXN0fGxlYXN0KXxlbmNvZGluZ3xldmVyeXxleHRlcm5hbHxmb3J8ZnVuY3Rpb258aWZ8aW1wb3J0fGlufGluaGVyaXR8bGF4fGxldHxtYXB8bW9kdWxlfG5hbWVzcGFjZXxuby1pbmhlcml0fG5vLXByZXNlcnZlfG9wdGlvbnxvcmRlcig/OiBieXxlZHxpbmcpP3xwcmVzZXJ2ZXxyZXR1cm58c2F0aXNmaWVzfHNjaGVtYXxzb21lfHN0YWJsZXxzdHJpY3R8c3RyaXB8dGhlbnx0b3x0cmVhdCBhc3x0eXBlc3dpdGNofHVub3JkZXJlZHx2YWxpZGF0ZXx2YXJpYWJsZXx2ZXJzaW9ufHdoZXJlfHhxdWVyeSlcXGIoPz0kfFteOi1dKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnZnVuY3Rpb24nOiAvW1xcdy1dKyg/OjpbXFx3LV0rKSooPz1cXHMqXFwoKS8sXG5cdFx0J3hxdWVyeS1lbGVtZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyhlbGVtZW50XFxzKylbXFx3LV0rKD86OltcXHctXSspKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICd0YWcnXG5cdFx0fSxcblx0XHQneHF1ZXJ5LWF0dHJpYnV0ZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oYXR0cmlidXRlXFxzKylbXFx3LV0rKD86OltcXHctXSspKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdhdHRyLW5hbWUnXG5cdFx0fSxcblx0XHQnYnVpbHRpbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXjotXSlcXGIoPzphdHRyaWJ1dGV8Y29tbWVudHxkb2N1bWVudHxlbGVtZW50fHByb2Nlc3NpbmctaW5zdHJ1Y3Rpb258dGV4dHx4czooPzphbnlBdG9taWNUeXBlfGFueVR5cGV8YW55VVJJfGJhc2U2NEJpbmFyeXxib29sZWFufGJ5dGV8ZGF0ZXxkYXRlVGltZXxkYXlUaW1lRHVyYXRpb258ZGVjaW1hbHxkb3VibGV8ZHVyYXRpb258RU5USVRJRVN8RU5USVRZfGZsb2F0fGdEYXl8Z01vbnRofGdNb250aERheXxnWWVhcnxnWWVhck1vbnRofGhleEJpbmFyeXxJRHxJRFJFRlM/fGludHxpbnRlZ2VyfGxhbmd1YWdlfGxvbmd8TmFtZXxOQ05hbWV8bmVnYXRpdmVJbnRlZ2VyfE5NVE9LRU5TP3xub25OZWdhdGl2ZUludGVnZXJ8bm9uUG9zaXRpdmVJbnRlZ2VyfG5vcm1hbGl6ZWRTdHJpbmd8Tk9UQVRJT058cG9zaXRpdmVJbnRlZ2VyfFFOYW1lfHNob3J0fHN0cmluZ3x0aW1lfHRva2VufHVuc2lnbmVkKD86Qnl0ZXxJbnR8TG9uZ3xTaG9ydCl8dW50eXBlZCg/OkF0b21pYyk/fHllYXJNb250aER1cmF0aW9uKSlcXGIoPz0kfFteOi1dKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnbnVtYmVyJzogL1xcYlxcZCsoPzpcXC5cXGQrKT8oPzpFWystXT9cXGQrKT8vLFxuXHRcdCdvcGVyYXRvcic6IFtcblx0XHRcdC9bKyo9P3xAXXxcXC5cXC4/fDo9fCE9fDxbPTxdP3w+Wz0+XT8vLFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxccyktKD89XFxzKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bW1xcXSgpe30sOzovXS9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnhxdWVyeS50YWcucGF0dGVybiA9IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMrW15cXHM+XFwvPV0rKD86PSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXx7KD8heykoPzp7KD86e1tee31dKn18W157fV0pKn18W157fV0pK318KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj49XSspKT8pKlxccypcXC8/Pi9pO1xuXHRQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5wYXR0ZXJuID0gLz0oPzooXCJ8JykoPzpcXFxcW1xcc1xcU118eyg/IXspKD86eyg/OntbXnt9XSp9fFtee31dKSp9fFtee31dKSt9fCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHMnXCI+PV0rKS9pO1xuXHRQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ3B1bmN0dWF0aW9uJ10gPSAvXj1cInxcIiQvO1xuXHRQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2V4cHJlc3Npb24nXSA9IHtcblx0XHQvLyBBbGxvdyBmb3IgdHdvIGxldmVscyBvZiBuZXN0aW5nXG5cdFx0cGF0dGVybjogL3soPyF7KSg/OnsoPzp7W157fV0qfXxbXnt9XSkqfXxbXnt9XSkrfS8sXG5cdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5LFxuXHRcdGFsaWFzOiAnbGFuZ3VhZ2UteHF1ZXJ5J1xuXHR9O1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xuXHR2YXIgc3RyaW5naWZ5VG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRva2VuO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdG9rZW4uY29udGVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHRva2VuLmNvbnRlbnQubWFwKHN0cmluZ2lmeVRva2VuKS5qb2luKCcnKTtcblx0fTtcblxuXHR2YXIgd2Fsa1Rva2VucyA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHR2YXIgb3BlbmVkVGFncyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cdFx0XHR2YXIgbm90VGFnTm9yQnJhY2UgPSBmYWxzZTtcblxuXHRcdFx0aWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgPT09ICd0YWcnICYmIHRva2VuLmNvbnRlbnRbMF0gJiYgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJykge1xuXHRcdFx0XHRcdC8vIFdlIGZvdW5kIGEgdGFnLCBub3cgZmluZCBpdHMga2luZFxuXG5cdFx0XHRcdFx0aWYgKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFswXS5jb250ZW50ID09PSAnPC8nKSB7XG5cdFx0XHRcdFx0XHQvLyBDbG9zaW5nIHRhZ1xuXHRcdFx0XHRcdFx0aWYgKG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJiBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0udGFnTmFtZSA9PT0gc3RyaW5naWZ5VG9rZW4odG9rZW4uY29udGVudFswXS5jb250ZW50WzFdKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBQb3AgbWF0Y2hpbmcgb3BlbmluZyB0YWdcblx0XHRcdFx0XHRcdFx0b3BlbmVkVGFncy5wb3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRva2VuLmNvbnRlbnRbdG9rZW4uY29udGVudC5sZW5ndGggLSAxXS5jb250ZW50ID09PSAnLz4nKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEF1dG9jbG9zZWQgdGFnLCBpZ25vcmVcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIE9wZW5pbmcgdGFnXG5cdFx0XHRcdFx0XHRcdG9wZW5lZFRhZ3MucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0dGFnTmFtZTogc3RyaW5naWZ5VG9rZW4odG9rZW4uY29udGVudFswXS5jb250ZW50WzFdKSxcblx0XHRcdFx0XHRcdFx0XHRvcGVuZWRCcmFjZXM6IDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJiB0b2tlbi50eXBlID09PSAncHVuY3R1YXRpb24nICYmIHRva2VuLmNvbnRlbnQgPT09ICd7JyAmJlxuXHRcdFx0XHRcdC8vIElnbm9yZSBge3tgXG5cdFx0XHRcdFx0KCF0b2tlbnNbaSArIDFdIHx8IHRva2Vuc1tpICsgMV0udHlwZSAhPT0gJ3B1bmN0dWF0aW9uJyB8fCB0b2tlbnNbaSArIDFdLmNvbnRlbnQgIT09ICd7JykgJiZcblx0XHRcdFx0XHQoIXRva2Vuc1tpIC0gMV0gfHwgdG9rZW5zW2kgLSAxXS50eXBlICE9PSAncGxhaW4tdGV4dCcgfHwgdG9rZW5zW2kgLSAxXS5jb250ZW50ICE9PSAneycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIEhlcmUgd2UgbWlnaHQgaGF2ZSBlbnRlcmVkIGFuIFhRdWVyeSBleHByZXNzaW9uIGluc2lkZSBhIHRhZ1xuXHRcdFx0XHRcdG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMrKztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJiBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzID4gMCAmJiB0b2tlbi50eXBlID09PSAncHVuY3R1YXRpb24nICYmIHRva2VuLmNvbnRlbnQgPT09ICd9Jykge1xuXG5cdFx0XHRcdFx0Ly8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYW4gWFF1ZXJ5IGV4cHJlc3Npb24gaW5zaWRlIGEgdGFnXG5cdFx0XHRcdFx0b3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcy0tO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSAhPT0gJ2NvbW1lbnQnKSB7XG5cdFx0XHRcdFx0bm90VGFnTm9yQnJhY2UgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChub3RUYWdOb3JCcmFjZSB8fCB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIEhlcmUgd2UgYXJlIGluc2lkZSBhIHRhZywgYW5kIG5vdCBpbnNpZGUgYW4gWFF1ZXJ5IGV4cHJlc3Npb24uXG5cdFx0XHRcdFx0Ly8gVGhhdCdzIHBsYWluIHRleHQ6IGRyb3AgYW55IHRva2VucyBtYXRjaGVkLlxuXHRcdFx0XHRcdHZhciBwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbik7XG5cblx0XHRcdFx0XHQvLyBBbmQgbWVyZ2UgdGV4dCB3aXRoIGFkamFjZW50IHRleHRcblx0XHRcdFx0XHRpZiAoaSA8IHRva2Vucy5sZW5ndGggLSAxICYmICh0eXBlb2YgdG9rZW5zW2kgKyAxXSA9PT0gJ3N0cmluZycgfHwgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpKSB7XG5cdFx0XHRcdFx0XHRwbGFpblRleHQgKz0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgKyAxXSk7XG5cdFx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGkgPiAwICYmICh0eXBlb2YgdG9rZW5zW2kgLSAxXSA9PT0gJ3N0cmluZycgfHwgdG9rZW5zW2kgLSAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpKSB7XG5cdFx0XHRcdFx0XHRwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSAtIDFdKSArIHBsYWluVGV4dDtcblx0XHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoaSAtIDEsIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgvXlxccyskLy50ZXN0KHBsYWluVGV4dCkpIHtcblx0XHRcdFx0XHRcdHRva2Vuc1tpXSA9IHBsYWluVGV4dDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9rZW5zW2ldID0gbmV3IFByaXNtLlRva2VuKCdwbGFpbi10ZXh0JywgcGxhaW5UZXh0LCBudWxsLCBwbGFpblRleHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0d2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSAneHF1ZXJ5Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xuXHR9KTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==