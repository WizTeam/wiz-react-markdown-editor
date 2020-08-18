(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/prismjs/components/prism-firestore-security-rules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-firestore-security-rules.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages['firestore-security-rules'] = Prism.languages.extend('clike', {
	'comment': /\/\/.*/,
	'keyword': /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
	'operator': /&&|\|\||[<>!=]=?|[-+*/%=]|\b(?:in|is)\b/,
});

delete Prism.languages['firestore-security-rules']['class-name'];

Prism.languages.insertBefore('firestore-security-rules', 'keyword', {
	'path': {
		pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
		lookbehind: true,
		greedy: true,
		inside: {
			'variable': {
				pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
				inside: {
					'operator': /=/,
					'keyword': /\*\*/,
					'punctuation': /[.$(){}]/
				}
			},
			'punctuation': /[/]/
		}
	},
	'method': {
		// to make the pattern shorter, the actual method names are omitted
		pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
		lookbehind: true,
		alias: 'builtin',
		inside: {
			'punctuation': /,/
		}
	},
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWZpcmVzdG9yZS1zZWN1cml0eS1ydWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCw0QkFBNEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6IjEyMy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlc1snZmlyZXN0b3JlLXNlY3VyaXR5LXJ1bGVzJ10gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NvbW1lbnQnOiAvXFwvXFwvLiovLFxuXHQna2V5d29yZCc6IC9cXGIoPzphbGxvd3xmdW5jdGlvbnxpZnxtYXRjaHxudWxsfHJldHVybnxydWxlc192ZXJzaW9ufHNlcnZpY2UpXFxiLyxcblx0J29wZXJhdG9yJzogLyYmfFxcfFxcfHxbPD4hPV09P3xbLSsqLyU9XXxcXGIoPzppbnxpcylcXGIvLFxufSk7XG5cbmRlbGV0ZSBQcmlzbS5sYW5ndWFnZXNbJ2ZpcmVzdG9yZS1zZWN1cml0eS1ydWxlcyddWydjbGFzcy1uYW1lJ107XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2ZpcmVzdG9yZS1zZWN1cml0eS1ydWxlcycsICdrZXl3b3JkJywge1xuXHQncGF0aCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W1xccygpLF0pKD86XFwvKD86W1xcd1xceEEwLVxcdUZGRkZdK3xcXHtbXFx3XFx4QTAtXFx1RkZGRl0rKD86PVxcKlxcKik/XFx9fFxcJFxcKFtcXHdcXHhBMC1cXHVGRkZGLl0rXFwpKSkrLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd2YXJpYWJsZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1xce1tcXHdcXHhBMC1cXHVGRkZGXSsoPzo9XFwqXFwqKT9cXH18XFwkXFwoW1xcd1xceEEwLVxcdUZGRkYuXStcXCkvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvPS8sXG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXFwqXFwqLyxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWy4kKCl7fV0vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy9dL1xuXHRcdH1cblx0fSxcblx0J21ldGhvZCc6IHtcblx0XHQvLyB0byBtYWtlIHRoZSBwYXR0ZXJuIHNob3J0ZXIsIHRoZSBhY3R1YWwgbWV0aG9kIG5hbWVzIGFyZSBvbWl0dGVkXG5cdFx0cGF0dGVybjogLyhcXGJhbGxvd1xccyspW2Etel0rKD86XFxzKixcXHMqW2Etel0rKSooPz1cXHMqWzo7XSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdidWlsdGluJyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC8sL1xuXHRcdH1cblx0fSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==