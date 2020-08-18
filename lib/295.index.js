(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[295],{

/***/ "./node_modules/prismjs/components/prism-pcaxis.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pcaxis.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.pcaxis = {
	'string': /"[^"]*"/,
	'keyword': {
		pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
		lookbehind: true,
		greedy: true,
		inside: {
			'keyword': /^[-A-Z\d]+/,
			'language': {
				pattern: /^(\s*)\[[-\w]+\]/,
				lookbehind: true,
				inside: {
					'punctuation': /^\[|\]$/,
					'property': /[-\w]+/
				}
			},
			'sub-key': {
				pattern: /^(\s*)[\s\S]+/,
				lookbehind: true,
				inside: {
					'parameter': {
						pattern: /"[^"]*"/,
						alias: 'property'
					},
					'punctuation': /^\(|\)$|,/
				}
			}
		}
	},
	'operator': /=/,
	'tlist': {
		pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
		greedy: true,
		inside: {
			'function': /^TLIST/,
			'property': {
				pattern: /^(\s*\(\s*)\w+/,
				lookbehind: true
			},
			'string': /"[^"]*"/,
			'punctuation': /[(),]/,
			'operator': /-/
		}
	},
	'punctuation': /[;,]/,
	'number': {
		pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
		lookbehind: true
	},
	'boolean': /YES|NO/,
};

Prism.languages.px = Prism.languages.pcaxis;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBjYXhpcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBIiwiZmlsZSI6IjI5NS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5wY2F4aXMgPSB7XG5cdCdzdHJpbmcnOiAvXCJbXlwiXSpcIi8sXG5cdCdrZXl3b3JkJzoge1xuXHRcdHBhdHRlcm46IC8oKD86Xnw7KVxccyopWy1BLVpcXGRdKyg/OlxccypcXFtbLVxcd10rXFxdKT8oPzpcXHMqXFwoXCJbXlwiXSpcIig/OixcXHMqXCJbXlwiXSpcIikqXFwpKT8oPz1cXHMqPSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2tleXdvcmQnOiAvXlstQS1aXFxkXSsvLFxuXHRcdFx0J2xhbmd1YWdlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVxcW1stXFx3XStcXF0vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcW3xcXF0kLyxcblx0XHRcdFx0XHQncHJvcGVydHknOiAvWy1cXHddKy9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdWIta2V5Jzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVtcXHNcXFNdKy8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwYXJhbWV0ZXInOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXCJbXlwiXSpcIi8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJHwsL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHQnb3BlcmF0b3InOiAvPS8sXG5cdCd0bGlzdCc6IHtcblx0XHRwYXR0ZXJuOiAvVExJU1RcXHMqXFwoXFxzKlxcdysoPzooPzpcXHMqLFxccypcIlteXCJdKlwiKSt8XFxzKixcXHMqXCJbXlwiXSpcIi1cIlteXCJdKlwiKT9cXHMqXFwpLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnZnVuY3Rpb24nOiAvXlRMSVNULyxcblx0XHRcdCdwcm9wZXJ0eSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFxzKlxcKFxccyopXFx3Ky8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzogL1wiW15cIl0qXCIvLFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1soKSxdLyxcblx0XHRcdCdvcGVyYXRvcic6IC8tL1xuXHRcdH1cblx0fSxcblx0J3B1bmN0dWF0aW9uJzogL1s7LF0vLFxuXHQnbnVtYmVyJzoge1xuXHRcdHBhdHRlcm46IC8oXnxcXHMpXFxkKyg/OlxcLlxcZCspPyg/IVxcUykvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J2Jvb2xlYW4nOiAvWUVTfE5PLyxcbn07XG5cblByaXNtLmxhbmd1YWdlcy5weCA9IFByaXNtLmxhbmd1YWdlcy5wY2F4aXM7XG4iXSwic291cmNlUm9vdCI6IiJ9