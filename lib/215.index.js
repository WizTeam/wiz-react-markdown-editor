(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[215],{

/***/ "./node_modules/prismjs/components/prism-jsx.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {

var javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern= /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;

Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;

Prism.languages.insertBefore('inside', 'attr-name', {
	'spread': {
		pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
		inside: {
			'punctuation': /\.{3}|[{}.]/,
			'attr-value': /\w+/
		}
	}
}, Prism.languages.jsx.tag);

Prism.languages.insertBefore('inside', 'attr-value',{
	'script': {
		// Allow for two levels of nesting
		pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
		inside: {
			'script-punctuation': {
				pattern: /^=(?={)/,
				alias: 'punctuation'
			},
			rest: Prism.languages.jsx
		},
		'alias': 'language-javascript'
	}
}, Prism.languages.jsx.tag);

// The following will handle plain text inside tags
var stringifyToken = function (token) {
	if (!token) {
		return '';
	}
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
			} else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {

				// Here we might have entered a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces++;

			} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

				// Here we might have left a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces--;

			} else {
				notTagNorBrace = true
			}
		}
		if (notTagNorBrace || typeof token === 'string') {
			if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
				// Here we are inside a tag, and not inside a JSX context.
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

				tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
			}
		}

		if (token.content && typeof token.content !== 'string') {
			walkTokens(token.content);
		}
	}
};

Prism.hooks.add('after-tokenize', function (env) {
	if (env.language !== 'jsx' && env.language !== 'tsx') {
		return;
	}
	walkTokens(env.tokens);
});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBLG1IQUFtSCxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sRUFBRSx5Q0FBeUM7O0FBRXpOO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU0sRUFBRSx5Q0FBeUM7QUFDL0Q7QUFDQSxzQkFBc0IsRUFBRSxJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSztBQUN4RDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJLHVGQUF1Rjs7QUFFM0Y7QUFDQTs7QUFFQSxJQUFJLDZJQUE2STs7QUFFako7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDIiwiZmlsZSI6IjIxNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihQcmlzbSkge1xuXG52YXIgamF2YXNjcmlwdCA9IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXG5QcmlzbS5sYW5ndWFnZXMuanN4ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywgamF2YXNjcmlwdCk7XG5QcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5wYXR0ZXJuPSAvPFxcLz8oPzpbXFx3LjotXStcXHMqKD86XFxzKyg/OltcXHcuOiQtXSsoPzo9KD86KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHN7J1wiPj1dK3xcXHsoPzpcXHsoPzpcXHtbXnt9XSpcXH18W157fV0pKlxcfXxbXnt9XSkrXFx9KSk/fFxce1xccypcXC57M31cXHMqW2Etel8kXVtcXHckXSooPzpcXC5bYS16XyRdW1xcdyRdKikqXFxzKlxcfSkpKlxccypcXC8/KT8+L2k7XG5cblByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsndGFnJ10ucGF0dGVybiA9IC9ePFxcLz9bXlxccz5cXC9dKi9pO1xuUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWydhdHRyLXZhbHVlJ10ucGF0dGVybiA9IC89KD8hXFx7KSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPl0rKS9pO1xuUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWyd0YWcnXS5pbnNpZGVbJ2NsYXNzLW5hbWUnXSA9IC9eW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSokLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItbmFtZScsIHtcblx0J3NwcmVhZCc6IHtcblx0XHRwYXR0ZXJuOiAvXFx7XFxzKlxcLnszfVxccypbYS16XyRdW1xcdyRdKig/OlxcLlthLXpfJF1bXFx3JF0qKSpcXHMqXFx9Lyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC57M318W3t9Ll0vLFxuXHRcdFx0J2F0dHItdmFsdWUnOiAvXFx3Ky9cblx0XHR9XG5cdH1cbn0sIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnKTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLHtcblx0J3NjcmlwdCc6IHtcblx0XHQvLyBBbGxvdyBmb3IgdHdvIGxldmVscyBvZiBuZXN0aW5nXG5cdFx0cGF0dGVybjogLz0oPzpcXHsoPzpcXHsoPzpcXHtbXnt9XSpcXH18W157fV0pKlxcfXxbXnt9XSkrXFx9KS9pLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3NjcmlwdC1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL149KD89eykvLFxuXHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0fSxcblx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qc3hcblx0XHR9LFxuXHRcdCdhbGlhcyc6ICdsYW5ndWFnZS1qYXZhc2NyaXB0J1xuXHR9XG59LCBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZyk7XG5cbi8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xudmFyIHN0cmluZ2lmeVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdGlmICghdG9rZW4pIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblx0aWYgKHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiB0b2tlbi5jb250ZW50O1xuXHR9XG5cdHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJyk7XG59O1xuXG52YXIgd2Fsa1Rva2VucyA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0dmFyIG9wZW5lZFRhZ3MgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cdFx0dmFyIG5vdFRhZ05vckJyYWNlID0gZmFsc2U7XG5cblx0XHRpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09ICd0YWcnICYmIHRva2VuLmNvbnRlbnRbMF0gJiYgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJykge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhIHRhZywgbm93IGZpbmQgaXRzIGtpbmRcblxuXHRcdFx0XHRpZiAodG9rZW4uY29udGVudFswXS5jb250ZW50WzBdLmNvbnRlbnQgPT09ICc8LycpIHtcblx0XHRcdFx0XHQvLyBDbG9zaW5nIHRhZ1xuXHRcdFx0XHRcdGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSkpIHtcblx0XHRcdFx0XHRcdC8vIFBvcCBtYXRjaGluZyBvcGVuaW5nIHRhZ1xuXHRcdFx0XHRcdFx0b3BlbmVkVGFncy5wb3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRva2VuLmNvbnRlbnRbdG9rZW4uY29udGVudC5sZW5ndGggLSAxXS5jb250ZW50ID09PSAnLz4nKSB7XG5cdFx0XHRcdFx0XHQvLyBBdXRvY2xvc2VkIHRhZywgaWdub3JlXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIE9wZW5pbmcgdGFnXG5cdFx0XHRcdFx0XHRvcGVuZWRUYWdzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHR0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuXHRcdFx0XHRcdFx0XHRvcGVuZWRCcmFjZXM6IDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJiB0b2tlbi5jb250ZW50ID09PSAneycpIHtcblxuXHRcdFx0XHQvLyBIZXJlIHdlIG1pZ2h0IGhhdmUgZW50ZXJlZCBhIEpTWCBjb250ZXh0IGluc2lkZSBhIHRhZ1xuXHRcdFx0XHRvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKys7XG5cblx0XHRcdH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ30nKSB7XG5cblx0XHRcdFx0Ly8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcblx0XHRcdFx0b3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcy0tO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3RUYWdOb3JCcmFjZSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5vdFRhZ05vckJyYWNlIHx8IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMCkge1xuXHRcdFx0XHQvLyBIZXJlIHdlIGFyZSBpbnNpZGUgYSB0YWcsIGFuZCBub3QgaW5zaWRlIGEgSlNYIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoYXQncyBwbGFpbiB0ZXh0OiBkcm9wIGFueSB0b2tlbnMgbWF0Y2hlZC5cblx0XHRcdFx0dmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKTtcblxuXHRcdFx0XHQvLyBBbmQgbWVyZ2UgdGV4dCB3aXRoIGFkamFjZW50IHRleHRcblx0XHRcdFx0aWYgKGkgPCB0b2tlbnMubGVuZ3RoIC0gMSAmJiAodHlwZW9mIHRva2Vuc1tpICsgMV0gPT09ICdzdHJpbmcnIHx8IHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKSkge1xuXHRcdFx0XHRcdHBsYWluVGV4dCArPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSArIDFdKTtcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSA+IDAgJiYgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fCB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JykpIHtcblx0XHRcdFx0XHRwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSAtIDFdKSArIHBsYWluVGV4dDtcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGkgLSAxLCAxKTtcblx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbnNbaV0gPSBuZXcgUHJpc20uVG9rZW4oJ3BsYWluLXRleHQnLCBwbGFpblRleHQsIG51bGwsIHBsYWluVGV4dCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpO1xuXHRcdH1cblx0fVxufTtcblxuUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0aWYgKGVudi5sYW5ndWFnZSAhPT0gJ2pzeCcgJiYgZW52Lmxhbmd1YWdlICE9PSAndHN4Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHR3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xufSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=