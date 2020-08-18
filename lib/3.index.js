(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/prismjs/components/prism-abnf.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-abnf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var coreRules = '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)';

	Prism.languages.abnf = {
		'comment': /;.*/,
		'string': {
			pattern: /(?:%[is])?"[^"\n\r]*"/,
			greedy: true,
			inside: {
				'punctuation': /^%[is]/
			}
		},
		'range': {
			pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
			alias: 'number'
		},
		'terminal': {
			pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
			alias: 'number'
		},
		'repetition': {
			pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
			lookbehind: true,
			alias: 'operator'
		},
		'definition': {
			pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^>\r\n]*>)(?=\s*=)/m,
			lookbehind: true,
			alias: 'keyword',
			inside: {
				'punctuation': /<|>/
			}
		},
		'core-rule': {
			pattern: RegExp('(?:(^|[^<\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\w-])', 'i'),
			lookbehind: true,
			alias: ['rule', 'constant'],
			inside: {
				'punctuation': /<|>/
			}
		},
		'rule': {
			pattern: /(^|[^<\w-])[a-z][\w-]*|<[^>\r\n]*>/i,
			lookbehind: true,
			inside: {
				'punctuation': /<|>/
			}
		},
		'operator': /=\/?|\//,
		'punctuation': /[()\[\]]/
	};

})(Prism);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFibmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIGNvcmVSdWxlcyA9ICcoPzpBTFBIQXxCSVR8Q0hBUnxDUnxDUkxGfENUTHxESUdJVHxEUVVPVEV8SEVYRElHfEhUQUJ8TEZ8TFdTUHxPQ1RFVHxTUHxWQ0hBUnxXU1ApJztcblxuXHRQcmlzbS5sYW5ndWFnZXMuYWJuZiA9IHtcblx0XHQnY29tbWVudCc6IC87LiovLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKD86JVtpc10pP1wiW15cIlxcblxccl0qXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eJVtpc10vXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQncmFuZ2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvJSg/OmJbMDFdKy1bMDFdK3xkXFxkKy1cXGQrfHhbQS1GXFxkXSstW0EtRlxcZF0rKS9pLFxuXHRcdFx0YWxpYXM6ICdudW1iZXInXG5cdFx0fSxcblx0XHQndGVybWluYWwnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvJSg/OmJbMDFdKyg/OlxcLlswMV0rKSp8ZFxcZCsoPzpcXC5cXGQrKSp8eFtBLUZcXGRdKyg/OlxcLltBLUZcXGRdKykqKS9pLFxuXHRcdFx0YWxpYXM6ICdudW1iZXInXG5cdFx0fSxcblx0XHQncmVwZXRpdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OlxcZCpcXCpcXGQqfFxcZCspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdH0sXG5cdFx0J2RlZmluaXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF5bIFxcdF0qKSg/OlthLXpdW1xcdy1dKnw8W14+XFxyXFxuXSo+KSg/PVxccyo9KS9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAna2V5d29yZCcsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzx8Pi9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjb3JlLXJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJyg/OihefFtePFxcXFx3LV0pJyArIGNvcmVSdWxlcyArICd8PCcgKyBjb3JlUnVsZXMgKyAnPikoPyFbXFxcXHctXSknLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiBbJ3J1bGUnLCAnY29uc3RhbnQnXSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvPHw+L1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3J1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W148XFx3LV0pW2Etel1bXFx3LV0qfDxbXj5cXHJcXG5dKj4vaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzx8Pi9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdvcGVyYXRvcic6IC89XFwvP3xcXC8vLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKClcXFtcXF1dL1xuXHR9O1xuXG59KShQcmlzbSk7XG4iXSwic291cmNlUm9vdCI6IiJ9