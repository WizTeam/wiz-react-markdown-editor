(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/prismjs/components/prism-hcl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hcl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.hcl = {
	'comment': /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
	'heredoc': {
		pattern: /<<-?(\w+)[\s\S]*?^\s*\1/m,
		greedy: true,
		alias: 'string'
	},
	'keyword': [
		{
			pattern: /(?:resource|data)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+{)/i,
			inside: {
				'type': {
					pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
					lookbehind: true,
					alias: 'variable'
				}
			}
		},
		{
			pattern: /(?:provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?={)/i,
			inside: {
				'type': {
					pattern: /(provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
					lookbehind: true,
					alias: 'variable'
				}
			}
		},
		/[\w-]+(?=\s+{)/
	],
	'property': [
		/[\w-\.]+(?=\s*=(?!=))/,
		/"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/,
	],
	'string': {
		pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
				lookbehind: true,
				inside: {
					'type': {
						pattern: /(\b(?:terraform|var|self|count|module|path|data|local)\b\.)[\w\*]+/i,
						lookbehind: true,
						alias: 'variable'
					},
					'keyword': /\b(?:terraform|var|self|count|module|path|data|local)\b/i,
					'function': /\w+(?=\()/,
					'string': {
						pattern: /"(?:\\[\s\S]|[^\\"])*"/,
						greedy: true,
					},
					'number': /\b0x[\da-f]+\b|\b\d+\.?\d*(?:e[+-]?\d+)?/i,
					'punctuation': /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/,
				}
			},
		}
	},
	'number': /\b0x[\da-f]+\b|\b\d+\.?\d*(?:e[+-]?\d+)?/i,
	'boolean': /\b(?:true|false)\b/i,
	'punctuation': /[=\[\]{}]/,
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLCtHQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELE9BQU8sT0FBTyw2QkFBNkI7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0NBQXNDLGFBQWEsRUFBRTtBQUNyRDtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCIiwiZmlsZSI6IjE2MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5oY2wgPSB7XG5cdCdjb21tZW50JzogLyg/OlxcL1xcL3wjKS4qfFxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHQnaGVyZWRvYyc6IHtcblx0XHRwYXR0ZXJuOiAvPDwtPyhcXHcrKVtcXHNcXFNdKj9eXFxzKlxcMS9tLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ3N0cmluZydcblx0fSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyg/OnJlc291cmNlfGRhdGEpXFxzKyg/OlwiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIpKD89XFxzK1wiW1xcdy1dK1wiXFxzK3spL2ksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3R5cGUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhyZXNvdXJjZXxkYXRhfFxccyspKD86XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIikvaSxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oPzpwcm92aWRlcnxwcm92aXNpb25lcnx2YXJpYWJsZXxvdXRwdXR8bW9kdWxlfGJhY2tlbmQpXFxzKyg/OltcXHctXSt8XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIilcXHMrKD89eykvaSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQndHlwZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKHByb3ZpZGVyfHByb3Zpc2lvbmVyfHZhcmlhYmxlfG91dHB1dHxtb2R1bGV8YmFja2VuZClcXHMrKD86W1xcdy1dK3xcIig/OlxcXFxbXFxzXFxTXXxbXlxcXFxcIl0pKlwiKVxccysvaSxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC9bXFx3LV0rKD89XFxzK3spL1xuXHRdLFxuXHQncHJvcGVydHknOiBbXG5cdFx0L1tcXHctXFwuXSsoPz1cXHMqPSg/IT0pKS8sXG5cdFx0L1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkrXCIoPz1cXHMqWzo9XSkvLFxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9cIig/OlteXFxcXCRcIl18XFxcXFtcXHNcXFNdfFxcJCg/Oig/PVwiKXxcXCQrfFteXCIke10pfFxcJFxceyg/Oltee31cIl18XCIoPzpbXlxcXFxcIl18XFxcXFtcXHNcXFNdKSpcIikqXFx9KSpcIi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXnxbXiRdKVxcJFxceyg/Oltee31cIl18XCIoPzpbXlxcXFxcIl18XFxcXFtcXHNcXFNdKSpcIikqXFx9Lyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3R5cGUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYig/OnRlcnJhZm9ybXx2YXJ8c2VsZnxjb3VudHxtb2R1bGV8cGF0aHxkYXRhfGxvY2FsKVxcYlxcLilbXFx3XFwqXSsvaSxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXFxiKD86dGVycmFmb3JtfHZhcnxzZWxmfGNvdW50fG1vZHVsZXxwYXRofGRhdGF8bG9jYWwpXFxiL2ksXG5cdFx0XHRcdFx0J2Z1bmN0aW9uJzogL1xcdysoPz1cXCgpLyxcblx0XHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIvLFxuXHRcdFx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnxcXGJcXGQrXFwuP1xcZCooPzplWystXT9cXGQrKT8vaSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWyFcXCQjJSYnKCkqKywuXFwvOzw9PkBcXFtcXFxcXFxdXmB7fH1+PzpdLyxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH0sXG5cdCdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8XFxiXFxkK1xcLj9cXGQqKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiL2ksXG5cdCdwdW5jdHVhdGlvbic6IC9bPVxcW1xcXXt9XS8sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==