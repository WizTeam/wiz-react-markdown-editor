(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/prismjs/components/prism-batch.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-batch.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	var variable = /%%?[~:\w]+%?|!\S+!/;
	var parameter = {
		pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
		alias: 'attr-name',
		inside: {
			'punctuation': /:/
		}
	};
	var string = /"(?:[\\"]"|[^"])*"(?!")/;
	var number = /(?:\b|-)\d+\b/;

	Prism.languages.batch = {
		'comment': [
			/^::.*/m,
			{
				pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
				lookbehind: true
			}
		],
		'label': {
			pattern: /^:.*/m,
			alias: 'property'
		},
		'command': [
			{
				// FOR command
				pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
				lookbehind: true,
				inside: {
					'keyword': /^for\b|\b(?:in|do)\b/i,
					'string': string,
					'parameter': parameter,
					'variable': variable,
					'number': number,
					'punctuation': /[()',]/
				}
			},
			{
				// IF command
				pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
				lookbehind: true,
				inside: {
					'keyword': /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
					'string': string,
					'parameter': parameter,
					'variable': variable,
					'number': number,
					'operator': /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
				}
			},
			{
				// ELSE command
				pattern: /((?:^|[&()])[ \t]*)else\b/im,
				lookbehind: true,
				inside: {
					'keyword': /^else\b/i
				}
			},
			{
				// SET command
				pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
				lookbehind: true,
				inside: {
					'keyword': /^set\b/i,
					'string': string,
					'parameter': parameter,
					'variable': [
						variable,
						/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/
					],
					'number': number,
					'operator': /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
					'punctuation': /[()',]/
				}
			},
			{
				// Other commands
				pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
				lookbehind: true,
				inside: {
					'keyword': /^\w+\b/i,
					'string': string,
					'parameter': parameter,
					'label': {
						pattern: /(^\s*):\S+/m,
						lookbehind: true,
						alias: 'property'
					},
					'variable': variable,
					'number': number,
					'operator': /\^/
				}
			}
		],
		'operator': /[&@]/,
		'punctuation': /[()']/
	};
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiNDEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cdHZhciB2YXJpYWJsZSA9IC8lJT9bfjpcXHddKyU/fCFcXFMrIS87XG5cdHZhciBwYXJhbWV0ZXIgPSB7XG5cdFx0cGF0dGVybjogL1xcL1thLXo/XSsoPz1bIDpdfCQpOj98LVthLXpdXFxifC0tW2Etei1dK1xcYi9pbSxcblx0XHRhbGlhczogJ2F0dHItbmFtZScsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvOi9cblx0XHR9XG5cdH07XG5cdHZhciBzdHJpbmcgPSAvXCIoPzpbXFxcXFwiXVwifFteXCJdKSpcIig/IVwiKS87XG5cdHZhciBudW1iZXIgPSAvKD86XFxifC0pXFxkK1xcYi87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmJhdGNoID0ge1xuXHRcdCdjb21tZW50JzogW1xuXHRcdFx0L146Oi4qL20sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopcmVtXFxiKD86W15eJilcXHJcXG5dfFxcXig/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2xhYmVsJzoge1xuXHRcdFx0cGF0dGVybjogL146LiovbSxcblx0XHRcdGFsaWFzOiAncHJvcGVydHknXG5cdFx0fSxcblx0XHQnY29tbWFuZCc6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gRk9SIGNvbW1hbmRcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFsmKF0pWyBcXHRdKilmb3IoPzogP1xcL1thLXo/XSg/OlsgOl0oPzpcIlteXCJdKlwifFxcUyspKT8pKiBcXFMrIGluIFxcKFteKV0rXFwpIGRvL2ltLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQna2V5d29yZCc6IC9eZm9yXFxifFxcYig/OmlufGRvKVxcYi9pLFxuXHRcdFx0XHRcdCdzdHJpbmcnOiBzdHJpbmcsXG5cdFx0XHRcdFx0J3BhcmFtZXRlcic6IHBhcmFtZXRlcixcblx0XHRcdFx0XHQndmFyaWFibGUnOiB2YXJpYWJsZSxcblx0XHRcdFx0XHQnbnVtYmVyJzogbnVtYmVyLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bKCknLF0vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIElGIGNvbW1hbmRcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFsmKF0pWyBcXHRdKilpZig/OiA/XFwvW2Etej9dKD86WyA6XSg/OlwiW15cIl0qXCJ8XFxTKykpPykqICg/Om5vdCApPyg/OmNtZGV4dHZlcnNpb24gXFxkK3xkZWZpbmVkIFxcdyt8ZXJyb3JsZXZlbCBcXGQrfGV4aXN0IFxcUyt8KD86XCJbXlwiXSpcInxcXFMrKT8oPzo9PXwgKD86ZXF1fG5lcXxsc3N8bGVxfGd0cnxnZXEpICkoPzpcIlteXCJdKlwifFxcUyspKS9pbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXmlmXFxifFxcYig/Om5vdHxjbWRleHR2ZXJzaW9ufGRlZmluZWR8ZXJyb3JsZXZlbHxleGlzdClcXGIvaSxcblx0XHRcdFx0XHQnc3RyaW5nJzogc3RyaW5nLFxuXHRcdFx0XHRcdCdwYXJhbWV0ZXInOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0J3ZhcmlhYmxlJzogdmFyaWFibGUsXG5cdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvXFxefD09fFxcYig/OmVxdXxuZXF8bHNzfGxlcXxndHJ8Z2VxKVxcYi9pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEVMU0UgY29tbWFuZFxuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58WyYoKV0pWyBcXHRdKillbHNlXFxiL2ltLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQna2V5d29yZCc6IC9eZWxzZVxcYi9pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFNFVCBjb21tYW5kXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopc2V0KD86ID9cXC9bYS16XSg/OlsgOl0oPzpcIlteXCJdKlwifFxcUyspKT8pKiAoPzpbXl4mKVxcclxcbl18XFxeKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQna2V5d29yZCc6IC9ec2V0XFxiL2ksXG5cdFx0XHRcdFx0J3N0cmluZyc6IHN0cmluZyxcblx0XHRcdFx0XHQncGFyYW1ldGVyJzogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdCd2YXJpYWJsZSc6IFtcblx0XHRcdFx0XHRcdHZhcmlhYmxlLFxuXHRcdFx0XHRcdFx0L1xcdysoPz0oPzpbKlxcLyUrXFwtJl58XXw8PHw+Pik/PSkvXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHQnbnVtYmVyJzogbnVtYmVyLFxuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC9bKlxcLyUrXFwtJl58XT0/fDw8PT98Pj49P3xbIX5fPV0vLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bKCknLF0vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIE90aGVyIGNvbW1hbmRzXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSpAPylcXHcrXFxiKD86XCIoPzpbXFxcXFwiXVwifFteXCJdKSpcIig/IVwiKXxbXlwiXiYpXFxyXFxuXXxcXF4oPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdrZXl3b3JkJzogL15cXHcrXFxiL2ksXG5cdFx0XHRcdFx0J3N0cmluZyc6IHN0cmluZyxcblx0XHRcdFx0XHQncGFyYW1ldGVyJzogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdCdsYWJlbCc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8oXlxccyopOlxcUysvbSxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3ZhcmlhYmxlJzogdmFyaWFibGUsXG5cdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvXFxeL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnb3BlcmF0b3InOiAvWyZAXS8sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKSddL1xuXHR9O1xufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==