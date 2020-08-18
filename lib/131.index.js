(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/prismjs/components/prism-ftl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ftl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	// https://freemarker.apache.org/docs/dgui_template_exp.html

	// FTL expression with 4 levels of nesting supported
	var FTL_EXPR = /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source;
	for (var i = 0; i < 2; i++) {
		FTL_EXPR = FTL_EXPR.replace(/<expr>/g, function () { return FTL_EXPR; });
	}
	FTL_EXPR = FTL_EXPR.replace(/<expr>/g, /[^\s\S]/.source);

	var ftl = {
		'comment': /<#--[\s\S]*?-->/,
		'string': [
			{
				// raw string
				pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
				greedy: true
			},
			{
				pattern: RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:<expr>)*?\})*\1/.source.replace(/<expr>/g, function () { return FTL_EXPR; })),
				greedy: true,
				inside: {
					'interpolation': {
						pattern: RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g, function () { return FTL_EXPR; })),
						lookbehind: true,
						inside: {
							'interpolation-punctuation': {
								pattern: /^\$\{|\}$/,
								alias: 'punctuation'
							},
							rest: null
						}
					}
				}
			}
		],
		'keyword': /\b(?:as)\b/,
		'boolean': /\b(?:true|false)\b/,
		'builtin-function': {
			pattern: /((?:^|[^?])\?\s*)\w+/,
			lookbehind: true,
			alias: 'function'
		},
		'function': /\w+(?=\s*\()/,
		'number': /\d+(?:\.\d+)?/,
		'operator': /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
		'punctuation': /[,;.:()[\]{}]/
	};

	ftl.string[1].inside.interpolation.inside.rest = ftl;

	Prism.languages.ftl = {
		'ftl-comment': {
			// the pattern is shortened to be more efficient
			pattern: /^<#--[\s\S]*/,
			alias: 'comment'
		},
		'ftl-directive': {
			pattern: /^<[\s\S]+>$/,
			inside: {
				'directive': {
					pattern: /(^<\/?)[#@][a-z]\w*/i,
					lookbehind: true,
					alias: 'keyword'
				},
				'punctuation': /^<\/?|\/?>$/,
				'content': {
					pattern: /[\s\S]*\S[\s\S]*/,
					alias: 'ftl',
					inside: ftl
				}
			}
		},
		'ftl-interpolation': {
			pattern: /^\$\{[\s\S]*\}$/,
			inside: {
				'punctuation': /^\$\{|\}$/,
				'content': {
					pattern: /[\s\S]*\S[\s\S]*/,
					alias: 'ftl',
					inside: ftl
				}
			}
		}
	};

	Prism.hooks.add('before-tokenize', function (env) {
		var pattern = RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g, function () { return FTL_EXPR; }), 'gi');
		Prism.languages['markup-templating'].buildPlaceholders(env, 'ftl', pattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'ftl');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWZ0bC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsc0RBQXNELGlCQUFpQixFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1Q0FBdUMsZUFBZSxjQUFjLDZDQUE2QyxpQkFBaUIsRUFBRTtBQUNwSTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYyx5Q0FBeUMsaUJBQWlCLEVBQUU7QUFDM0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEdBQUc7QUFDMUI7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnREFBZ0QsSUFBSTtBQUNwRCxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQSx5QkFBeUIsR0FBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLGNBQWMseUNBQXlDLGlCQUFpQixFQUFFO0FBQ3BKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjEzMS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHQvLyBodHRwczovL2ZyZWVtYXJrZXIuYXBhY2hlLm9yZy9kb2NzL2RndWlfdGVtcGxhdGVfZXhwLmh0bWxcblxuXHQvLyBGVEwgZXhwcmVzc2lvbiB3aXRoIDQgbGV2ZWxzIG9mIG5lc3Rpbmcgc3VwcG9ydGVkXG5cdHZhciBGVExfRVhQUiA9IC9bXjwoKVwiJ118XFwoKD86PGV4cHI+KSpcXCl8PCg/ISMtLSl8PCMtLSg/OlteLV18LSg/IS0+KSkqLS0+fFwiKD86W15cXFxcXCJdfFxcXFwuKSpcInwnKD86W15cXFxcJ118XFxcXC4pKicvLnNvdXJjZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcblx0XHRGVExfRVhQUiA9IEZUTF9FWFBSLnJlcGxhY2UoLzxleHByPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBGVExfRVhQUjsgfSk7XG5cdH1cblx0RlRMX0VYUFIgPSBGVExfRVhQUi5yZXBsYWNlKC88ZXhwcj4vZywgL1teXFxzXFxTXS8uc291cmNlKTtcblxuXHR2YXIgZnRsID0ge1xuXHRcdCdjb21tZW50JzogLzwjLS1bXFxzXFxTXSo/LS0+Lyxcblx0XHQnc3RyaW5nJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyByYXcgc3RyaW5nXG5cdFx0XHRcdHBhdHRlcm46IC9cXGJyKFwifCcpKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKlxcMS8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXCJ8JykoPzooPyFcXDF8XFwkXFx7KVteXFxcXF18XFxcXC58XFwkXFx7KD86PGV4cHI+KSo/XFx9KSpcXDEvLnNvdXJjZS5yZXBsYWNlKC88ZXhwcj4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gRlRMX0VYUFI7IH0pKSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKCg/Ol58W15cXFxcXSkoPzpcXFxcXFxcXCkqKVxcJFxceyg/OjxleHByPikqP1xcfS8uc291cmNlLnJlcGxhY2UoLzxleHByPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBGVExfRVhQUjsgfSkpLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcJFxce3xcXH0kLyxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRyZXN0OiBudWxsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHQna2V5d29yZCc6IC9cXGIoPzphcylcXGIvLFxuXHRcdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0XHQnYnVpbHRpbi1mdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxbXj9dKVxcP1xccyopXFx3Ky8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHR9LFxuXHRcdCdmdW5jdGlvbic6IC9cXHcrKD89XFxzKlxcKCkvLFxuXHRcdCdudW1iZXInOiAvXFxkKyg/OlxcLlxcZCspPy8sXG5cdFx0J29wZXJhdG9yJzogL1xcLlxcLls8KiFdP3wtPnwtLXxcXCtcXCt8JiZ8XFx8XFx8fFxcP3sxLDJ9fFstKyovJSE9PD5dPT98XFxiKD86Z3R8Z3RlfGx0fGx0ZSlcXGIvLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bLDsuOigpW1xcXXt9XS9cblx0fTtcblxuXHRmdGwuc3RyaW5nWzFdLmluc2lkZS5pbnRlcnBvbGF0aW9uLmluc2lkZS5yZXN0ID0gZnRsO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5mdGwgPSB7XG5cdFx0J2Z0bC1jb21tZW50Jzoge1xuXHRcdFx0Ly8gdGhlIHBhdHRlcm4gaXMgc2hvcnRlbmVkIHRvIGJlIG1vcmUgZWZmaWNpZW50XG5cdFx0XHRwYXR0ZXJuOiAvXjwjLS1bXFxzXFxTXSovLFxuXHRcdFx0YWxpYXM6ICdjb21tZW50J1xuXHRcdH0sXG5cdFx0J2Z0bC1kaXJlY3RpdmUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXjxbXFxzXFxTXSs+JC8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2RpcmVjdGl2ZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKF48XFwvPylbI0BdW2Etel1cXHcqL2ksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz98XFwvPz4kLyxcblx0XHRcdFx0J2NvbnRlbnQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKlxcU1tcXHNcXFNdKi8sXG5cdFx0XHRcdFx0YWxpYXM6ICdmdGwnLFxuXHRcdFx0XHRcdGluc2lkZTogZnRsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdmdGwtaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC9eXFwkXFx7W1xcc1xcU10qXFx9JC8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSpcXFNbXFxzXFxTXSovLFxuXHRcdFx0XHRcdGFsaWFzOiAnZnRsJyxcblx0XHRcdFx0XHRpbnNpZGU6IGZ0bFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwYXR0ZXJuID0gUmVnRXhwKC88Iy0tW1xcc1xcU10qPy0tPnw8XFwvP1sjQF1bYS16QS1aXSg/OjxleHByPikqPz58XFwkXFx7KD86PGV4cHI+KSo/XFx9Ly5zb3VyY2UucmVwbGFjZSgvPGV4cHI+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZUTF9FWFBSOyB9KSwgJ2dpJyk7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ2Z0bCcsIHBhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICdmdGwnKTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=