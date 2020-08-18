(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[263],{

/***/ "./node_modules/prismjs/components/prism-n4js.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-n4js.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.n4js = Prism.languages.extend('javascript', {
	// Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
	'keyword': /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});

Prism.languages.insertBefore('n4js', 'constant', {
	// Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
	'annotation': {
		pattern: /@+\w+/,
		alias: 'operator'
	}
});

Prism.languages.n4jsd=Prism.languages.n4js;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW40anMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6IjI2My5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5uNGpzID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHtcblx0Ly8gS2V5d29yZHMgZnJvbSBONEpTIGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vbnVtYmVyZm91ci5naXRodWIuaW8vbjRqcy9zcGVjL040SlNTcGVjLmh0bWxcblx0J2tleXdvcmQnOiAvXFxiKD86YW55fEFycmF5fGJvb2xlYW58YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmYWxzZXxmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bW9kdWxlfG5ld3xudWxsfG51bWJlcnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdHJpbmd8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ1ZXx0cnl8dHlwZW9mfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ240anMnLCAnY29uc3RhbnQnLCB7XG5cdC8vIEFubm90YXRpb25zIGluIE40SlMgc3BlYzogaHR0cHM6Ly9udW1iZXJmb3VyLmdpdGh1Yi5pby9uNGpzL3NwZWMvTjRKU1NwZWMuaHRtbCNfYW5ub3RhdGlvbnNcblx0J2Fubm90YXRpb24nOiB7XG5cdFx0cGF0dGVybjogL0ArXFx3Ky8sXG5cdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5uNGpzZD1QcmlzbS5sYW5ndWFnZXMubjRqcztcbiJdLCJzb3VyY2VSb290IjoiIn0=