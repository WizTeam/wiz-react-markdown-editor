(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[281],{

/***/ "./node_modules/prismjs/components/prism-ocaml.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ocaml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.ocaml = {
	'comment': /\(\*[\s\S]*?\*\)/,
	'string': [
		{
			pattern: /"(?:\\.|[^\\\r\n"])*"/,
			greedy: true
		},
		{
			pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
			greedy: true
		}
	],
	'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
	'directive': {
		pattern: /\B#\w+/,
		alias: 'important'
	},
	'label': {
		pattern: /\B~\w+/,
		alias: 'function'
	},
	'type_variable': {
		pattern: /\B'\w+/,
		alias: 'function'
	},
	'variant': {
		pattern: /`\w+/,
		alias: 'variable'
	},
	'module': {
		pattern: /\b[A-Z]\w+/,
		alias: 'variable'
	},
	// For the list of keywords and operators,
	// see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
	'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
	'boolean': /\b(?:false|true)\b/,
	// Custom operators are allowed
	'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
	'punctuation': /[(){}\[\]|.,:;]|\b_\b/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW9jYW1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CIiwiZmlsZSI6IjI4MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5vY2FtbCA9IHtcblx0J2NvbW1lbnQnOiAvXFwoXFwqW1xcc1xcU10qP1xcKlxcKS8sXG5cdCdzdHJpbmcnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXFxyXFxuXCJdKSpcIi8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oWydgXSkoPzpcXFxcKD86XFxkK3x4W1xcZGEtZl0rfC4pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKVxcMS9pLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnbnVtYmVyJzogL1xcYig/OjB4W1xcZGEtZl1bXFxkYS1mX10rfCg/OjBbYm9dKT9cXGRbXFxkX10qXFwuP1tcXGRfXSooPzplWystXT9bXFxkX10rKT8pL2ksXG5cdCdkaXJlY3RpdmUnOiB7XG5cdFx0cGF0dGVybjogL1xcQiNcXHcrLyxcblx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0fSxcblx0J2xhYmVsJzoge1xuXHRcdHBhdHRlcm46IC9cXEJ+XFx3Ky8sXG5cdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0fSxcblx0J3R5cGVfdmFyaWFibGUnOiB7XG5cdFx0cGF0dGVybjogL1xcQidcXHcrLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQndmFyaWFudCc6IHtcblx0XHRwYXR0ZXJuOiAvYFxcdysvLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH0sXG5cdCdtb2R1bGUnOiB7XG5cdFx0cGF0dGVybjogL1xcYltBLVpdXFx3Ky8sXG5cdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0fSxcblx0Ly8gRm9yIHRoZSBsaXN0IG9mIGtleXdvcmRzIGFuZCBvcGVyYXRvcnMsXG5cdC8vIHNlZTogaHR0cDovL2NhbWwuaW5yaWEuZnIvcHViL2RvY3MvbWFudWFsLW9jYW1sL2xleC5odG1sI3NlYzg0XG5cdCdrZXl3b3JkJzogL1xcYig/OmFzfGFzc2VydHxiZWdpbnxjbGFzc3xjb25zdHJhaW50fGRvfGRvbmV8ZG93bnRvfGVsc2V8ZW5kfGV4Y2VwdGlvbnxleHRlcm5hbHxmb3J8ZnVufGZ1bmN0aW9ufGZ1bmN0b3J8aWZ8aW58aW5jbHVkZXxpbmhlcml0fGluaXRpYWxpemVyfGxhenl8bGV0fG1hdGNofG1ldGhvZHxtb2R1bGV8bXV0YWJsZXxuZXd8bm9ucmVjfG9iamVjdHxvZnxvcGVufHByaXZhdGV8cmVjfHNpZ3xzdHJ1Y3R8dGhlbnx0b3x0cnl8dHlwZXx2YWx8dmFsdWV8dmlydHVhbHx3aGVufHdoZXJlfHdoaWxlfHdpdGgpXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuXHQvLyBDdXN0b20gb3BlcmF0b3JzIGFyZSBhbGxvd2VkXG5cdCdvcGVyYXRvcic6IC86PXxbPTw+QF58JitcXC0qXFwvJCUhP35dWyEkJSYqK1xcLS5cXC86PD0+P0BefH5dKnxcXGIoPzphbmR8YXNyfGxhbmR8bG9yfGxzbHxsc3J8bHhvcnxtb2R8b3IpXFxiLyxcblx0J3B1bmN0dWF0aW9uJzogL1soKXt9XFxbXFxdfC4sOjtdfFxcYl9cXGIvXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==