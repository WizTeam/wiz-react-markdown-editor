(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[199],{

/***/ "./node_modules/prismjs/components/prism-jq.js":
/*!*****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jq.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var interpolation = /\\\((?:[^()]|\([^()]*\))*\)/.source;
	var string = RegExp(/"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, function () { return interpolation; }));
	var stringInterpolation = {
		'interpolation': {
			pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + interpolation),
			lookbehind: true,
			inside: {
				'content': {
					pattern: /^(\\\()[\s\S]+(?=\)$)/,
					lookbehind: true,
					inside: null // see below
				},
				'punctuation': /^\\\(|\)$/
			}
		}
	};

	var jq = Prism.languages.jq = {
		'comment': /#.*/,
		'property': {
			pattern: RegExp(string.source + /(?=\s*:(?!:))/.source),
			greedy: true,
			inside: stringInterpolation
		},
		'string': {
			pattern: string,
			greedy: true,
			inside: stringInterpolation
		},

		'function': {
			pattern: /(\bdef\s+)[a-z_]\w+/i,
			lookbehind: true
		},

		'variable': /\B\$\w+/,
		'property-literal': {
			pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
			alias: 'property'
		},
		'keyword': /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
		'boolean': /\b(?:true|false)\b/,
		'number': /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,

		'operator': [
			{
				pattern: /\|=?/,
				alias: 'pipe'
			},
			/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/
		],
		'c-style-function': {
			pattern: /\b[a-z_]\w*(?=\s*\()/i,
			alias: 'function'
		},
		'punctuation': /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
		'dot': {
			pattern: /\./,
			alias: 'important'
		}
	}

	stringInterpolation.interpolation.inside.content.inside = jq;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EsMEZBQTBGLHNCQUFzQixFQUFFO0FBQ2xIO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhCQUE4QixHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIxOTkuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIGludGVycG9sYXRpb24gPSAvXFxcXFxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpLy5zb3VyY2U7XG5cdHZhciBzdHJpbmcgPSBSZWdFeHAoL1wiKD86W15cIlxcclxcblxcXFxdfFxcXFxbXlxcclxcbihdfF9fKSpcIi8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGludGVycG9sYXRpb247IH0pKTtcblx0dmFyIHN0cmluZ0ludGVycG9sYXRpb24gPSB7XG5cdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKS8uc291cmNlICsgaW50ZXJwb2xhdGlvbiksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eKFxcXFxcXCgpW1xcc1xcU10rKD89XFwpJCkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcXFxcXCh8XFwpJC9cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGpxID0gUHJpc20ubGFuZ3VhZ2VzLmpxID0ge1xuXHRcdCdjb21tZW50JzogLyMuKi8sXG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKHN0cmluZy5zb3VyY2UgKyAvKD89XFxzKjooPyE6KSkvLnNvdXJjZSksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHN0cmluZ0ludGVycG9sYXRpb25cblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHN0cmluZ0ludGVycG9sYXRpb25cblx0XHR9LFxuXG5cdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXGJkZWZcXHMrKVthLXpfXVxcdysvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXG5cdFx0J3ZhcmlhYmxlJzogL1xcQlxcJFxcdysvLFxuXHRcdCdwcm9wZXJ0eS1saXRlcmFsJzoge1xuXHRcdFx0cGF0dGVybjogL1xcYlthLXpfXVxcdyooPz1cXHMqOig/ITopKS9pLFxuXHRcdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0XHR9LFxuXHRcdCdrZXl3b3JkJzogL1xcYig/OmFzfGJyZWFrfGNhdGNofGRlZnxlbGlmfGVsc2V8ZW5kfGZvcmVhY2h8aWZ8aW1wb3J0fGluY2x1ZGV8bGFiZWx8bW9kdWxlfG1vZHVsZW1ldGF8bnVsbHxyZWR1Y2V8dGhlbnx0cnl8d2hpbGUpXFxiLyxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdFx0J251bWJlcic6IC8oPzpcXGJcXGQrXFwufFxcQlxcLik/XFxiXFxkKyg/OltlRV1bKy1dP1xcZCspP1xcYi8sXG5cblx0XHQnb3BlcmF0b3InOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXHw9Py8sXG5cdFx0XHRcdGFsaWFzOiAncGlwZSdcblx0XHRcdH0sXG5cdFx0XHQvXFwuXFwufFshPTw+XT89fFxcP1xcL1xcL3xcXC9cXC89P3xbLSsqLyVdPT98Wzw+P118XFxiKD86YW5kfG9yfG5vdClcXGIvXG5cdFx0XSxcblx0XHQnYy1zdHlsZS1mdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC9cXGJbYS16X11cXHcqKD89XFxzKlxcKCkvaSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fSxcblx0XHQncHVuY3R1YXRpb24nOiAvOjp8WygpXFxbXFxde30sOjtdfFxcLig/PVxccypbXFxbXFx3JF0pLyxcblx0XHQnZG90Jzoge1xuXHRcdFx0cGF0dGVybjogL1xcLi8sXG5cdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHR9XG5cdH1cblxuXHRzdHJpbmdJbnRlcnBvbGF0aW9uLmludGVycG9sYXRpb24uaW5zaWRlLmNvbnRlbnQuaW5zaWRlID0ganE7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=