(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/prismjs/components/prism-csp.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-csp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/csp-cheat-sheet/
 *
 * Supports the following:
 *  - CSP Level 1
 *  - CSP Level 2
 *  - CSP Level 3
 */

Prism.languages.csp = {
	'directive':  {
		pattern: /\b(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src|disown-opener|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox|upgrade-insecure-requests)\b/i,
		alias: 'keyword'
	},
	'safe': {
		pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
		alias: 'selector'
	},
	'unsafe': {
		pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
		alias: 'function'
	}
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Ijc3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPcmlnaW5hbCBieSBTY290dCBIZWxtZS5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vc2NvdHRoZWxtZS5jby51ay9jc3AtY2hlYXQtc2hlZXQvXG4gKlxuICogU3VwcG9ydHMgdGhlIGZvbGxvd2luZzpcbiAqICAtIENTUCBMZXZlbCAxXG4gKiAgLSBDU1AgTGV2ZWwgMlxuICogIC0gQ1NQIExldmVsIDNcbiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuY3NwID0ge1xuXHQnZGlyZWN0aXZlJzogIHtcblx0XHRwYXR0ZXJuOiAvXFxiKD86YmFzZS11cml8YmxvY2stYWxsLW1peGVkLWNvbnRlbnR8KD86Y2hpbGR8Y29ubmVjdHxkZWZhdWx0fGZvbnR8ZnJhbWV8aW1nfG1hbmlmZXN0fG1lZGlhfG9iamVjdHxzY3JpcHR8c3R5bGV8d29ya2VyKS1zcmN8ZGlzb3duLW9wZW5lcnxmb3JtLWFjdGlvbnxmcmFtZS1hbmNlc3RvcnN8cGx1Z2luLXR5cGVzfHJlZmVycmVyfHJlZmxlY3RlZC14c3N8cmVwb3J0LXRvfHJlcG9ydC11cml8cmVxdWlyZS1zcmktZm9yfHNhbmRib3h8dXBncmFkZS1pbnNlY3VyZS1yZXF1ZXN0cylcXGIvaSxcblx0XHRhbGlhczogJ2tleXdvcmQnXG5cdH0sXG5cdCdzYWZlJzoge1xuXHRcdHBhdHRlcm46IC8nKD86c2VsZnxub25lfHN0cmljdC1keW5hbWljfCg/Om5vbmNlLXxzaGEoPzoyNTZ8Mzg0fDUxMiktKVthLXpBLVpcXGQrPS9dKyknLyxcblx0XHRhbGlhczogJ3NlbGVjdG9yJ1xuXHR9LFxuXHQndW5zYWZlJzoge1xuXHRcdHBhdHRlcm46IC8oPzondW5zYWZlLWlubGluZSd8J3Vuc2FmZS1ldmFsJ3wndW5zYWZlLWhhc2hlZC1hdHRyaWJ1dGVzJ3xcXCopLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=