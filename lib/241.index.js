(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[241],{

/***/ "./node_modules/prismjs/components/prism-lua.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lua.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.lua = {
	'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
	// \z may be used to skip the following space
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'number': /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'keyword': /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
	'function': /(?!\d)\w+(?=\s*(?:[({]))/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
		{
			// Match ".." but don't break "..."
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'punctuation': /[\[\](){},;]|\.+|:+/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWx1YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUIsRSIsImZpbGUiOiIyNDEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMubHVhID0ge1xuXHQnY29tbWVudCc6IC9eIyEuK3wtLSg/OlxcWyg9KilcXFtbXFxzXFxTXSo/XFxdXFwxXFxdfC4qKS9tLFxuXHQvLyBcXHogbWF5IGJlIHVzZWQgdG8gc2tpcCB0aGUgZm9sbG93aW5nIHNwYWNlXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxceig/OlxcclxcbnxcXHMpfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDF8XFxbKD0qKVxcW1tcXHNcXFNdKj9cXF1cXDJcXF0vLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzogL1xcYjB4W2EtZlxcZF0rXFwuP1thLWZcXGRdKig/OnBbKy1dP1xcZCspP1xcYnxcXGJcXGQrKD86XFwuXFxCfFxcLj9cXGQqKD86ZVsrLV0/XFxkKyk/XFxiKXxcXEJcXC5cXGQrKD86ZVsrLV0/XFxkKyk/XFxiL2ksXG5cdCdrZXl3b3JkJzogL1xcYig/OmFuZHxicmVha3xkb3xlbHNlfGVsc2VpZnxlbmR8ZmFsc2V8Zm9yfGZ1bmN0aW9ufGdvdG98aWZ8aW58bG9jYWx8bmlsfG5vdHxvcnxyZXBlYXR8cmV0dXJufHRoZW58dHJ1ZXx1bnRpbHx3aGlsZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvKD8hXFxkKVxcdysoPz1cXHMqKD86Wyh7XSkpLyxcblx0J29wZXJhdG9yJzogW1xuXHRcdC9bLSsqJV4mfCNdfFxcL1xcLz98PFs8PV0/fD5bPj1dP3xbPX5dPT8vLFxuXHRcdHtcblx0XHRcdC8vIE1hdGNoIFwiLi5cIiBidXQgZG9uJ3QgYnJlYWsgXCIuLi5cIlxuXHRcdFx0cGF0dGVybjogLyhefFteLl0pXFwuXFwuKD8hXFwuKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQncHVuY3R1YXRpb24nOiAvW1xcW1xcXSgpe30sO118XFwuK3w6Ky9cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==