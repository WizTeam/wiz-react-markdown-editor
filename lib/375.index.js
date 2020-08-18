(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[375],{

/***/ "./node_modules/prismjs/components/prism-smarty.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-smarty.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* TODO
	Add support for variables inside double quoted strings
	Add support for {php}
*/

(function(Prism) {

	Prism.languages.smarty = {
		'comment': /\{\*[\s\S]*?\*\}/,
		'delimiter': {
			pattern: /^\{|\}$/i,
			alias: 'punctuation'
		},
		'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
		'number': /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
		'variable': [
			/\$(?!\d)\w+/,
			/#(?!\d)\w+#/,
			{
				pattern: /(\.|->)(?!\d)\w+/,
				lookbehind: true
			},
			{
				pattern: /(\[)(?!\d)\w+(?=\])/,
				lookbehind: true
			}
		],
		'function': [
			{
				pattern: /(\|\s*)@?(?!\d)\w+/,
				lookbehind: true
			},
			/^\/?(?!\d)\w+/,
			/(?!\d)\w+(?=\()/
		],
		'attr-name': {
			// Value is made optional because it may have already been tokenized
			pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
			inside: {
				"variable": {
					pattern: /(=\s*)(?!\d)\w+/,
					lookbehind: true
				},
				"operator": /=/
			}
		},
		'punctuation': [
			/[\[\]().,:`]|->/
		],
		'operator': [
			/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
			/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
			/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
		],
		'keyword': /\b(?:false|off|on|no|true|yes)\b/
	};

	// Tokenize all inline Smarty expressions
	Prism.hooks.add('before-tokenize', function(env) {
		var smartyPattern = /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g;
		var smartyLitteralStart = '{literal}';
		var smartyLitteralEnd = '{/literal}';
		var smartyLitteralMode = false;

		Prism.languages['markup-templating'].buildPlaceholders(env, 'smarty', smartyPattern, function (match) {
			// Smarty tags inside {literal} block are ignored
			if(match === smartyLitteralEnd) {
				smartyLitteralMode = false;
			}

			if(!smartyLitteralMode) {
				if(match === smartyLitteralStart) {
					smartyLitteralMode = true;
				}

				return true;
			}
			return false;
		});
	});

	// Re-insert the tokens after tokenizing
	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'smarty');
	});

}(Prism));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNtYXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQSxnQkFBZ0IsR0FBRztBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYyxHQUFHLFVBQVU7QUFDcEQsOEJBQThCLFFBQVE7QUFDdEMsNEJBQTRCLFNBQVM7QUFDckM7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDLFMiLCJmaWxlIjoiMzc1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVE9ET1xuXHRBZGQgc3VwcG9ydCBmb3IgdmFyaWFibGVzIGluc2lkZSBkb3VibGUgcXVvdGVkIHN0cmluZ3Ncblx0QWRkIHN1cHBvcnQgZm9yIHtwaHB9XG4qL1xuXG4oZnVuY3Rpb24oUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuc21hcnR5ID0ge1xuXHRcdCdjb21tZW50JzogL1xce1xcKltcXHNcXFNdKj9cXCpcXH0vLFxuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXlxce3xcXH0kL2ksXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH0sXG5cdFx0J3N0cmluZyc6IC8oW1wiJ10pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0J251bWJlcic6IC9cXGIweFtcXGRBLUZhLWZdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbRWVdWy0rXT9cXGQrKT8vLFxuXHRcdCd2YXJpYWJsZSc6IFtcblx0XHRcdC9cXCQoPyFcXGQpXFx3Ky8sXG5cdFx0XHQvIyg/IVxcZClcXHcrIy8sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwufC0+KSg/IVxcZClcXHcrLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXFspKD8hXFxkKVxcdysoPz1cXF0pLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2Z1bmN0aW9uJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcfFxccyopQD8oPyFcXGQpXFx3Ky8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvXlxcLz8oPyFcXGQpXFx3Ky8sXG5cdFx0XHQvKD8hXFxkKVxcdysoPz1cXCgpL1xuXHRcdF0sXG5cdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdC8vIFZhbHVlIGlzIG1hZGUgb3B0aW9uYWwgYmVjYXVzZSBpdCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gdG9rZW5pemVkXG5cdFx0XHRwYXR0ZXJuOiAvXFx3K1xccyo9XFxzKig/Oig/IVxcZClcXHcrKT8vLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFwidmFyaWFibGVcIjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oPVxccyopKD8hXFxkKVxcdysvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJvcGVyYXRvclwiOiAvPS9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdC9bXFxbXFxdKCkuLDpgXXwtPi9cblx0XHRdLFxuXHRcdCdvcGVyYXRvcic6IFtcblx0XHRcdC9bK1xcLSpcXC8lXXw9PT89P3xbITw+XT0/fCYmfFxcfFxcfD8vLFxuXHRcdFx0L1xcYmlzXFxzKyg/Om5vdFxccyspPyg/OmRpdnxldmVufG9kZCkoPzpcXHMrYnkpP1xcYi8sXG5cdFx0XHQvXFxiKD86ZXF8bmVxP3xndHxsdHxndD9lfGx0P2V8bm90fG1vZHxvcnxhbmQpXFxiL1xuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiAvXFxiKD86ZmFsc2V8b2ZmfG9ufG5vfHRydWV8eWVzKVxcYi9cblx0fTtcblxuXHQvLyBUb2tlbml6ZSBhbGwgaW5saW5lIFNtYXJ0eSBleHByZXNzaW9uc1xuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdHZhciBzbWFydHlQYXR0ZXJuID0gL1xce1xcKltcXHNcXFNdKj9cXCpcXH18XFx7W1xcc1xcU10rP1xcfS9nO1xuXHRcdHZhciBzbWFydHlMaXR0ZXJhbFN0YXJ0ID0gJ3tsaXRlcmFsfSc7XG5cdFx0dmFyIHNtYXJ0eUxpdHRlcmFsRW5kID0gJ3svbGl0ZXJhbH0nO1xuXHRcdHZhciBzbWFydHlMaXR0ZXJhbE1vZGUgPSBmYWxzZTtcblxuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhlbnYsICdzbWFydHknLCBzbWFydHlQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdC8vIFNtYXJ0eSB0YWdzIGluc2lkZSB7bGl0ZXJhbH0gYmxvY2sgYXJlIGlnbm9yZWRcblx0XHRcdGlmKG1hdGNoID09PSBzbWFydHlMaXR0ZXJhbEVuZCkge1xuXHRcdFx0XHRzbWFydHlMaXR0ZXJhbE1vZGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXNtYXJ0eUxpdHRlcmFsTW9kZSkge1xuXHRcdFx0XHRpZihtYXRjaCA9PT0gc21hcnR5TGl0dGVyYWxTdGFydCkge1xuXHRcdFx0XHRcdHNtYXJ0eUxpdHRlcmFsTW9kZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gUmUtaW5zZXJ0IHRoZSB0b2tlbnMgYWZ0ZXIgdG9rZW5pemluZ1xuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ3NtYXJ0eScpO1xuXHR9KTtcblxufShQcmlzbSkpOyJdLCJzb3VyY2VSb290IjoiIn0=