(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[381],{

/***/ "./node_modules/prismjs/components/prism-soy.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-soy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	var stringPattern = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	var numberPattern = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;

	Prism.languages.soy = {
		'comment': [
			/\/\*[\s\S]*?\*\//,
			{
				pattern: /(\s)\/\/.*/,
				lookbehind: true,
				greedy: true
			}
		],
		'command-arg': {
			pattern: /({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
			lookbehind: true,
			alias: 'string',
			inside: {
				'punctuation': /\./
			}
		},
		'parameter': {
			pattern: /({+\/?\s*@?param\??\s+)\.?[\w.]+/,
			lookbehind: true,
			alias: 'variable'
		},
		'keyword': [
			{
				pattern: /({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
				lookbehind: true
			},
			/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/
		],
		'delimiter': {
			pattern: /^{+\/?|\/?}+$/,
			alias: 'punctuation'
		},
		'property': /\w+(?==)/,
		'variable': {
			pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,
			inside: {
				'string': {
					pattern: stringPattern,
					greedy: true
				},
				'number': numberPattern,
				'punctuation': /[\[\].?]/
			}
		},
		'string': {
			pattern: stringPattern,
			greedy: true
		},
		'function': [
			/\w+(?=\()/,
			{
				pattern: /(\|[^\S\r\n]*)\w+/,
				lookbehind: true
			}
		],
		'boolean': /\b(?:true|false)\b/,
		'number': numberPattern,
		'operator': /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
		'punctuation': /[{}()\[\]|.,:]/
	};

	// Tokenize all inline Soy expressions
	Prism.hooks.add('before-tokenize', function (env) {
		var soyPattern = /{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g;
		var soyLitteralStart = '{literal}';
		var soyLitteralEnd = '{/literal}';
		var soyLitteralMode = false;

		Prism.languages['markup-templating'].buildPlaceholders(env, 'soy', soyPattern, function (match) {
			// Soy tags inside {literal} block are ignored
			if (match === soyLitteralEnd) {
				soyLitteralMode = false;
			}

			if (!soyLitteralMode) {
				if (match === soyLitteralStart) {
					soyLitteralMode = true;
				}

				return true;
			}
			return false;
		});
	});

	// Re-insert the tokens after tokenizing
	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'soy');
	});

}(Prism));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNveS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixLQUFLLEVBQUUsSUFBSTtBQUNqQywyQkFBMkIsUUFBUTtBQUNuQyx5QkFBeUIsU0FBUztBQUNsQzs7QUFFQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUMsUyIsImZpbGUiOiIzODEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cdHZhciBzdHJpbmdQYXR0ZXJuID0gLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcblx0dmFyIG51bWJlclBhdHRlcm4gPSAvXFxiXFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspP1xcYnxcXGIweFtcXGRBLUZdK1xcYi87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnNveSA9IHtcblx0XHQnY29tbWVudCc6IFtcblx0XHRcdC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHMpXFwvXFwvLiovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdjb21tYW5kLWFyZyc6IHtcblx0XHRcdHBhdHRlcm46IC8oeytcXC8/XFxzKig/OmFsaWFzfGNhbGx8ZGVsY2FsbHxkZWxwYWNrYWdlfGRlbHRlbXBsYXRlfG5hbWVzcGFjZXx0ZW1wbGF0ZSlcXHMrKVxcLj9bXFx3Ll0rLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdwYXJhbWV0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKHsrXFwvP1xccypAP3BhcmFtXFw/P1xccyspXFwuP1tcXHcuXSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0fSxcblx0XHQna2V5d29yZCc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyh7K1xcLz9bXlxcU1xcclxcbl0qKSg/OlxcXFxbbnJ0XXxhbGlhc3xjYWxsfGNhc2V8Y3NzfGRlZmF1bHR8ZGVsY2FsbHxkZWxwYWNrYWdlfGRlbHRlbXBsYXRlfGVsc2UoPzppZik/fGZhbGxiYWNrbXNnfGZvcig/OmVhY2gpP3xpZig/OmVtcHR5KT98bGJ8bGV0fGxpdGVyYWx8bXNnfG5hbWVzcGFjZXxuaWx8QD9wYXJhbVxcPz98cmJ8c3B8c3dpdGNofHRlbXBsYXRlfHhpZCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0L1xcYig/OmFueXxhc3xhdHRyaWJ1dGVzfGJvb2x8Y3NzfGZsb2F0fGlufGludHxqc3xodG1sfGxpc3R8bWFwfG51bGx8bnVtYmVyfHN0cmluZ3x1cmkpXFxiL1xuXHRcdF0sXG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9eeytcXC8/fFxcLz99KyQvLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC9cXHcrKD89PSkvLFxuXHRcdCd2YXJpYWJsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9cXCRbXlxcV1xcZF1cXHcqKD86XFw/Pyg/OlxcLlxcdyt8XFxbW15cXF1dK10pKSovLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogc3RyaW5nUGF0dGVybixcblx0XHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0J251bWJlcic6IG51bWJlclBhdHRlcm4sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bXFxbXFxdLj9dL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IHN0cmluZ1BhdHRlcm4sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdmdW5jdGlvbic6IFtcblx0XHRcdC9cXHcrKD89XFwoKS8sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFx8W15cXFNcXHJcXG5dKilcXHcrLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXHRcdCdudW1iZXInOiBudW1iZXJQYXR0ZXJuLFxuXHRcdCdvcGVyYXRvcic6IC9cXD86P3w8PT98Pj0/fD09P3whPXxbKyovJS1dfFxcYig/OmFuZHxub3R8b3IpXFxiLyxcblx0XHQncHVuY3R1YXRpb24nOiAvW3t9KClcXFtcXF18Liw6XS9cblx0fTtcblxuXHQvLyBUb2tlbml6ZSBhbGwgaW5saW5lIFNveSBleHByZXNzaW9uc1xuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgc295UGF0dGVybiA9IC97ey4rP319fHsuKz99fFxcc1xcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8vZztcblx0XHR2YXIgc295TGl0dGVyYWxTdGFydCA9ICd7bGl0ZXJhbH0nO1xuXHRcdHZhciBzb3lMaXR0ZXJhbEVuZCA9ICd7L2xpdGVyYWx9Jztcblx0XHR2YXIgc295TGl0dGVyYWxNb2RlID0gZmFsc2U7XG5cblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnc295Jywgc295UGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG5cdFx0XHQvLyBTb3kgdGFncyBpbnNpZGUge2xpdGVyYWx9IGJsb2NrIGFyZSBpZ25vcmVkXG5cdFx0XHRpZiAobWF0Y2ggPT09IHNveUxpdHRlcmFsRW5kKSB7XG5cdFx0XHRcdHNveUxpdHRlcmFsTW9kZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNveUxpdHRlcmFsTW9kZSkge1xuXHRcdFx0XHRpZiAobWF0Y2ggPT09IHNveUxpdHRlcmFsU3RhcnQpIHtcblx0XHRcdFx0XHRzb3lMaXR0ZXJhbE1vZGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIFJlLWluc2VydCB0aGUgdG9rZW5zIGFmdGVyIHRva2VuaXppbmdcblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnc295Jyk7XG5cdH0pO1xuXG59KFByaXNtKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==