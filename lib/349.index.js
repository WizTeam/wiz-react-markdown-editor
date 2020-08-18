(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[349],{

/***/ "./node_modules/prismjs/components/prism-rip.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-rip.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.rip = {
	'comment': /#.*/,

	'keyword': /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,

	'builtin': /@|\bSystem\b/,

	'boolean': /\b(?:true|false)\b/,

	'date': /\b\d{4}-\d{2}-\d{2}\b/,
	'time': /\b\d{2}:\d{2}:\d{2}\b/,
	'datetime': /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,

	'character': /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,

	'regex': {
		pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},

	'symbol': /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
	'string': {
		pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'number': /[+-]?\b(?:\d+\.\d+|\d+)\b/,

	'punctuation': /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,

	'reference': /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzdCLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzdCLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7O0FBRW5ELDZCQUE2QixlQUFlOztBQUU1QztBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0EsRUFBRTs7QUFFRiwwQkFBMEIsZUFBZSxZQUFZLGVBQWU7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLHVCQUF1QixJQUFJLFFBQVEsZUFBZTs7QUFFbEQsNEJBQTRCLGVBQWUsWUFBWSxlQUFlO0FBQ3RFIiwiZmlsZSI6IjM0OS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5yaXAgPSB7XG5cdCdjb21tZW50JzogLyMuKi8sXG5cblx0J2tleXdvcmQnOiAvKD86PT58LT4pfFxcYig/OmNsYXNzfGlmfGVsc2V8c3dpdGNofGNhc2V8cmV0dXJufGV4aXR8dHJ5fGNhdGNofGZpbmFsbHl8cmFpc2UpXFxiLyxcblxuXHQnYnVpbHRpbic6IC9AfFxcYlN5c3RlbVxcYi8sXG5cblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXG5cdCdkYXRlJzogL1xcYlxcZHs0fS1cXGR7Mn0tXFxkezJ9XFxiLyxcblx0J3RpbWUnOiAvXFxiXFxkezJ9OlxcZHsyfTpcXGR7Mn1cXGIvLFxuXHQnZGF0ZXRpbWUnOiAvXFxiXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn1cXGIvLFxuXG5cdCdjaGFyYWN0ZXInOiAvXFxCYFteXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV1cXGIvLFxuXG5cdCdyZWdleCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W14vXSlcXC8oPyFcXC8pKD86XFxbW15cXG5cXHJcXF1dKlxcXXxcXFxcLnxbXi9cXFxcXFxyXFxuXFxbXSkrXFwvKD89XFxzKig/OiR8W1xcclxcbiwuO30pXSkpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXG5cdCdzeW1ib2wnOiAvOlteXFxkXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV1bXlxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dKi8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzogL1srLV0/XFxiKD86XFxkK1xcLlxcZCt8XFxkKylcXGIvLFxuXG5cdCdwdW5jdHVhdGlvbic6IC8oPzpcXC57MiwzfSl8W2AsLjo7PVxcL1xcXFwoKTw+XFxbXFxde31dLyxcblxuXHQncmVmZXJlbmNlJzogL1teXFxkXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV1bXlxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dKi9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9