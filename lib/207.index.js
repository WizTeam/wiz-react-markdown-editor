(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[207],{

/***/ "./node_modules/prismjs/components/prism-json.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		greedy: true
	},
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:true|false)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjIwNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3Lmpzb24ub3JnL2pzb24tZW4uaHRtbFxuUHJpc20ubGFuZ3VhZ2VzLmpzb24gPSB7XG5cdCdwcm9wZXJ0eSc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiKD89XFxzKjopLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiKD8hXFxzKjopLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NvbW1lbnQnOiB7XG5cdFx0cGF0dGVybjogL1xcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzogLy0/XFxiXFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspP1xcYi9pLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXSxdLyxcblx0J29wZXJhdG9yJzogLzovLFxuXHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdCdudWxsJzoge1xuXHRcdHBhdHRlcm46IC9cXGJudWxsXFxiLyxcblx0XHRhbGlhczogJ2tleXdvcmQnXG5cdH1cbn07XG5cblByaXNtLmxhbmd1YWdlcy53ZWJtYW5pZmVzdCA9IFByaXNtLmxhbmd1YWdlcy5qc29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==