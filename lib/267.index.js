(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[267],{

/***/ "./node_modules/prismjs/components/prism-nasm.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-nasm.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.nasm = {
	'comment': /;.*$/m,
	'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
	'label': {
		pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
		lookbehind: true,
		alias: 'function'
	},
	'keyword': [
		/\[?BITS (?:16|32|64)\]?/,
		{
			pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im,
			lookbehind: true
		},
		/(?:extern|global)[^;\r\n]*/i,
		/(?:CPU|FLOAT|DEFAULT).*$/m
	],
	'register': {
		pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
		alias: 'variable'
	},
	'number': /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
	'operator': /[\[\]*+\-\/%<>=&|$!]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW5hc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSIsImZpbGUiOiIyNjcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMubmFzbSA9IHtcblx0J2NvbW1lbnQnOiAvOy4qJC9tLFxuXHQnc3RyaW5nJzogLyhbXCInYF0pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdCdsYWJlbCc6IHtcblx0XHRwYXR0ZXJuOiAvKF5cXHMqKVtBLVphLXouXz8kXVtcXHcuPyRAfiNdKjovbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdC9cXFs/QklUUyAoPzoxNnwzMnw2NClcXF0/Lyxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF5cXHMqKXNlY3Rpb25cXHMqW2EtekEtWi5dKzo/L2ltLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0Lyg/OmV4dGVybnxnbG9iYWwpW147XFxyXFxuXSovaSxcblx0XHQvKD86Q1BVfEZMT0FUfERFRkFVTFQpLiokL21cblx0XSxcblx0J3JlZ2lzdGVyJzoge1xuXHRcdHBhdHRlcm46IC9cXGIoPzpzdFxcZHxbeHl6XW1tXFxkXFxkP3xbY2R0XXJcXGR8clxcZFxcZD9bYndkXT98W2VyXT9bYWJjZF14fFthYmNkXVtobF18W2VyXT8oPzpicHxzcHxzaXxkaSl8W2NkZWZnc11zKVxcYi9pLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH0sXG5cdCdudW1iZXInOiAvKD86XFxifCg/PVxcJCkpKD86MFtoeF1bXFxkYS1mXSpcXC4/W1xcZGEtZl0rKD86cFsrLV0/XFxkKyk/fFxcZFtcXGRhLWZdK1toeF18XFwkXFxkW1xcZGEtZl0qfDBbb3FdWzAtN10rfFswLTddK1tvcV18MFtieV1bMDFdK3xbMDFdK1tieV18MFtkdF1cXGQrfFxcZCpcXC4/XFxkKyg/OlxcLj9lWystXT9cXGQrKT9bZHRdPylcXGIvaSxcblx0J29wZXJhdG9yJzogL1tcXFtcXF0qK1xcLVxcLyU8Pj0mfCQhXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9