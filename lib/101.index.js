(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/prismjs/components/prism-ebnf.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ebnf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.ebnf = {
	'comment': /\(\*[\s\S]*?\*\)/,
	'string': {
		pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
		greedy: true
	},
	'special': {
		pattern: /\?[^?\r\n]*\?/,
		greedy: true,
		alias: 'class-name'
	},

	'definition': {
		pattern: /^(\s*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
		lookbehind: true,
		alias: ['rule', 'keyword']
	},
	'rule': /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,

	'punctuation': /\([:/]|[:/]\)|[.,;()[\]{}]/,
	'operator': /[-=|*/!]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsbUNBQW1DLE9BQU87QUFDMUM7QUFDQSIsImZpbGUiOiIxMDEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuZWJuZiA9IHtcblx0J2NvbW1lbnQnOiAvXFwoXFwqW1xcc1xcU10qP1xcKlxcKS8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiW15cIlxcclxcbl0qXCJ8J1teJ1xcclxcbl0qJy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdzcGVjaWFsJzoge1xuXHRcdHBhdHRlcm46IC9cXD9bXj9cXHJcXG5dKlxcPy8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnY2xhc3MtbmFtZSdcblx0fSxcblxuXHQnZGVmaW5pdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvXihcXHMqKVthLXpdXFx3Kig/OlsgXFx0XStbYS16XVxcdyopKig/PVxccyo9KS9pbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiBbJ3J1bGUnLCAna2V5d29yZCddXG5cdH0sXG5cdCdydWxlJzogL1xcYlthLXpdXFx3Kig/OlsgXFx0XStbYS16XVxcdyopKlxcYi9pLFxuXG5cdCdwdW5jdHVhdGlvbic6IC9cXChbOi9dfFs6L11cXCl8Wy4sOygpW1xcXXt9XS8sXG5cdCdvcGVyYXRvcic6IC9bLT18Ki8hXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9