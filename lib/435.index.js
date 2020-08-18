(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[435],{

/***/ "./node_modules/prismjs/components/prism-warpscript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-warpscript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.warpscript = {
	'comment': /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
	'string': {
		pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
		greedy: true
	},
	'variable': /\$\S+/,
	'macro': {
		pattern: /@\S+/,
		alias: 'property'
	},
	// WarpScript doesn't have any keywords, these are all functions under the control category
	// https://www.warp10.io/tags/control
	'keyword': /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
	'number': /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
	'boolean': /\b(?:false|true|F|T)\b/,
	'punctuation': /<%|%>|[{}[\]()]/,
	// Some operators from the "operators" category
	// https://www.warp10.io/tags/operators
	'operator': /==|&&?|\|\|?|\*\*?|>>>?|<<|==|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXdhcnBzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQzNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy53YXJwc2NyaXB0ID0ge1xuXHQnY29tbWVudCc6IC8jLip8XFwvXFwvLip8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86W15cIlxcXFxcXHJcXG5dfFxcXFwuKSpcInwnKD86W14nXFxcXFxcclxcbl18XFxcXC4pKid8PCcoPzpbXlxcXFwnXXwnKD8hPil8XFxcXC4pKic+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3ZhcmlhYmxlJzogL1xcJFxcUysvLFxuXHQnbWFjcm8nOiB7XG5cdFx0cGF0dGVybjogL0BcXFMrLyxcblx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHR9LFxuXHQvLyBXYXJwU2NyaXB0IGRvZXNuJ3QgaGF2ZSBhbnkga2V5d29yZHMsIHRoZXNlIGFyZSBhbGwgZnVuY3Rpb25zIHVuZGVyIHRoZSBjb250cm9sIGNhdGVnb3J5XG5cdC8vIGh0dHBzOi8vd3d3LndhcnAxMC5pby90YWdzL2NvbnRyb2xcblx0J2tleXdvcmQnOiAvXFxiKD86QlJFQUt8Q0hFQ0tNQUNST3xDT05USU5VRXxDVURGfERFRklORUR8REVGSU5FRE1BQ1JPfEVWQUx8RkFJTHxGT1J8Rk9SRUFDSHxGT1JTVEVQfElGVHxJRlRFfE1TR0ZBSUx8TlJFVFVSTnxSRVRIUk9XfFJFVFVSTnxTV0lUQ0h8VFJZfFVERnxVTlRJTHxXSElMRSlcXGIvLFxuXHQnbnVtYmVyJzogL1srLV0/XFxiKD86TmFOfEluZmluaXR5fFxcZCsoPzpcXC5cXGQqKT8oPzpbRWVdWystXT9cXGQrKT98MHhbXFxkYS1mQS1GXSt8MGJbMDFdKylcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzpmYWxzZXx0cnVlfEZ8VClcXGIvLFxuXHQncHVuY3R1YXRpb24nOiAvPCV8JT58W3t9W1xcXSgpXS8sXG5cdC8vIFNvbWUgb3BlcmF0b3JzIGZyb20gdGhlIFwib3BlcmF0b3JzXCIgY2F0ZWdvcnlcblx0Ly8gaHR0cHM6Ly93d3cud2FycDEwLmlvL3RhZ3Mvb3BlcmF0b3JzXG5cdCdvcGVyYXRvcic6IC89PXwmJj98XFx8XFx8P3xcXCpcXCo/fD4+Pj98PDx8PT18Wzw+IX5dPT98Wy0vJV5dfFxcKyE/fFxcYig/OkFORHxOT1R8T1IpXFxiL1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=