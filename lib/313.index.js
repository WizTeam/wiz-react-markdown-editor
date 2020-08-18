(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[313],{

/***/ "./node_modules/prismjs/components/prism-processing.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-processing.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.processing = Prism.languages.extend('clike', {
	'keyword': /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
	'operator': /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
});
Prism.languages.insertBefore('processing', 'number', {
	// Special case: XML is a type
	'constant': /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
	'type': {
		pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
		alias: 'variable'
	}
});

// Spaces are allowed between function name and parenthesis
Prism.languages.processing['function'].pattern = /\w+(?=\s*\()/;

// Class-names is not styled by default
Prism.languages.processing['class-name'].alias = 'variable';

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXByb2Nlc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EsNEQiLCJmaWxlIjoiMzEzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnByb2Nlc3NpbmcgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2tleXdvcmQnOiAvXFxiKD86YnJlYWt8Y2F0Y2h8Y2FzZXxjbGFzc3xjb250aW51ZXxkZWZhdWx0fGVsc2V8ZXh0ZW5kc3xmaW5hbHxmb3J8aWZ8aW1wbGVtZW50c3xpbXBvcnR8bmV3fG51bGx8cHJpdmF0ZXxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0cnl8dm9pZHx3aGlsZSlcXGIvLFxuXHQnb3BlcmF0b3InOiAvPFs8PV0/fD5bPj1dP3wmJj98XFx8XFx8P3xbJT9dfFshPStcXC0qXFwvXT0/L1xufSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwcm9jZXNzaW5nJywgJ251bWJlcicsIHtcblx0Ly8gU3BlY2lhbCBjYXNlOiBYTUwgaXMgYSB0eXBlXG5cdCdjb25zdGFudCc6IC9cXGIoPyFYTUxcXGIpW0EtWl1bQS1aXFxkX10rXFxiLyxcblx0J3R5cGUnOiB7XG5cdFx0cGF0dGVybjogL1xcYig/OmJvb2xlYW58Ynl0ZXxjaGFyfGNvbG9yfGRvdWJsZXxmbG9hdHxpbnR8WE1MfFtBLVpdXFx3KilcXGIvLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH1cbn0pO1xuXG4vLyBTcGFjZXMgYXJlIGFsbG93ZWQgYmV0d2VlbiBmdW5jdGlvbiBuYW1lIGFuZCBwYXJlbnRoZXNpc1xuUHJpc20ubGFuZ3VhZ2VzLnByb2Nlc3NpbmdbJ2Z1bmN0aW9uJ10ucGF0dGVybiA9IC9cXHcrKD89XFxzKlxcKCkvO1xuXG4vLyBDbGFzcy1uYW1lcyBpcyBub3Qgc3R5bGVkIGJ5IGRlZmF1bHRcblByaXNtLmxhbmd1YWdlcy5wcm9jZXNzaW5nWydjbGFzcy1uYW1lJ10uYWxpYXMgPSAndmFyaWFibGUnOyJdLCJzb3VyY2VSb290IjoiIn0=