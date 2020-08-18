(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[351],{

/***/ "./node_modules/prismjs/components/prism-roboconf.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-roboconf.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.roboconf = {
	'comment': /#.*/,
	'keyword': {
		'pattern': /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
		lookbehind: true
	},
	'component': {
		pattern: /[\w-]+(?=[ \t]*\{)/,
		alias: 'variable'
	},
	'property': /[\w.-]+(?=[ \t]*:)/,
	'value': {
		pattern: /(=[ \t]*)[^,;]+/,
		lookbehind: true,
		alias: 'attr-value'
	},
	'optional': {
		pattern: /\(optional\)/,
		alias: 'builtin'
	},
	'wildcard': {
		pattern: /(\.)\*/,
		lookbehind: true,
		alias: 'operator'
	},
	'punctuation': /[{},.;:=]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJvYm9jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLEVBQUU7QUFDRjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLG9CQUFvQixHQUFHO0FBQ3ZCLEUiLCJmaWxlIjoiMzUxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnJvYm9jb25mID0ge1xuXHQnY29tbWVudCc6IC8jLiovLFxuXHQna2V5d29yZCc6IHtcblx0XHQncGF0dGVybic6IC8oXnxcXHMpKD86KD86ZmFjZXR8aW5zdGFuY2Ugb2YpKD89WyBcXHRdK1tcXHctXStbIFxcdF0qXFx7KXwoPzpleHRlcm5hbHxpbXBvcnQpXFxiKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnY29tcG9uZW50Jzoge1xuXHRcdHBhdHRlcm46IC9bXFx3LV0rKD89WyBcXHRdKlxceykvLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH0sXG5cdCdwcm9wZXJ0eSc6IC9bXFx3Li1dKyg/PVsgXFx0XSo6KS8sXG5cdCd2YWx1ZSc6IHtcblx0XHRwYXR0ZXJuOiAvKD1bIFxcdF0qKVteLDtdKy8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2F0dHItdmFsdWUnXG5cdH0sXG5cdCdvcHRpb25hbCc6IHtcblx0XHRwYXR0ZXJuOiAvXFwob3B0aW9uYWxcXCkvLFxuXHRcdGFsaWFzOiAnYnVpbHRpbidcblx0fSxcblx0J3dpbGRjYXJkJzoge1xuXHRcdHBhdHRlcm46IC8oXFwuKVxcKi8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHR9LFxuXHQncHVuY3R1YXRpb24nOiAvW3t9LC47Oj1dL1xufTsiXSwic291cmNlUm9vdCI6IiJ9