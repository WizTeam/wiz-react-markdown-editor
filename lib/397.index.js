(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[397],{

/***/ "./node_modules/prismjs/components/prism-t4-templating.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-t4-templating.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	function createBlock(prefix, inside, contentAlias) {
		return {
			pattern: RegExp('<#' + prefix + '[\\s\\S]*?#>'),
			alias: 'block',
			inside: {
				'delimiter': {
					pattern: RegExp('^<#' + prefix + '|#>$'),
					alias: 'important'
				},
				'content': {
					pattern: /[\s\S]+/,
					inside: inside,
					alias: contentAlias
				}
			}
		};
	}

	function createT4(insideLang) {
		var grammar = Prism.languages[insideLang];
		var className = 'language-' + insideLang;

		return {
			'block': {
				pattern: /<#[\s\S]+?#>/,
				inside: {
					'directive': createBlock('@', {
						'attr-value': {
							pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
							inside: {
								'punctuation': /^=|^["']|["']$/
							}
						},
						'keyword': /\w+(?=\s)/,
						'attr-name': /\w+/
					}),
					'expression': createBlock('=', grammar, className),
					'class-feature': createBlock('\\+', grammar, className),
					'standard': createBlock('', grammar, className)
				}
			}
		};
	}

	Prism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', { value: createT4 });

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXQ0LXRlbXBsYXRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCxlQUFlLGtCQUFrQjs7QUFFN0YsQ0FBQyIsImZpbGUiOiIzOTcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0ZnVuY3Rpb24gY3JlYXRlQmxvY2socHJlZml4LCBpbnNpZGUsIGNvbnRlbnRBbGlhcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJzwjJyArIHByZWZpeCArICdbXFxcXHNcXFxcU10qPyM+JyksXG5cdFx0XHRhbGlhczogJ2Jsb2NrJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXjwjJyArIHByZWZpeCArICd8Iz4kJyksXG5cdFx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0XHRcdGluc2lkZTogaW5zaWRlLFxuXHRcdFx0XHRcdGFsaWFzOiBjb250ZW50QWxpYXNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVUNChpbnNpZGVMYW5nKSB7XG5cdFx0dmFyIGdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbaW5zaWRlTGFuZ107XG5cdFx0dmFyIGNsYXNzTmFtZSA9ICdsYW5ndWFnZS0nICsgaW5zaWRlTGFuZztcblxuXHRcdHJldHVybiB7XG5cdFx0XHQnYmxvY2snOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88I1tcXHNcXFNdKz8jPi8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdkaXJlY3RpdmUnOiBjcmVhdGVCbG9jaygnQCcsIHtcblx0XHRcdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvPSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPj1dKykvLFxuXHRcdFx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXj18XltcIiddfFtcIiddJC9cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdrZXl3b3JkJzogL1xcdysoPz1cXHMpLyxcblx0XHRcdFx0XHRcdCdhdHRyLW5hbWUnOiAvXFx3Ky9cblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnZXhwcmVzc2lvbic6IGNyZWF0ZUJsb2NrKCc9JywgZ3JhbW1hciwgY2xhc3NOYW1lKSxcblx0XHRcdFx0XHQnY2xhc3MtZmVhdHVyZSc6IGNyZWF0ZUJsb2NrKCdcXFxcKycsIGdyYW1tYXIsIGNsYXNzTmFtZSksXG5cdFx0XHRcdFx0J3N0YW5kYXJkJzogY3JlYXRlQmxvY2soJycsIGdyYW1tYXIsIGNsYXNzTmFtZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRQcmlzbS5sYW5ndWFnZXNbJ3Q0LXRlbXBsYXRpbmcnXSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2NyZWF0ZVQ0JywgeyB2YWx1ZTogY3JlYXRlVDQgfSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=