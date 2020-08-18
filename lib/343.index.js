(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[343],{

/***/ "./node_modules/prismjs/components/prism-regex.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-regex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var specialEscape = {
		pattern: /\\[\\(){}[\]^$+*?|.]/,
		alias: 'escape'
	};
	var escape = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/;
	var charClass = {
		pattern: /\.|\\[wsd]|\\p{[^{}]+}/i,
		alias: 'class-name'
	};
	var charClassWithoutDot = {
		pattern: /\\[wsd]|\\p{[^{}]+}/i,
		alias: 'class-name'
	};

	var rangeChar = '(?:[^\\\\-]|' + escape.source + ')';
	var range = RegExp(rangeChar + '-' + rangeChar);

	// the name of a capturing group
	var groupName = {
		pattern: /(<|')[^<>']+(?=[>']$)/,
		lookbehind: true,
		alias: 'variable'
	};

	Prism.languages.regex = {
		'charset': {
			pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
			lookbehind: true,
			inside: {
				'charset-negation': {
					pattern: /(^\[)\^/,
					lookbehind: true,
					alias: 'operator'
				},
				'charset-punctuation': {
					pattern: /^\[|\]$/,
					alias: 'punctuation'
				},
				'range': {
					pattern: range,
					inside: {
						'escape': escape,
						'range-punctuation': {
							pattern: /-/,
							alias: 'operator'
						}
					}
				},
				'special-escape': specialEscape,
				'charclass': charClassWithoutDot,
				'escape': escape
			}
		},
		'special-escape': specialEscape,
		'charclass': charClass,
		'backreference': [
			{
				// a backreference which is not an octal escape
				pattern: /\\(?![123][0-7]{2})[1-9]/,
				alias: 'keyword'
			},
			{
				pattern: /\\k<[^<>']+>/,
				alias: 'keyword',
				inside: {
					'group-name': groupName
				}
			}
		],
		'anchor': {
			pattern: /[$^]|\\[ABbGZz]/,
			alias: 'function'
		},
		'escape': escape,
		'group': [
			{
				// https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
				// https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs

				// (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
				pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
				alias: 'punctuation',
				inside: {
					'group-name': groupName
				}
			},
			{
				pattern: /\)/,
				alias: 'punctuation'
			}
		],
		'quantifier': {
			pattern: /(?:[+*?]|\{(?:\d+,?\d*)\})[?+]?/,
			alias: 'number'
		},
		'alternation': {
			pattern: /\|/,
			alias: 'keyword'
		}
	};


	[
		'actionscript',
		'coffescript',
		'flow',
		'javascript',
		'typescript',
		'vala'
	].forEach(function (lang) {
		var grammar = Prism.languages[lang];
		if (grammar) {
			grammar['regex'].inside = {
				'language-regex': {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/i,
					lookbehind: true,
					inside: Prism.languages.regex
				},
				'regex-flags': /[a-z]+$/i,
				'regex-delimiter': /^\/|\/$/,
			};
		}
	});

}(Prism))


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJlZ2V4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRSxhQUFhLEVBQUUsSUFBSSxhQUFhLGtCQUFrQixJQUFJLFlBQVksRUFBRTtBQUN0RztBQUNBLDJCQUEyQixJQUFJLEdBQUc7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksR0FBRztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiIzNDMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHNwZWNpYWxFc2NhcGUgPSB7XG5cdFx0cGF0dGVybjogL1xcXFxbXFxcXCgpe31bXFxdXiQrKj98Ll0vLFxuXHRcdGFsaWFzOiAnZXNjYXBlJ1xuXHR9O1xuXHR2YXIgZXNjYXBlID0gL1xcXFwoPzp4W1xcZGEtZkEtRl17Mn18dVtcXGRhLWZBLUZdezR9fHVcXHtbXFxkYS1mQS1GXStcXH18Y1thLXpBLVpdfDBbMC03XXswLDJ9fFsxMjNdWzAtN117Mn18LikvO1xuXHR2YXIgY2hhckNsYXNzID0ge1xuXHRcdHBhdHRlcm46IC9cXC58XFxcXFt3c2RdfFxcXFxwe1tee31dK30vaSxcblx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdH07XG5cdHZhciBjaGFyQ2xhc3NXaXRob3V0RG90ID0ge1xuXHRcdHBhdHRlcm46IC9cXFxcW3dzZF18XFxcXHB7W157fV0rfS9pLFxuXHRcdGFsaWFzOiAnY2xhc3MtbmFtZSdcblx0fTtcblxuXHR2YXIgcmFuZ2VDaGFyID0gJyg/OlteXFxcXFxcXFwtXXwnICsgZXNjYXBlLnNvdXJjZSArICcpJztcblx0dmFyIHJhbmdlID0gUmVnRXhwKHJhbmdlQ2hhciArICctJyArIHJhbmdlQ2hhcik7XG5cblx0Ly8gdGhlIG5hbWUgb2YgYSBjYXB0dXJpbmcgZ3JvdXBcblx0dmFyIGdyb3VwTmFtZSA9IHtcblx0XHRwYXR0ZXJuOiAvKDx8JylbXjw+J10rKD89Wz4nXSQpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnJlZ2V4ID0ge1xuXHRcdCdjaGFyc2V0Jzoge1xuXHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXFxcXFwpKilcXFsoPzpbXlxcXFxcXF1dfFxcXFxbXFxzXFxTXSkqXFxdLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2NoYXJzZXQtbmVnYXRpb24nOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyheXFxbKVxcXi8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnY2hhcnNldC1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcW3xcXF0kLyxcblx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQncmFuZ2UnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogcmFuZ2UsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQnZXNjYXBlJzogZXNjYXBlLFxuXHRcdFx0XHRcdFx0J3JhbmdlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvLS8sXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc3BlY2lhbC1lc2NhcGUnOiBzcGVjaWFsRXNjYXBlLFxuXHRcdFx0XHQnY2hhcmNsYXNzJzogY2hhckNsYXNzV2l0aG91dERvdCxcblx0XHRcdFx0J2VzY2FwZSc6IGVzY2FwZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NwZWNpYWwtZXNjYXBlJzogc3BlY2lhbEVzY2FwZSxcblx0XHQnY2hhcmNsYXNzJzogY2hhckNsYXNzLFxuXHRcdCdiYWNrcmVmZXJlbmNlJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBhIGJhY2tyZWZlcmVuY2Ugd2hpY2ggaXMgbm90IGFuIG9jdGFsIGVzY2FwZVxuXHRcdFx0XHRwYXR0ZXJuOiAvXFxcXCg/IVsxMjNdWzAtN117Mn0pWzEtOV0vLFxuXHRcdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxcXGs8W148PiddKz4vLFxuXHRcdFx0XHRhbGlhczogJ2tleXdvcmQnLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnZ3JvdXAtbmFtZSc6IGdyb3VwTmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnYW5jaG9yJzoge1xuXHRcdFx0cGF0dGVybjogL1skXl18XFxcXFtBQmJHWnpdLyxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fSxcblx0XHQnZXNjYXBlJzogZXNjYXBlLFxuXHRcdCdncm91cCc6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vamF2YXNlLzEwL2RvY3MvYXBpL2phdmEvdXRpbC9yZWdleC9QYXR0ZXJuLmh0bWxcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L3N0YW5kYXJkL2Jhc2UtdHlwZXMvcmVndWxhci1leHByZXNzaW9uLWxhbmd1YWdlLXF1aWNrLXJlZmVyZW5jZT92aWV3PW5ldGZyYW1ld29yay00LjcuMiNncm91cGluZy1jb25zdHJ1Y3RzXG5cblx0XHRcdFx0Ly8gKCksICg/PG5hbWU+KSwgKD8nbmFtZScpLCAoPz4pLCAoPzopLCAoPz0pLCAoPyEpLCAoPzw9KSwgKD88ISksICg/aXMtbSksICg/aS1tOilcblx0XHRcdFx0cGF0dGVybjogL1xcKCg/OlxcPyg/OjxbXjw+J10rPnwnW148PiddKyd8Wz46XXw8P1s9IV18W2lkbW5zdXhVXSsoPzotW2lkbW5zdXhVXSspPzo/KSk/Lyxcblx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbicsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdncm91cC1uYW1lJzogZ3JvdXBOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXCkvLFxuXHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J3F1YW50aWZpZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKD86WysqP118XFx7KD86XFxkKyw/XFxkKilcXH0pWz8rXT8vLFxuXHRcdFx0YWxpYXM6ICdudW1iZXInXG5cdFx0fSxcblx0XHQnYWx0ZXJuYXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFx8Lyxcblx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHR9XG5cdH07XG5cblxuXHRbXG5cdFx0J2FjdGlvbnNjcmlwdCcsXG5cdFx0J2NvZmZlc2NyaXB0Jyxcblx0XHQnZmxvdycsXG5cdFx0J2phdmFzY3JpcHQnLFxuXHRcdCd0eXBlc2NyaXB0Jyxcblx0XHQndmFsYSdcblx0XS5mb3JFYWNoKGZ1bmN0aW9uIChsYW5nKSB7XG5cdFx0dmFyIGdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ107XG5cdFx0aWYgKGdyYW1tYXIpIHtcblx0XHRcdGdyYW1tYXJbJ3JlZ2V4J10uaW5zaWRlID0ge1xuXHRcdFx0XHQnbGFuZ3VhZ2UtcmVnZXgnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpL2ksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5yZWdleFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQncmVnZXgtZmxhZ3MnOiAvW2Etel0rJC9pLFxuXHRcdFx0XHQncmVnZXgtZGVsaW1pdGVyJzogL15cXC98XFwvJC8sXG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG5cbn0oUHJpc20pKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==