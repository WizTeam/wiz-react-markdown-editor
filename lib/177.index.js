(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[177],{

/***/ "./node_modules/prismjs/components/prism-ignore.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ignore.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	Prism.languages.ignore = {
		// https://git-scm.com/docs/gitignore
		'comment': /^#.*/m,
		'entry': {
			pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
			alias: 'string',
			inside: {
				'operator': /^!|\*\*?|\?/,
				'regex': {
					pattern: /(^|[^\\])\[[^\[\]]*\]/,
					lookbehind: true
				},
				'punctuation': /\//
			}
		}
	};

	Prism.languages.gitignore = Prism.languages.ignore
	Prism.languages.hgignore = Prism.languages.ignore
	Prism.languages.npmignore = Prism.languages.ignore

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWlnbm9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiMTc3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXHRQcmlzbS5sYW5ndWFnZXMuaWdub3JlID0ge1xuXHRcdC8vIGh0dHBzOi8vZ2l0LXNjbS5jb20vZG9jcy9naXRpZ25vcmVcblx0XHQnY29tbWVudCc6IC9eIy4qL20sXG5cdFx0J2VudHJ5Jzoge1xuXHRcdFx0cGF0dGVybjogL1xcUyg/Oi4qKD86KD86XFxcXCApfFxcUykpPy8sXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J29wZXJhdG9yJzogL14hfFxcKlxcKj98XFw/Lyxcblx0XHRcdFx0J3JlZ2V4Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcW1teXFxbXFxdXSpcXF0vLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLy9cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmdpdGlnbm9yZSA9IFByaXNtLmxhbmd1YWdlcy5pZ25vcmVcblx0UHJpc20ubGFuZ3VhZ2VzLmhnaWdub3JlID0gUHJpc20ubGFuZ3VhZ2VzLmlnbm9yZVxuXHRQcmlzbS5sYW5ndWFnZXMubnBtaWdub3JlID0gUHJpc20ubGFuZ3VhZ2VzLmlnbm9yZVxuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9