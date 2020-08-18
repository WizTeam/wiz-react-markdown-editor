(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ "./node_modules/prismjs/components/prism-iecst.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-iecst.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.iecst = {
	'comment': [
		{
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,
			lookbehind: true,
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true,
		},
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true,
	},
	'class-name': /\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:GLOBAL|INPUT|PUTPUT|IN_OUT|ACCESS|TEMP|EXTERNAL|CONFIG)|VAR|METHOD|PROPERTY)\b/i,
	'keyword': /\b(?:(?:END_)?(?:IF|WHILE|REPEAT|CASE|FOR)|ELSE|FROM|THEN|ELSIF|DO|TO|BY|PRIVATE|PUBLIC|PROTECTED|CONSTANT|RETURN|EXIT|CONTINUE|GOTO|JMP|AT|RETAIN|NON_RETAIN|TASK|WITH|UNTIL|USING|EXTENDS|IMPLEMENTS|GET|SET|__TRY|__CATCH|__FINALLY|__ENDTRY)\b/,
	'variable': /\b(?:AT|BOOL|BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT|L?REAL|TIME(?:_OF_DAY)?|TOD|DT|DATE(?:_AND_TIME)?|STRING|ARRAY|ANY|POINTER)\b/,
	'symbol': /%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,
	'number': /\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:T|D|DT|TOD)#[\d_shmd:]*|\b[A-Z]*\#[\d.,_]*|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'boolean': /\b(?:TRUE|FALSE|NULL)\b/,
	'function': /\w+(?=\()/,
	'operator': /(?:S?R?:?=>?|&&?|\*\*?|<=?|>=?|[-:^/+])|\b(?:OR|AND|MOD|NOT|XOR|LE|GE|EQ|NE|GE|LT)\b/,
	'punctuation': /[();]/,
	'type': {
		'pattern': /#/,
		'alias': 'selector',
	},
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWllY3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGIiwiZmlsZSI6IjE3NS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5pZWNzdCA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKXxcXChcXCpbXFxzXFxTXSo/KD86XFwqXFwpfCQpfFxce1tcXHNcXFNdKj8oPzpcXH18JCkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IC9cXGIoPzpFTkRfKT8oPzpQUk9HUkFNfENPTkZJR1VSQVRJT058SU5URVJGQUNFfEZVTkNUSU9OX0JMT0NLfEZVTkNUSU9OfEFDVElPTnxUUkFOU0lUSU9OfFRZUEV8U1RSVUNUfCg/OklOSVRJQUxfKT9TVEVQfE5BTUVTUEFDRXxMSUJSQVJZfENIQU5ORUx8Rk9MREVSfFJFU09VUkNFfFZBUl8oPzpHTE9CQUx8SU5QVVR8UFVUUFVUfElOX09VVHxBQ0NFU1N8VEVNUHxFWFRFUk5BTHxDT05GSUcpfFZBUnxNRVRIT0R8UFJPUEVSVFkpXFxiL2ksXG5cdCdrZXl3b3JkJzogL1xcYig/Oig/OkVORF8pPyg/OklGfFdISUxFfFJFUEVBVHxDQVNFfEZPUil8RUxTRXxGUk9NfFRIRU58RUxTSUZ8RE98VE98Qll8UFJJVkFURXxQVUJMSUN8UFJPVEVDVEVEfENPTlNUQU5UfFJFVFVSTnxFWElUfENPTlRJTlVFfEdPVE98Sk1QfEFUfFJFVEFJTnxOT05fUkVUQUlOfFRBU0t8V0lUSHxVTlRJTHxVU0lOR3xFWFRFTkRTfElNUExFTUVOVFN8R0VUfFNFVHxfX1RSWXxfX0NBVENIfF9fRklOQUxMWXxfX0VORFRSWSlcXGIvLFxuXHQndmFyaWFibGUnOiAvXFxiKD86QVR8Qk9PTHxCWVRFfCg/OkR8TCk/V09SRHxVPyg/OlN8RHxMKT9JTlR8TD9SRUFMfFRJTUUoPzpfT0ZfREFZKT98VE9EfERUfERBVEUoPzpfQU5EX1RJTUUpP3xTVFJJTkd8QVJSQVl8QU5ZfFBPSU5URVIpXFxiLyxcblx0J3N5bWJvbCc6IC8lW0lRTV1bWEJXRExdW1xcZC5dKnwlW0lRXVtcXGQuXSovLFxuXHQnbnVtYmVyJzogL1xcYig/OjE2I1tcXGRhLWZdK3wyI1swMV9dK3wweFtcXGRhLWZdKylcXGJ8XFxiKD86VHxEfERUfFRPRCkjW1xcZF9zaG1kOl0qfFxcYltBLVpdKlxcI1tcXGQuLF9dKnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J2Jvb2xlYW4nOiAvXFxiKD86VFJVRXxGQUxTRXxOVUxMKVxcYi8sXG5cdCdmdW5jdGlvbic6IC9cXHcrKD89XFwoKS8sXG5cdCdvcGVyYXRvcic6IC8oPzpTP1I/Oj89Pj98JiY/fFxcKlxcKj98PD0/fD49P3xbLTpeLytdKXxcXGIoPzpPUnxBTkR8TU9EfE5PVHxYT1J8TEV8R0V8RVF8TkV8R0V8TFQpXFxiLyxcblx0J3B1bmN0dWF0aW9uJzogL1soKTtdLyxcblx0J3R5cGUnOiB7XG5cdFx0J3BhdHRlcm4nOiAvIy8sXG5cdFx0J2FsaWFzJzogJ3NlbGVjdG9yJyxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9