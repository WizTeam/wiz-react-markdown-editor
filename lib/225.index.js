(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ "./node_modules/prismjs/components/prism-latte.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-latte.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	Prism.languages.latte = {
		'comment': /^\{\*[\s\S]*/,
		'ld': {
			pattern: /^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,
			inside: {
				'punctuation': /^\{\/?/,
				'tag': {
					pattern: /.+/,
					alias: 'important'
				}
			}
		},
		'rd': {
			pattern: /\}$/,
			inside: {
				'punctuation': /.+/
			}
		},
		'php': {
			pattern: /\S(?:[\s\S]*\S)?/,
			alias: 'language-php',
			inside: Prism.languages.php
		}
	};

	var markupLatte = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('inside', 'attr-value', {
		'n-attr': {
			pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
			inside: {
				'attr-name': {
					pattern: /^[^\s=]+/,
					alias: 'important'
				},
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'punctuation': [
							/^=/,
							{
								pattern: /^(\s*)["']|["']$/,
								lookbehind: true
							}
						],
						'php': {
							pattern: /\S(?:[\s\S]*\S)?/,
							inside: Prism.languages.php
						}
					}
				},
			}
		},
	}, markupLatte.tag);

	Prism.hooks.add('before-tokenize', function(env) {
		if (env.language !== 'latte') {
			return;
		}
		var lattePattern = /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'latte', lattePattern);
		env.grammar = markupLatte;
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'latte');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxhdHRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjLEdBQUcsUUFBUSxZQUFZLG1FQUFtRTtBQUNoSTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjIyNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblx0UHJpc20ubGFuZ3VhZ2VzLmxhdHRlID0ge1xuXHRcdCdjb21tZW50JzogL15cXHtcXCpbXFxzXFxTXSovLFxuXHRcdCdsZCc6IHtcblx0XHRcdHBhdHRlcm46IC9eXFx7KD86Wz1fXXxcXC8/KD8hXFxkfFxcdytcXCgpXFx3K3wpLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxce1xcLz8vLFxuXHRcdFx0XHQndGFnJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8uKy8sXG5cdFx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdyZCc6IHtcblx0XHRcdHBhdHRlcm46IC9cXH0kLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvLisvXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQncGhwJzoge1xuXHRcdFx0cGF0dGVybjogL1xcUyg/OltcXHNcXFNdKlxcUyk/Lyxcblx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtcGhwJyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnBocFxuXHRcdH1cblx0fTtcblxuXHR2YXIgbWFya3VwTGF0dGUgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2luc2lkZScsICdhdHRyLXZhbHVlJywge1xuXHRcdCduLWF0dHInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvbjpbXFx3LV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykpPy8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlteXFxzPV0rLyxcblx0XHRcdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLz1bXFxzXFxTXSsvLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0XHQvXj0vLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdCdwaHAnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9cXFMoPzpbXFxzXFxTXSpcXFMpPy8sXG5cdFx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnBocFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHR9LFxuXHR9LCBtYXJrdXBMYXR0ZS50YWcpO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0aWYgKGVudi5sYW5ndWFnZSAhPT0gJ2xhdHRlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgbGF0dGVQYXR0ZXJuID0gL1xce1xcKltcXHNcXFNdKj9cXCpcXH18XFx7W14nXCJcXHN7fSpdKD86W15cIicve31dfFxcLyg/IVsqL10pfChcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKj9cXH0vZztcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnbGF0dGUnLCBsYXR0ZVBhdHRlcm4pO1xuXHRcdGVudi5ncmFtbWFyID0gbWFya3VwTGF0dGU7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnbGF0dGUnKTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=