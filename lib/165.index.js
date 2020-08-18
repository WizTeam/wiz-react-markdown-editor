(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165],{

/***/ "./node_modules/prismjs/components/prism-hpkp.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hpkp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 */

Prism.languages.hpkp = {
	'directive': {
		pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
		alias: 'keyword'
	},
	'safe': {
		pattern: /\b\d{7,}\b/,
		alias: 'selector'
	},
	'unsafe': {
		pattern: /\b\d{1,6}\b/,
		alias: 'function'
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhwa3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEI7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBO0FBQ0EiLCJmaWxlIjoiMTY1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPcmlnaW5hbCBieSBTY290dCBIZWxtZS5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vc2NvdHRoZWxtZS5jby51ay9ocGtwLWNoZWF0LXNoZWV0L1xuICovXG5cblByaXNtLmxhbmd1YWdlcy5ocGtwID0ge1xuXHQnZGlyZWN0aXZlJzoge1xuXHRcdHBhdHRlcm46IC9cXGIoPzooPzppbmNsdWRlU3ViRG9tYWluc3xwcmVsb2FkfHN0cmljdCkoPzogfDspfHBpbi1zaGEyNTY9XCJbYS16QS1aXFxkKz0vXStcInwoPzptYXgtYWdlfHJlcG9ydC11cmkpPXxyZXBvcnQtdG8gKS8sXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHQnc2FmZSc6IHtcblx0XHRwYXR0ZXJuOiAvXFxiXFxkezcsfVxcYi8sXG5cdFx0YWxpYXM6ICdzZWxlY3Rvcidcblx0fSxcblx0J3Vuc2FmZSc6IHtcblx0XHRwYXR0ZXJuOiAvXFxiXFxkezEsNn1cXGIvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9