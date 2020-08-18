(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/prismjs/components/prism-bison.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bison.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bison = Prism.languages.extend('c', {});

Prism.languages.insertBefore('bison', 'comment', {
	'bison': {
		// This should match all the beginning of the file
		// including the prologue(s), the bison declarations and
		// the grammar rules.
		pattern: /^[\s\S]*?%%[\s\S]*?%%/,
		inside: {
			'c': {
				// Allow for one level of nested braces
				pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
				inside: {
					'delimiter': {
						pattern: /^%?\{|%?\}$/,
						alias: 'punctuation'
					},
					'bison-variable': {
						pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
						alias: 'variable',
						inside: {
							'punctuation': /<|>/
						}
					},
					rest: Prism.languages.c
				}
			},
			'comment': Prism.languages.c.comment,
			'string': Prism.languages.c.string,
			'property': /\S+(?=:)/,
			'keyword': /%\w+/,
			'number': {
				pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
				lookbehind: true
			},
			'punctuation': /%[%?]|[|:;\[\]<>]/
		}
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJpc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVcsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDckQ7QUFDQTtBQUNBLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6IjQ1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmJpc29uID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnYycsIHt9KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYmlzb24nLCAnY29tbWVudCcsIHtcblx0J2Jpc29uJzoge1xuXHRcdC8vIFRoaXMgc2hvdWxkIG1hdGNoIGFsbCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmaWxlXG5cdFx0Ly8gaW5jbHVkaW5nIHRoZSBwcm9sb2d1ZShzKSwgdGhlIGJpc29uIGRlY2xhcmF0aW9ucyBhbmRcblx0XHQvLyB0aGUgZ3JhbW1hciBydWxlcy5cblx0XHRwYXR0ZXJuOiAvXltcXHNcXFNdKj8lJVtcXHNcXFNdKj8lJS8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnYyc6IHtcblx0XHRcdFx0Ly8gQWxsb3cgZm9yIG9uZSBsZXZlbCBvZiBuZXN0ZWQgYnJhY2VzXG5cdFx0XHRcdHBhdHRlcm46IC8lXFx7W1xcc1xcU10qPyVcXH18XFx7KD86XFx7W159XSpcXH18W157fV0pKlxcfS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXiU/XFx7fCU/XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J2Jpc29uLXZhcmlhYmxlJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL1skQF0oPzo8W15cXHM+XSs+KT9bXFx3JF0rLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC88fD4vXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuY1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMuYy5jb21tZW50LFxuXHRcdFx0J3N0cmluZyc6IFByaXNtLmxhbmd1YWdlcy5jLnN0cmluZyxcblx0XHRcdCdwcm9wZXJ0eSc6IC9cXFMrKD89OikvLFxuXHRcdFx0J2tleXdvcmQnOiAvJVxcdysvLFxuXHRcdFx0J251bWJlcic6IHtcblx0XHRcdFx0cGF0dGVybjogLyhefFteQF0pXFxiKD86MHhbXFxkYS1mXSt8XFxkKykvaSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC8lWyU/XXxbfDo7XFxbXFxdPD5dL1xuXHRcdH1cblx0fVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==