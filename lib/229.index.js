(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[229],{

/***/ "./node_modules/prismjs/components/prism-lilypond.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lilypond.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var schemeExpression = /\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source;
	// allow for up to pow(2, recursivenessLog2) many levels of recursive brace expressions
	// For some reason, this can't be 4
	var recursivenessLog2 = 5;
	for (var i = 0; i < recursivenessLog2; i++) {
		schemeExpression = schemeExpression.replace(/<expr>/g, function () { return schemeExpression; });
	}
	schemeExpression = schemeExpression.replace(/<expr>/g, /[^\s\S]/.source);


	var lilypond = Prism.languages.lilypond = {
		'comment': /%(?:(?!\{).*|\{[\s\S]*?%\})/,
		'embedded-scheme': {
			pattern: RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g, function () { return schemeExpression; }), 'm'),
			lookbehind: true,
			greedy: true,
			inside: {
				'scheme': {
					pattern: /^(#)[\s\S]+$/,
					lookbehind: true,
					alias: 'language-scheme',
					inside: {
						'embedded-lilypond': {
							pattern: /#\{[\s\S]*?#\}/,
							greedy: true,
							inside: {
								'punctuation': /^#\{|#\}$/,
								'lilypond': {
									pattern: /[\s\S]+/,
									alias: 'language-lilypond',
									inside: null // see below
								}
							}
						},
						rest: Prism.languages.scheme
					}
				},
				'punctuation': /#/
			}
		},
		'string': {
			pattern: /"(?:[^"\\]|\\.)*"/,
			greedy: true
		},
		'class-name': {
			pattern: /(\\new\s+)[\w-]+/,
			lookbehind: true
		},
		'keyword': {
			pattern: /\\[a-z][-\w]*/i,
			inside: {
				'punctuation': /^\\/
			}
		},
		'operator': /[=|]|<<|>>/,
		'punctuation': {
			pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
			lookbehind: true
		},
		'number': /\b\d+(?:\/\d+)?\b/
	};

	lilypond['embedded-scheme'].inside['scheme'].inside['embedded-lilypond'].inside['lilypond'].inside = lilypond;

	Prism.languages.ly = lilypond;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxpbHlwb25kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLG1DQUFtQyxnQkFBZ0IsZ0NBQWdDLFNBQVMsWUFBWSxJQUFJO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkMsc0VBQXNFLHlCQUF5QixFQUFFO0FBQ2pHO0FBQ0E7OztBQUdBO0FBQ0EsdUJBQXVCLE1BQU0sV0FBVztBQUN4QztBQUNBLHdIQUF3SCx5QkFBeUIsRUFBRTtBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCLElBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiMjI5LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBzY2hlbWVFeHByZXNzaW9uID0gL1xcKCg/OlteKCk7XCIjXFxcXF18XFxcXFtcXHNcXFNdfDsuKig/IS4pfFwiKD86W15cIlxcXFxdfFxcXFwuKSpcInwjKD86XFx7KD86KD8hI1xcfSlbXFxzXFxTXSkqI1xcfXxbXntdKXw8ZXhwcj4pKlxcKS8uc291cmNlO1xuXHQvLyBhbGxvdyBmb3IgdXAgdG8gcG93KDIsIHJlY3Vyc2l2ZW5lc3NMb2cyKSBtYW55IGxldmVscyBvZiByZWN1cnNpdmUgYnJhY2UgZXhwcmVzc2lvbnNcblx0Ly8gRm9yIHNvbWUgcmVhc29uLCB0aGlzIGNhbid0IGJlIDRcblx0dmFyIHJlY3Vyc2l2ZW5lc3NMb2cyID0gNTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWN1cnNpdmVuZXNzTG9nMjsgaSsrKSB7XG5cdFx0c2NoZW1lRXhwcmVzc2lvbiA9IHNjaGVtZUV4cHJlc3Npb24ucmVwbGFjZSgvPGV4cHI+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjaGVtZUV4cHJlc3Npb247IH0pO1xuXHR9XG5cdHNjaGVtZUV4cHJlc3Npb24gPSBzY2hlbWVFeHByZXNzaW9uLnJlcGxhY2UoLzxleHByPi9nLCAvW15cXHNcXFNdLy5zb3VyY2UpO1xuXG5cblx0dmFyIGxpbHlwb25kID0gUHJpc20ubGFuZ3VhZ2VzLmxpbHlwb25kID0ge1xuXHRcdCdjb21tZW50JzogLyUoPzooPyFcXHspLip8XFx7W1xcc1xcU10qPyVcXH0pLyxcblx0XHQnZW1iZWRkZWQtc2NoZW1lJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXnxbPVxcc10pIyg/OlwiKD86W15cIlxcXFxdfFxcXFwuKSpcInxbXlxccygpXCJdKig/OlteXFxzKCldfDxleHByPikpLy5zb3VyY2UucmVwbGFjZSgvPGV4cHI+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjaGVtZUV4cHJlc3Npb247IH0pLCAnbScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnc2NoZW1lJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eKCMpW1xcc1xcU10rJC8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLXNjaGVtZScsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQnZW1iZWRkZWQtbGlseXBvbmQnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8jXFx7W1xcc1xcU10qPyNcXH0vLFxuXHRcdFx0XHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eI1xce3wjXFx9JC8sXG5cdFx0XHRcdFx0XHRcdFx0J2xpbHlwb25kJzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLWxpbHlwb25kJyxcblx0XHRcdFx0XHRcdFx0XHRcdGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuc2NoZW1lXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvIy9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcXFxuZXdcXHMrKVtcXHctXSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFxcXFthLXpdWy1cXHddKi9pLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxcXC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdvcGVyYXRvcic6IC9bPXxdfDw8fD4+Lyxcblx0XHQncHVuY3R1YXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W2EtelxcZF0pKD86Jyt8LCt8W19eXT8tW19eXT8oPzpbLSteIT4uX118KD89XFxkKSl8W19eXVxcLj98Wy4hXSl8W3t9KClbXFxdPD5efl18XFxcXFsoKVtcXF08PlxcXFwhXXwtLXxfXy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnbnVtYmVyJzogL1xcYlxcZCsoPzpcXC9cXGQrKT9cXGIvXG5cdH07XG5cblx0bGlseXBvbmRbJ2VtYmVkZGVkLXNjaGVtZSddLmluc2lkZVsnc2NoZW1lJ10uaW5zaWRlWydlbWJlZGRlZC1saWx5cG9uZCddLmluc2lkZVsnbGlseXBvbmQnXS5pbnNpZGUgPSBsaWx5cG9uZDtcblxuXHRQcmlzbS5sYW5ndWFnZXMubHkgPSBsaWx5cG9uZDtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==