(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/prismjs/components/prism-dhall.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-dhall.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ABNF grammar:
// https://github.com/dhall-lang/dhall-lang/blob/master/standard/dhall.abnf

Prism.languages.dhall = {
	// Multi-line comments can be nested. E.g. {- foo {- bar -} -}
	// The multi-line pattern is essentially this:
	//   \{-(?:[^-{]|-(?!\})|\{(?!-)|<SELF>)*-\}
	'comment': /--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,
	'string': {
		pattern: /"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^{}]*\}/,
				inside: {
					'expression': {
						pattern: /(^\$\{)[\s\S]+(?=\}$)/,
						lookbehind: true,
						alias: 'language-dhall',
						inside: null // see blow
					},
					'punctuation': /\$\{|\}/
				}
			}
		}
	},
	'label': {
		pattern: /`[^`]*`/,
		greedy: true
	},
	'url': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L596
		pattern: /\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,
		greedy: true
	},
	'env': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L661
		pattern: /\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,
		greedy: true,
		inside: {
			'function': /^env/,
			'operator': /^:/,
			'variable': /[\s\S]+/
		}
	},
	'hash': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L725
		pattern: /\bsha256:[\da-fA-F]{64}\b/,
		inside: {
			'function': /sha256/,
			'operator': /:/,
			'number': /[\da-fA-F]{64}/
		}
	},

	// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L359
	'keyword': /\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,
	'builtin': /\b(?:Some|None)\b/,

	'boolean': /\b(?:False|True)\b/,
	'number': /\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
	'operator': /\/\\|\/\/\\\\|&&|\|\||[!=]=|===|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,
	'punctuation': /\.\.|[{}\[\](),./]/,

	// we'll just assume that every capital word left is a type name
	'class-name': /\b[A-Z]\w*\b/
};

Prism.languages.dhall.string.inside.interpolation.inside.expression.inside = Prism.languages.dhall;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRoYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsT0FBTyxRQUFRO0FBQzVEO0FBQ0EsUUFBUSxRQUFRLFFBQVEsSUFBSTtBQUM1QixvQkFBb0IsUUFBUSxRQUFRLElBQUksUUFBUSxRQUFRLFFBQVEsSUFBSSxVQUFVLEtBQUs7QUFDbkY7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksSUFBSTtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHlCQUF5QixHQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0IsNEJBQTRCO0FBQzFGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsZ0NBQWdDLEdBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEdBQUc7QUFDNUI7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI5MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFCTkYgZ3JhbW1hcjpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kaGFsbC1sYW5nL2RoYWxsLWxhbmcvYmxvYi9tYXN0ZXIvc3RhbmRhcmQvZGhhbGwuYWJuZlxuXG5QcmlzbS5sYW5ndWFnZXMuZGhhbGwgPSB7XG5cdC8vIE11bHRpLWxpbmUgY29tbWVudHMgY2FuIGJlIG5lc3RlZC4gRS5nLiB7LSBmb28gey0gYmFyIC19IC19XG5cdC8vIFRoZSBtdWx0aS1saW5lIHBhdHRlcm4gaXMgZXNzZW50aWFsbHkgdGhpczpcblx0Ly8gICBcXHstKD86W14te118LSg/IVxcfSl8XFx7KD8hLSl8PFNFTEY+KSotXFx9XG5cdCdjb21tZW50JzogLy0tLip8XFx7LSg/OlteLXtdfC0oPyFcXH0pfFxceyg/IS0pfFxcey0oPzpbXi17XXwtKD8hXFx9KXxcXHsoPyEtKSkqLVxcfSkqLVxcfS8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86W15cIlxcXFxdfFxcXFwuKSpcInwnJyg/OlteJ118Jyg/IScpfCcnJ3wnJ1xcJFxceykqJycoPyEnfFxcJCkvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdpbnRlcnBvbGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFwkXFx7W157fV0qXFx9Lyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2V4cHJlc3Npb24nOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKF5cXCRcXHspW1xcc1xcU10rKD89XFx9JCkvLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtZGhhbGwnLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBibG93XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwkXFx7fFxcfS9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0J2xhYmVsJzoge1xuXHRcdHBhdHRlcm46IC9gW15gXSpgLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3VybCc6IHtcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGhhbGwtbGFuZy9kaGFsbC1sYW5nL2Jsb2IvNWZkZThlZjFiZWFkNmZiNGU5OTlkM2MxZmZlNzA0NGNkMDE5ZDYzYS9zdGFuZGFyZC9kaGFsbC5hYm5mI0w1OTZcblx0XHRwYXR0ZXJuOiAvXFxiaHR0cHM/OlxcL1xcL1tcXHcuOiUhJCYnKis7PUB+LV0rKD86XFwvW1xcdy46JSEkJicqKzs9QH4tXSopKig/OlxcP1svP1xcdy46JSEkJicqKzs9QH4tXSopPy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdlbnYnOiB7XG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2RoYWxsLWxhbmcvZGhhbGwtbGFuZy9ibG9iLzVmZGU4ZWYxYmVhZDZmYjRlOTk5ZDNjMWZmZTcwNDRjZDAxOWQ2M2Evc3RhbmRhcmQvZGhhbGwuYWJuZiNMNjYxXG5cdFx0cGF0dGVybjogL1xcYmVudjooPzooPyFcXGQpXFx3K3xcIig/OlteXCJcXFxcPV18XFxcXC4pKlwiKS8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2Z1bmN0aW9uJzogL15lbnYvLFxuXHRcdFx0J29wZXJhdG9yJzogL146Lyxcblx0XHRcdCd2YXJpYWJsZSc6IC9bXFxzXFxTXSsvXG5cdFx0fVxuXHR9LFxuXHQnaGFzaCc6IHtcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGhhbGwtbGFuZy9kaGFsbC1sYW5nL2Jsb2IvNWZkZThlZjFiZWFkNmZiNGU5OTlkM2MxZmZlNzA0NGNkMDE5ZDYzYS9zdGFuZGFyZC9kaGFsbC5hYm5mI0w3MjVcblx0XHRwYXR0ZXJuOiAvXFxic2hhMjU2OltcXGRhLWZBLUZdezY0fVxcYi8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnZnVuY3Rpb24nOiAvc2hhMjU2Lyxcblx0XHRcdCdvcGVyYXRvcic6IC86Lyxcblx0XHRcdCdudW1iZXInOiAvW1xcZGEtZkEtRl17NjR9L1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGhhbGwtbGFuZy9kaGFsbC1sYW5nL2Jsb2IvNWZkZThlZjFiZWFkNmZiNGU5OTlkM2MxZmZlNzA0NGNkMDE5ZDYzYS9zdGFuZGFyZC9kaGFsbC5hYm5mI0wzNTlcblx0J2tleXdvcmQnOiAvXFxiKD86YXN8YXNzZXJ0fGVsc2V8Zm9yYWxsfGlmfGlufGxldHxtZXJnZXxtaXNzaW5nfHRoZW58dG9NYXB8dXNpbmd8d2l0aClcXGJ8XFx1MjIwMC8sXG5cdCdidWlsdGluJzogL1xcYig/OlNvbWV8Tm9uZSlcXGIvLFxuXG5cdCdib29sZWFuJzogL1xcYig/OkZhbHNlfFRydWUpXFxiLyxcblx0J251bWJlcic6IC9cXGJOYU5cXGJ8LT9cXGJJbmZpbml0eVxcYnxbKy1dP1xcYig/OjB4W1xcZGEtZkEtRl0rfFxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT8pXFxiLyxcblx0J29wZXJhdG9yJzogL1xcL1xcXFx8XFwvXFwvXFxcXFxcXFx8JiZ8XFx8XFx8fFshPV09fD09PXxcXC9cXC98LT58XFwrXFwrfDo6fFsrKiNAPTo/PD58XFxcXFxcdTIyMjdcXHUyYTUzXFx1MjI2MVxcdTJhZmRcXHUwM2JiXFx1MjE5Ml0vLFxuXHQncHVuY3R1YXRpb24nOiAvXFwuXFwufFt7fVxcW1xcXSgpLC4vXS8sXG5cblx0Ly8gd2UnbGwganVzdCBhc3N1bWUgdGhhdCBldmVyeSBjYXBpdGFsIHdvcmQgbGVmdCBpcyBhIHR5cGUgbmFtZVxuXHQnY2xhc3MtbmFtZSc6IC9cXGJbQS1aXVxcdypcXGIvXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMuZGhhbGwuc3RyaW5nLmluc2lkZS5pbnRlcnBvbGF0aW9uLmluc2lkZS5leHByZXNzaW9uLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5kaGFsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=