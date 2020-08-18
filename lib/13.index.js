(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/prismjs/components/prism-antlr4.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-antlr4.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.antlr4 = {
	'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
	'string': {
		pattern: /'(?:\\.|[^\\'\r\n])*'/,
		greedy: true
	},
	'character-class': {
		pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
		greedy: true,
		alias: 'regex',
		inside: {
			'range': {
				pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
				lookbehind: true,
				alias: 'punctuation'
			},
			'escape': /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
			'punctuation': /[\[\]]/
		}
	},
	'action': {
		pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
		greedy: true,
		inside: {
			'content': {
				// this might be C, C++, Python, Java, C#, or any other language ANTLR4 compiles to
				pattern: /(\{)[\s\S]+(?=\})/,
				lookbehind: true
			},
			'punctuation': /[{}]/
		}
	},
	'command': {
		pattern: /(->\s*)(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
		lookbehind: true,
		inside: {
			'function': /\b\w+(?=\s*(?:[,(]|$))/,
			'punctuation': /[,()]/
		}
	},
	'annotation': {
		pattern: /@\w+(?:::\w+)*/,
		alias: 'keyword'
	},
	'label': {
		pattern: /#[ \t]*\w+/,
		alias: 'punctuation'
	},
	'keyword': /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
	'definition': [
		{
			pattern: /\b[a-z]\w*(?=\s*:)/,
			alias: ['rule', 'class-name']
		},
		{
			pattern: /\b[A-Z]\w*(?=\s*:)/,
			alias: ['token', 'constant']
		},
	],
	'constant': /\b[A-Z][A-Z_]*\b/,
	'operator': /\.\.|->|[|~]|[*+?]\??/,
	'punctuation': /[;:()=]/
};

Prism.languages.g4 = Prism.languages.antlr4;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFudGxyNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQ0FBa0MsRUFBRSxHQUFHLGFBQWEsUUFBUSxTQUFTO0FBQ3JFO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxjQUFjLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0EsSUFBSTtBQUNKLHNCQUFzQjtBQUN0QjtBQUNBLEVBQUU7QUFDRjtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBIiwiZmlsZSI6IjEzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmFudGxyNCA9IHtcblx0J2NvbW1lbnQnOiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLycoPzpcXFxcLnxbXlxcXFwnXFxyXFxuXSkqJy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjaGFyYWN0ZXItY2xhc3MnOiB7XG5cdFx0cGF0dGVybjogL1xcWyg/OlxcXFwufFteXFxcXFxcXVxcclxcbl0pKlxcXS8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAncmVnZXgnLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JhbmdlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFteW118KD86XnxbXlxcXFxdKSg/OlxcXFxcXFxcKSpcXFxcXFxbKS0oPyFcXF0pLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHRcdH0sXG5cdFx0XHQnZXNjYXBlJzogL1xcXFwoPzp1KD86W2EtZkEtRlxcZF17NH18XFx7W2EtZkEtRlxcZF0rXFx9KXxbcFBdXFx7Wz1cXHctXStcXH18W15cXHJcXG51cFBdKS8sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvW1xcW1xcXV0vXG5cdFx0fVxuXHR9LFxuXHQnYWN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC9cXHsoPzpbXnt9XXxcXHsoPzpbXnt9XXxcXHsoPzpbXnt9XXxcXHtbXnt9XSpcXH0pKlxcfSkqXFx9KSpcXH0vLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHQvLyB0aGlzIG1pZ2h0IGJlIEMsIEMrKywgUHl0aG9uLCBKYXZhLCBDIywgb3IgYW55IG90aGVyIGxhbmd1YWdlIEFOVExSNCBjb21waWxlcyB0b1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxceylbXFxzXFxTXSsoPz1cXH0pLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9be31dL1xuXHRcdH1cblx0fSxcblx0J2NvbW1hbmQnOiB7XG5cdFx0cGF0dGVybjogLygtPlxccyopKD86XFxzKig/OixcXHMqKT9cXGJbYS16XVxcdyooPzpcXHMqXFwoW14oKVxcclxcbl0qXFwpKT8pKyg/PVxccyo7KS9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnZnVuY3Rpb24nOiAvXFxiXFx3Kyg/PVxccyooPzpbLChdfCQpKS8sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWywoKV0vXG5cdFx0fVxuXHR9LFxuXHQnYW5ub3RhdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvQFxcdysoPzo6OlxcdyspKi8sXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHQnbGFiZWwnOiB7XG5cdFx0cGF0dGVybjogLyNbIFxcdF0qXFx3Ky8sXG5cdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86Y2F0Y2h8Y2hhbm5lbHN8ZmluYWxseXxmcmFnbWVudHxncmFtbWFyfGltcG9ydHxsZXhlcnxsb2NhbHN8bW9kZXxvcHRpb25zfHBhcnNlcnxyZXR1cm5zfHRocm93c3x0b2tlbnMpXFxiLyxcblx0J2RlZmluaXRpb24nOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYlthLXpdXFx3Kig/PVxccyo6KS8sXG5cdFx0XHRhbGlhczogWydydWxlJywgJ2NsYXNzLW5hbWUnXVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYltBLVpdXFx3Kig/PVxccyo6KS8sXG5cdFx0XHRhbGlhczogWyd0b2tlbicsICdjb25zdGFudCddXG5cdFx0fSxcblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdW0EtWl9dKlxcYi8sXG5cdCdvcGVyYXRvcic6IC9cXC5cXC58LT58W3x+XXxbKis/XVxcPz8vLFxuXHQncHVuY3R1YXRpb24nOiAvWzs6KCk9XS9cbn07XG5cblByaXNtLmxhbmd1YWdlcy5nNCA9IFByaXNtLmxhbmd1YWdlcy5hbnRscjQ7XG4iXSwic291cmNlUm9vdCI6IiJ9