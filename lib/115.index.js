(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/prismjs/components/prism-erlang.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erlang.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.erlang = {
	'comment': /%.+/,
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"/,
		greedy: true
	},
	'quoted-function': {
		pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
		alias: 'function'
	},
	'quoted-atom': {
		pattern: /'(?:\\.|[^\\'\r\n])+'/,
		alias: 'atom'
	},
	'boolean': /\b(?:true|false)\b/,
	'keyword': /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
	'number': [
		/\$\\?./,
		/\d+#[a-z0-9]+/i,
		/(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
	],
	'function': /\b[a-z][\w@]*(?=\()/,
	'variable': {
		// Look-behind is used to prevent wrong highlighting of atoms containing "@"
		pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
		lookbehind: true
	},
	'operator': [
		/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
		{
			// We don't want to match <<
			pattern: /(^|[^<])<(?!<)/,
			lookbehind: true
		},
		{
			// We don't want to match >>
			pattern: /(^|[^>])>(?!>)/,
			lookbehind: true
		}
	],
	'atom': /\b[a-z][\w@]*/,
	'punctuation': /[()[\]{}:;,.#|]|<<|>>/

};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVybGFuZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFOztBQUUzQixFIiwiZmlsZSI6IjExNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5lcmxhbmcgPSB7XG5cdCdjb21tZW50JzogLyUuKy8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdxdW90ZWQtZnVuY3Rpb24nOiB7XG5cdFx0cGF0dGVybjogLycoPzpcXFxcLnxbXlxcXFwnXFxyXFxuXSkrJyg/PVxcKCkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdxdW90ZWQtYXRvbSc6IHtcblx0XHRwYXR0ZXJuOiAvJyg/OlxcXFwufFteXFxcXCdcXHJcXG5dKSsnLyxcblx0XHRhbGlhczogJ2F0b20nXG5cdH0sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2tleXdvcmQnOiAvXFxiKD86ZnVufHdoZW58Y2FzZXxvZnxlbmR8aWZ8cmVjZWl2ZXxhZnRlcnx0cnl8Y2F0Y2gpXFxiLyxcblx0J251bWJlcic6IFtcblx0XHQvXFwkXFxcXD8uLyxcblx0XHQvXFxkKyNbYS16MC05XSsvaSxcblx0XHQvKD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2lcblx0XSxcblx0J2Z1bmN0aW9uJzogL1xcYlthLXpdW1xcd0BdKig/PVxcKCkvLFxuXHQndmFyaWFibGUnOiB7XG5cdFx0Ly8gTG9vay1iZWhpbmQgaXMgdXNlZCB0byBwcmV2ZW50IHdyb25nIGhpZ2hsaWdodGluZyBvZiBhdG9tcyBjb250YWluaW5nIFwiQFwiXG5cdFx0cGF0dGVybjogLyhefFteQF0pKD86XFxifFxcPylbQS1aX11bXFx3QF0qLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdvcGVyYXRvcic6IFtcblx0XHQvWz1cXC88PjpdPXw9WzpcXC9dPXxcXCtcXCs/fC0tP3xbPSpcXC8hXXxcXGIoPzpibm90fGRpdnxyZW18YmFuZHxib3J8Ynhvcnxic2x8YnNyfG5vdHxhbmR8b3J8eG9yfG9yZWxzZXxhbmRhbHNvKVxcYi8sXG5cdFx0e1xuXHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBtYXRjaCA8PFxuXHRcdFx0cGF0dGVybjogLyhefFtePF0pPCg/ITwpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gbWF0Y2ggPj5cblx0XHRcdHBhdHRlcm46IC8oXnxbXj5dKT4oPyE+KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnYXRvbSc6IC9cXGJbYS16XVtcXHdAXSovLFxuXHQncHVuY3R1YXRpb24nOiAvWygpW1xcXXt9OjssLiN8XXw8PHw+Pi9cblxufTsiXSwic291cmNlUm9vdCI6IiJ9