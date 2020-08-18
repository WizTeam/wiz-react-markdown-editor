(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[451],{

/***/ "./node_modules/prismjs/components/prism-yang.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-yang.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.yang = {
	// https://tools.ietf.org/html/rfc6020#page-34
	// http://www.yang-central.org/twiki/bin/view/Main/YangExamples
	'comment': /\/\*[\s\S]*?\*\/|\/\/.*/,
	'string': {
		pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
		greedy: true
	},
	'keyword': {
		pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
		lookbehind: true
	},
	'namespace': {
		pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
		lookbehind: true
	},
	'boolean': /\b(?:false|true)\b/,
	'operator': /\+/,
	'punctuation': /[{};:]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXlhbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIiLCJmaWxlIjoiNDUxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnlhbmcgPSB7XG5cdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2MDIwI3BhZ2UtMzRcblx0Ly8gaHR0cDovL3d3dy55YW5nLWNlbnRyYWwub3JnL3R3aWtpL2Jpbi92aWV3L01haW4vWWFuZ0V4YW1wbGVzXG5cdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiovLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9cIig/OlteXFxcXFwiXXxcXFxcLikqXCJ8J1teJ10qJy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdrZXl3b3JkJzoge1xuXHRcdHBhdHRlcm46IC8oXnxbe307XFxyXFxuXVsgXFx0XSopW2Etel9dW1xcdy4tXSovaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCduYW1lc3BhY2UnOiB7XG5cdFx0cGF0dGVybjogLyhcXHMpW2Etel9dW1xcdy4tXSooPz06KS9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuXHQnb3BlcmF0b3InOiAvXFwrLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fTs6XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9