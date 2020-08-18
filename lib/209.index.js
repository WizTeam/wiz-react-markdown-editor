(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[209],{

/***/ "./node_modules/prismjs/components/prism-json5.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json5.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/

	Prism.languages.json5 = Prism.languages.extend('json', {
		'property': [
			{
				pattern: RegExp(string.source + '(?=\\s*:)'),
				greedy: true
			},
			{
				pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,
				alias: 'unquoted'
			}
		],
		'string': {
			pattern: string,
			greedy: true
		},
		'number': /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+\b)?/
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzb241LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiIyMDkuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxuP3xcXG58Lil8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS9cblxuXHRQcmlzbS5sYW5ndWFnZXMuanNvbjUgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqc29uJywge1xuXHRcdCdwcm9wZXJ0eSc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKHN0cmluZy5zb3VyY2UgKyAnKD89XFxcXHMqOiknKSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS8sXG5cdFx0XHRcdGFsaWFzOiAndW5xdW90ZWQnXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnbnVtYmVyJzogL1srLV0/XFxiKD86TmFOfEluZmluaXR5fDB4W2EtZkEtRlxcZF0rKVxcYnxbKy1dPyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltlRV1bKy1dP1xcZCtcXGIpPy9cblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=