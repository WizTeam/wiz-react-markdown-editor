(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/prismjs/components/prism-bbcode.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bbcode.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bbcode = {
	'tag': {
		pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
		inside: {
			'tag': {
				pattern: /^\[\/?[^\s=\]]+/,
				inside: {
					'punctuation': /^\[\/?/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\]/,
			'attr-name': /[^\s=\]]+/
		}
	}
};

Prism.languages.shortcode = Prism.languages.bbcode;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJiY29kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EIiwiZmlsZSI6IjQzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmJiY29kZSA9IHtcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvXFxbXFwvP1teXFxzPVxcXV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiXFxdPV0rKSk/KD86XFxzK1teXFxzPVxcXV0rXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiXFxdPV0rKSkqXFxzKlxcXS8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXlxcW1xcLz9bXlxccz1cXF1dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxbXFwvPy9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCJcXF09XSspL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdFx0XHRcdC9ePS8sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9eKFxccyopW1wiJ118W1wiJ10kLyxcblx0XHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXF0vLFxuXHRcdFx0J2F0dHItbmFtZSc6IC9bXlxccz1cXF1dKy9cblx0XHR9XG5cdH1cbn07XG5cblByaXNtLmxhbmd1YWdlcy5zaG9ydGNvZGUgPSBQcmlzbS5sYW5ndWFnZXMuYmJjb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=