(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[413],{

/***/ "./node_modules/prismjs/components/prism-turtle.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-turtle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.turtle = {
	'comment': {
		pattern: /#.*/,
		greedy: true
	},
	'multiline-string': {
		pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
		greedy: true,
		alias: 'string',
		inside: {
			'comment': /#.*/
		}
	},
	'string': {
		pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
		greedy: true
	},
	'url': {
		pattern: /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
		greedy: true,
		inside: {
			'punctuation': /[<>]/
		}
	},
	'function': {
		pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
		inside: {
			'local-name': {
				pattern: /([^:]*:)[\s\S]+/,
				lookbehind: true
			},
			'prefix': {
				pattern: /[\s\S]+/,
				inside: {
					'punctuation': /:/
				}
			}
		}
	},
	'number': /[+-]?\b\d+\.?\d*(?:e[+-]?\d+)?/i,
	'punctuation': /[{}.,;()[\]]|\^\^/,
	'boolean': /\b(?:true|false)\b/,
	'keyword': [
		/(?:\ba|@prefix|@base)\b|=/,
		/\b(?:graph|base|prefix)\b/i
	],
	'tag': {
		pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
		inside: {
			'punctuation': /@/
		}
	}
};
Prism.languages.trig = Prism.languages['turtle'];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR1cnRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxnQ0FBZ0Msd0JBQXdCLEVBQUUsYUFBYSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZ0dBQWdHLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxvQkFBb0IsR0FBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0MTMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMudHVydGxlID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvIy4qLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J211bHRpbGluZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiXCJcIig/Oig/OlwiXCI/KT8oPzpbXlwiXFxcXF18XFxcXC4pKSpcIlwiXCJ8JycnKD86KD86Jyc/KT8oPzpbXidcXFxcXXxcXFxcLikpKicnJy8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdjb21tZW50JzogLyMuKi9cblx0XHR9XG5cdH0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86W15cXFxcXCJcXHJcXG5dfFxcXFwuKSpcInwnKD86W15cXFxcJ1xcclxcbl18XFxcXC4pKicvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQndXJsJzoge1xuXHRcdHBhdHRlcm46IC88KD86W15cXHgwMC1cXHgyMDw+XCJ7fXxeYFxcXFxdfFxcXFwoPzp1W1xcZGEtZkEtRl17NH18VVtcXGRhLWZBLUZdezh9KSkqPi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1s8Pl0vXG5cdFx0fVxuXHR9LFxuXHQnZnVuY3Rpb24nOiB7XG5cdFx0cGF0dGVybjogLyg/Oig/IVstLlxcZFxceEI3XSlbLS5cXHdcXHhCN1xceEMwLVxcdUZGRkRdKyk/Oig/Oig/IVstLl0pKD86Wy0uOlxcd1xceEMwLVxcdUZGRkRdfCVbXFxkYS1mXXsyfXxcXFxcLikrKT8vaSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdsb2NhbC1uYW1lJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFteOl0qOilbXFxzXFxTXSsvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J3ByZWZpeCc6IHtcblx0XHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC86L1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHQnbnVtYmVyJzogL1srLV0/XFxiXFxkK1xcLj9cXGQqKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdwdW5jdHVhdGlvbic6IC9be30uLDsoKVtcXF1dfFxcXlxcXi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2tleXdvcmQnOiBbXG5cdFx0Lyg/OlxcYmF8QHByZWZpeHxAYmFzZSlcXGJ8PS8sXG5cdFx0L1xcYig/OmdyYXBofGJhc2V8cHJlZml4KVxcYi9pXG5cdF0sXG5cdCd0YWcnOiB7XG5cdFx0cGF0dGVybjogL0BbYS16XSsoPzotW2EtelxcZF0rKSovaSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9AL1xuXHRcdH1cblx0fVxufTtcblByaXNtLmxhbmd1YWdlcy50cmlnID0gUHJpc20ubGFuZ3VhZ2VzWyd0dXJ0bGUnXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=