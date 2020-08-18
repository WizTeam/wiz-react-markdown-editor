(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ "./node_modules/prismjs/components/prism-gedcom.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-gedcom.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.gedcom = {
	'line-value': {
		// Preceded by level, optional pointer, and tag
		pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
		lookbehind: true,
		inside: {
			'pointer': {
				pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
				alias: 'variable'
			}
		}
	},
	'tag': {
		// Preceded by level and optional pointer
		pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
		lookbehind: true,
		alias: 'string'
	},
	'level': {
		pattern: /(^\s*)\d+/m,
		lookbehind: true,
		alias: 'number'
	},
	'pointer': {
		pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
		alias: 'variable'
	}
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdlZGNvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWSxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWSxFQUFFO0FBQzlEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxtQ0FBbUMsWUFBWSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IjEzNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5nZWRjb20gPSB7XG5cdCdsaW5lLXZhbHVlJzoge1xuXHRcdC8vIFByZWNlZGVkIGJ5IGxldmVsLCBvcHRpb25hbCBwb2ludGVyLCBhbmQgdGFnXG5cdFx0cGF0dGVybjogLyheXFxzKlxcZCsgKyg/OkBcXHdbXFx3IVwiJCUmJygpKissXFwtLi86Ozw9Pj9bXFxcXFxcXV5ge3x9flxceDgwLVxceGZlICNdKkAgKyk/XFx3KyArKS4rL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwb2ludGVyJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXkBcXHdbXFx3IVwiJCUmJygpKissXFwtLi86Ozw9Pj9bXFxcXFxcXV5ge3x9flxceDgwLVxceGZlICNdKkAkLyxcblx0XHRcdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdCd0YWcnOiB7XG5cdFx0Ly8gUHJlY2VkZWQgYnkgbGV2ZWwgYW5kIG9wdGlvbmFsIHBvaW50ZXJcblx0XHRwYXR0ZXJuOiAvKF5cXHMqXFxkKyArKD86QFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQCArKT8pXFx3Ky9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdzdHJpbmcnXG5cdH0sXG5cdCdsZXZlbCc6IHtcblx0XHRwYXR0ZXJuOiAvKF5cXHMqKVxcZCsvbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAnbnVtYmVyJ1xuXHR9LFxuXHQncG9pbnRlcic6IHtcblx0XHRwYXR0ZXJuOiAvQFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQC8sXG5cdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0fVxufTsiXSwic291cmNlUm9vdCI6IiJ9