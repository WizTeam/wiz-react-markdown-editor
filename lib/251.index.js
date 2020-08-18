(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[251],{

/***/ "./node_modules/prismjs/components/prism-matlab.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-matlab.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.matlab = {
	'comment': [
		/%\{[\s\S]*?\}%/,
		/%.+/
	],
	'string': {
		pattern: /\B'(?:''|[^'\r\n])*'/,
		greedy: true
	},
	// FIXME We could handle imaginary numbers as a whole
	'number': /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
	'keyword': /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
	'function': /(?!\d)\w+(?=\s*\()/,
	'operator': /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
	'punctuation': /\.{3}|[.,;\[\](){}!]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hdGxhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFLEtBQUssUUFBUTtBQUNuQyxFIiwiZmlsZSI6IjI1MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5tYXRsYWIgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdC8lXFx7W1xcc1xcU10qP1xcfSUvLFxuXHRcdC8lLisvXG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1xcQicoPzonJ3xbXidcXHJcXG5dKSonLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gRklYTUUgV2UgY291bGQgaGFuZGxlIGltYWdpbmFyeSBudW1iZXJzIGFzIGEgd2hvbGVcblx0J251bWJlcic6IC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbZUVdWystXT9cXGQrKT8oPzpbaWpdKT98XFxiW2lqXVxcYi8sXG5cdCdrZXl3b3JkJzogL1xcYig/OmJyZWFrfGNhc2V8Y2F0Y2h8Y29udGludWV8ZWxzZXxlbHNlaWZ8ZW5kfGZvcnxmdW5jdGlvbnxpZnxpbmZ8TmFOfG90aGVyd2lzZXxwYXJmb3J8cGF1c2V8cGl8cmV0dXJufHN3aXRjaHx0cnl8d2hpbGUpXFxiLyxcblx0J2Z1bmN0aW9uJzogLyg/IVxcZClcXHcrKD89XFxzKlxcKCkvLFxuXHQnb3BlcmF0b3InOiAvXFwuP1sqXlxcL1xcXFwnXXxbK1xcLTpAXXxbPD49fl09P3wmJj98XFx8XFx8Py8sXG5cdCdwdW5jdHVhdGlvbic6IC9cXC57M318Wy4sO1xcW1xcXSgpe30hXS9cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==