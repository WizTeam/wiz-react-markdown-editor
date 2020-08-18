(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[315],{

/***/ "./node_modules/prismjs/components/prism-prolog.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-prolog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.prolog = {
	// Syntax depends on the implementation
	'comment': [
		/%.+/,
		/\/\*[\s\S]*?\*\//
	],
	// Depending on the implementation, strings may allow escaped newlines and quote-escape
	'string': {
		pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'builtin': /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
	'variable': /\b[A-Z_]\w*/,
	// FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?
	'function': /\b[a-z]\w*(?:(?=\()|\/\d+)/,
	'number': /\b\d+\.?\d*/,
	// Custom operators are allowed
	'operator': /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
	'punctuation': /[(){}\[\],]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXByb2xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLEUiLCJmaWxlIjoiMzE1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnByb2xvZyA9IHtcblx0Ly8gU3ludGF4IGRlcGVuZHMgb24gdGhlIGltcGxlbWVudGF0aW9uXG5cdCdjb21tZW50JzogW1xuXHRcdC8lLisvLFxuXHRcdC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvL1xuXHRdLFxuXHQvLyBEZXBlbmRpbmcgb24gdGhlIGltcGxlbWVudGF0aW9uLCBzdHJpbmdzIG1heSBhbGxvdyBlc2NhcGVkIG5ld2xpbmVzIGFuZCBxdW90ZS1lc2NhcGVcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcMVxcMXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2J1aWx0aW4nOiAvXFxiKD86Znh8Znl8eGZbeHldP3x5Zng/KVxcYi8sXG5cdCd2YXJpYWJsZSc6IC9cXGJbQS1aX11cXHcqLyxcblx0Ly8gRklYTUU6IFNob3VsZCB3ZSBsaXN0IGFsbCBudWxsLWFyeSBwcmVkaWNhdGVzIChub3QgZm9sbG93ZWQgYnkgYSBwYXJlbnRoZXNpcykgbGlrZSBoYWx0LCB0cmFjZSwgZXRjLj9cblx0J2Z1bmN0aW9uJzogL1xcYlthLXpdXFx3Kig/Oig/PVxcKCl8XFwvXFxkKykvLFxuXHQnbnVtYmVyJzogL1xcYlxcZCtcXC4/XFxkKi8sXG5cdC8vIEN1c3RvbSBvcGVyYXRvcnMgYXJlIGFsbG93ZWRcblx0J29wZXJhdG9yJzogL1s6XFxcXD0+PFxcLT8qQFxcLzsrXnwhJC5dK3xcXGIoPzppc3xtb2R8bm90fHhvcilcXGIvLFxuXHQncHVuY3R1YXRpb24nOiAvWygpe31cXFtcXF0sXS9cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==