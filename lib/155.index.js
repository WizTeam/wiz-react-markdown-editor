(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ "./node_modules/prismjs/components/prism-handlebars.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-handlebars.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {

	Prism.languages.handlebars = {
		'comment': /\{\{![\s\S]*?\}\}/,
		'delimiter': {
			pattern: /^\{\{\{?|\}\}\}?$/i,
			alias: 'punctuation'
		},
		'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
		'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
		'boolean': /\b(?:true|false)\b/,
		'block': {
			pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
			lookbehind: true,
			alias: 'keyword'
		},
		'brackets': {
			pattern: /\[[^\]]+\]/,
			inside: {
				punctuation: /\[|\]/,
				variable: /[\s\S]+/
			}
		},
		'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
		'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
	};

	Prism.hooks.add('before-tokenize', function(env) {
		var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhhbmRsZWJhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUU7QUFDL0I7QUFDQSxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQ0FBbUMsYUFBYSxFQUFFO0FBQ2xELCtCQUErQixhQUFhLEVBQUU7QUFDOUM7O0FBRUE7QUFDQSw2QkFBNkIsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7QUFDaEU7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUMiLCJmaWxlIjoiMTU1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKFByaXNtKSB7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmhhbmRsZWJhcnMgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFx7XFx7IVtcXHNcXFNdKj9cXH1cXH0vLFxuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXlxce1xce1xcez98XFx9XFx9XFx9PyQvaSxcblx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0fSxcblx0XHQnc3RyaW5nJzogLyhbXCInXSkoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHQnbnVtYmVyJzogL1xcYjB4W1xcZEEtRmEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltFZV1bKy1dP1xcZCspPy8sXG5cdFx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXHRcdCdibG9jayc6IHtcblx0XHRcdHBhdHRlcm46IC9eKFxccyp+P1xccyopWyNcXC9dXFxTKz8oPz1cXHMqfj9cXHMqJHxcXHMpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdH0sXG5cdFx0J2JyYWNrZXRzJzoge1xuXHRcdFx0cGF0dGVybjogL1xcW1teXFxdXStcXF0vLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXFxbfFxcXS8sXG5cdFx0XHRcdHZhcmlhYmxlOiAvW1xcc1xcU10rL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1shXCIjJSYnOigpKissLlxcLzs8PT5AXFxbXFxcXFxcXV5ge3x9fl0vLFxuXHRcdCd2YXJpYWJsZSc6IC9bXiFcIiMlJicoKSorLFxcLzs8PT5AXFxbXFxcXFxcXV5ge3x9flxcc10rL1xuXHR9O1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0dmFyIGhhbmRsZWJhcnNQYXR0ZXJuID0gL1xce1xce1xce1tcXHNcXFNdKz9cXH1cXH1cXH18XFx7XFx7W1xcc1xcU10rP1xcfVxcfS9nO1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhlbnYsICdoYW5kbGViYXJzJywgaGFuZGxlYmFyc1BhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ2hhbmRsZWJhcnMnKTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=