(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[401],{

/***/ "./node_modules/prismjs/components/prism-tap.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.tap = {
	fail: /not ok[^#{\n\r]*/,
	pass: /ok[^#{\n\r]*/,
	pragma: /pragma [+-][a-z]+/,
	bailout: /bail out!.*/i,
	version: /TAP version \d+/i,
	plan: /\d+\.\.\d+(?: +#.*)?/,
	subtest: {
		pattern: /# Subtest(?:: .*)?/,
		greedy: true
	},
	punctuation: /[{}]/,
	directive: /#.*/,
	yamlish: {
		pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
		lookbehind: true,
		inside: Prism.languages.yaml,
		alias: 'language-yaml'
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDAxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnRhcCA9IHtcblx0ZmFpbDogL25vdCBva1teI3tcXG5cXHJdKi8sXG5cdHBhc3M6IC9va1teI3tcXG5cXHJdKi8sXG5cdHByYWdtYTogL3ByYWdtYSBbKy1dW2Etel0rLyxcblx0YmFpbG91dDogL2JhaWwgb3V0IS4qL2ksXG5cdHZlcnNpb246IC9UQVAgdmVyc2lvbiBcXGQrL2ksXG5cdHBsYW46IC9cXGQrXFwuXFwuXFxkKyg/OiArIy4qKT8vLFxuXHRzdWJ0ZXN0OiB7XG5cdFx0cGF0dGVybjogLyMgU3VidGVzdCg/OjogLiopPy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdHB1bmN0dWF0aW9uOiAvW3t9XS8sXG5cdGRpcmVjdGl2ZTogLyMuKi8sXG5cdHlhbWxpc2g6IHtcblx0XHRwYXR0ZXJuOiAvKF5bXlxcU1xcclxcbl0qKS0tLSg/Olxcclxcbj98XFxuKSg/Oi4qKD86XFxyXFxuP3xcXG4pKSo/W15cXFNcXHJcXG5dKlxcLlxcLlxcLiQvbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnlhbWwsXG5cdFx0YWxpYXM6ICdsYW5ndWFnZS15YW1sJ1xuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==