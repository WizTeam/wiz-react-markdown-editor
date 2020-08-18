(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/prismjs/components/prism-d.js":
/*!****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-d.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.d = Prism.languages.extend('clike', {
	'comment': [
		{
			// Shebang
			pattern: /^\s*#!.+/,
			greedy: true
		},
		{
			pattern: RegExp(/(^|[^\\])/.source + '(?:' + [
				// /+ comment +/
				// Allow one level of nesting
				/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,
				// // comment
				/\/\/.*/.source,
				// /* comment */
				/\/\*[\s\S]*?\*\//.source
			].join('|') + ')'),
			lookbehind: true,
			greedy: true
		}
	],
	'string': [
		{
			pattern: RegExp([
				// r"", x""
				/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,

				// q"[]", q"()", q"<>", q"{}"
				/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,

				// q"IDENT
				// ...
				// IDENT"
				/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,

				// q"//", q"||", etc.
				/\bq"(.)[\s\S]*?\2"/.source,

				// Characters
				// 'a', '\\', '\n', '\xFF', '\377', '\uFFFF', '\U0010FFFF', '\quot'
				/'(?:\\(?:\W|\w+)|[^\\])'/.source,

				/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source
			].join('|'), 'm'),
			greedy: true
		},
		{
			pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
			greedy: true,
			alias: 'token-string'
		}
	],

	'number': [
		// The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator
		// Hexadecimal numbers must be handled separately to avoid problems with exponent "e"
		/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,
		{
			pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
			lookbehind: true
		}
	],

	// In order: $, keywords and special tokens, globally defined symbols
	'keyword': /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
	'operator': /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
});

Prism.languages.insertBefore('d', 'keyword', {
	'property': /\B@\w*/
});

Prism.languages.insertBefore('d', 'function', {
	'register': {
		// Iasm registers
		pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
		alias: 'variable'
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQyxtREFBbUQsVUFBVTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Ijg1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0Ly8gU2hlYmFuZ1xuXHRcdFx0cGF0dGVybjogL15cXHMqIyEuKy8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKF58W15cXFxcXSkvLnNvdXJjZSArICcoPzonICsgW1xuXHRcdFx0XHQvLyAvKyBjb21tZW50ICsvXG5cdFx0XHRcdC8vIEFsbG93IG9uZSBsZXZlbCBvZiBuZXN0aW5nXG5cdFx0XHRcdC9cXC9cXCsoPzpcXC9cXCsoPzpbXitdfFxcKyg/IVxcLykpKlxcK1xcL3woPyFcXC9cXCspW1xcc1xcU10pKj9cXCtcXC8vLnNvdXJjZSxcblx0XHRcdFx0Ly8gLy8gY29tbWVudFxuXHRcdFx0XHQvXFwvXFwvLiovLnNvdXJjZSxcblx0XHRcdFx0Ly8gLyogY29tbWVudCAqL1xuXHRcdFx0XHQvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8uc291cmNlXG5cdFx0XHRdLmpvaW4oJ3wnKSArICcpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChbXG5cdFx0XHRcdC8vIHJcIlwiLCB4XCJcIlxuXHRcdFx0XHQvXFxiW3J4XVwiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCJbY3dkXT8vLnNvdXJjZSxcblxuXHRcdFx0XHQvLyBxXCJbXVwiLCBxXCIoKVwiLCBxXCI8PlwiLCBxXCJ7fVwiXG5cdFx0XHRcdC9cXGJxXCIoPzpcXFtbXFxzXFxTXSo/XFxdfFxcKFtcXHNcXFNdKj9cXCl8PFtcXHNcXFNdKj8+fFxce1tcXHNcXFNdKj9cXH0pXCIvLnNvdXJjZSxcblxuXHRcdFx0XHQvLyBxXCJJREVOVFxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gSURFTlRcIlxuXHRcdFx0XHQvXFxicVwiKCg/IVxcZClcXHcrKSRbXFxzXFxTXSo/XlxcMVwiLy5zb3VyY2UsXG5cblx0XHRcdFx0Ly8gcVwiLy9cIiwgcVwifHxcIiwgZXRjLlxuXHRcdFx0XHQvXFxicVwiKC4pW1xcc1xcU10qP1xcMlwiLy5zb3VyY2UsXG5cblx0XHRcdFx0Ly8gQ2hhcmFjdGVyc1xuXHRcdFx0XHQvLyAnYScsICdcXFxcJywgJ1xcbicsICdcXHhGRicsICdcXDM3NycsICdcXHVGRkZGJywgJ1xcVTAwMTBGRkZGJywgJ1xccXVvdCdcblx0XHRcdFx0LycoPzpcXFxcKD86XFxXfFxcdyspfFteXFxcXF0pJy8uc291cmNlLFxuXG5cdFx0XHRcdC8oW1wiYF0pKD86XFxcXFtcXHNcXFNdfCg/IVxcMylbXlxcXFxdKSpcXDNbY3dkXT8vLnNvdXJjZVxuXHRcdFx0XS5qb2luKCd8JyksICdtJyksXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cXGJxXFx7KD86XFx7W157fV0qXFx9fFtee31dKSpcXH0vLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICd0b2tlbi1zdHJpbmcnXG5cdFx0fVxuXHRdLFxuXG5cdCdudW1iZXInOiBbXG5cdFx0Ly8gVGhlIGxvb2tiZWhpbmQgYW5kIHRoZSBuZWdhdGl2ZSBsb29rLWFoZWFkIHRyeSB0byBwcmV2ZW50IGJhZCBoaWdobGlnaHRpbmcgb2YgdGhlIC4uIG9wZXJhdG9yXG5cdFx0Ly8gSGV4YWRlY2ltYWwgbnVtYmVycyBtdXN0IGJlIGhhbmRsZWQgc2VwYXJhdGVseSB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIGV4cG9uZW50IFwiZVwiXG5cdFx0L1xcYjB4XFwuP1thLWZcXGRfXSsoPzooPyFcXC5cXC4pXFwuW2EtZlxcZF9dKik/KD86cFsrLV0/W2EtZlxcZF9dKyk/W3VsZmldKi9pLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XFwuXFwuKT8pKD86XFxiMGJcXC4/fFxcYnxcXC4pXFxkW1xcZF9dKig/Oig/IVxcLlxcLilcXC5bXFxkX10qKT8oPzplWystXT9cXGRbXFxkX10qKT9bdWxmaV0qL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXG5cdC8vIEluIG9yZGVyOiAkLCBrZXl3b3JkcyBhbmQgc3BlY2lhbCB0b2tlbnMsIGdsb2JhbGx5IGRlZmluZWQgc3ltYm9sc1xuXHQna2V5d29yZCc6IC9cXCR8XFxiKD86YWJzdHJhY3R8YWxpYXN8YWxpZ258YXNtfGFzc2VydHxhdXRvfGJvZHl8Ym9vbHxicmVha3xieXRlfGNhc2V8Y2FzdHxjYXRjaHxjZG91YmxlfGNlbnR8Y2Zsb2F0fGNoYXJ8Y2xhc3N8Y29uc3R8Y29udGludWV8Y3JlYWx8ZGNoYXJ8ZGVidWd8ZGVmYXVsdHxkZWxlZ2F0ZXxkZWxldGV8ZGVwcmVjYXRlZHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4cG9ydHxleHRlcm58ZmFsc2V8ZmluYWx8ZmluYWxseXxmbG9hdHxmb3J8Zm9yZWFjaHxmb3JlYWNoX3JldmVyc2V8ZnVuY3Rpb258Z290b3xpZG91YmxlfGlmfGlmbG9hdHxpbW11dGFibGV8aW1wb3J0fGlub3V0fGludHxpbnRlcmZhY2V8aW52YXJpYW50fGlyZWFsfGxhenl8bG9uZ3xtYWNyb3xtaXhpbnxtb2R1bGV8bmV3fG5vdGhyb3d8bnVsbHxvdXR8b3ZlcnJpZGV8cGFja2FnZXxwcmFnbWF8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHB1cmV8cmVhbHxyZWZ8cmV0dXJufHNjb3BlfHNoYXJlZHxzaG9ydHxzdGF0aWN8c3RydWN0fHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGVtcGxhdGV8dGhpc3x0aHJvd3x0cnVlfHRyeXx0eXBlZGVmfHR5cGVpZHx0eXBlb2Z8dWJ5dGV8dWNlbnR8dWludHx1bG9uZ3x1bmlvbnx1bml0dGVzdHx1c2hvcnR8dmVyc2lvbnx2b2lkfHZvbGF0aWxlfHdjaGFyfHdoaWxlfHdpdGh8X18oPzooPzpGSUxFfE1PRFVMRXxMSU5FfEZVTkNUSU9OfFBSRVRUWV9GVU5DVElPTnxEQVRFfEVPRnxUSU1FfFRJTUVTVEFNUHxWRU5ET1J8VkVSU0lPTilfX3xnc2hhcmVkfHRyYWl0c3x2ZWN0b3J8cGFyYW1ldGVycyl8c3RyaW5nfHdzdHJpbmd8ZHN0cmluZ3xzaXplX3R8cHRyZGlmZl90KVxcYi8sXG5cdCdvcGVyYXRvcic6IC9cXHxbfD1dP3wmWyY9XT98XFwrWys9XT98LVstPV0/fFxcLj9cXC5cXC58PVs+PV0/fCEoPzppW25zXVxcYnw8Pj89P3w+PT98PSk/fFxcYmlbbnNdXFxifCg/OjxbPD5dP3w+Pj8+P3xcXF5cXF58WypcXC8lXn5dKT0/L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2QnLCAna2V5d29yZCcsIHtcblx0J3Byb3BlcnR5JzogL1xcQkBcXHcqL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2QnLCAnZnVuY3Rpb24nLCB7XG5cdCdyZWdpc3Rlcic6IHtcblx0XHQvLyBJYXNtIHJlZ2lzdGVyc1xuXHRcdHBhdHRlcm46IC9cXGIoPzpbQUJDRF1bTEhYXXxFW0FCQ0RdWHxFPyg/OkJQfFNQfERJfFNJKXxbRUNTREdGXVN8Q1JbMDIzNF18RFJbMDEyMzY3XXxUUlszLTddfFg/TU1bMC03XXxSW0FCQ0RdWHxbQlNdUEx8UltCU11QfFtEU11JTHxSW0RTXUl8Uig/Ols4OV18MVswLTVdKVtCV0RdP3xYTU0oPzpbODldfDFbMC01XSl8WU1NKD86MVswLTVdfFxcZCkpXFxifFxcYlNUKD86XFwoWzAtN11cXCl8XFxiKS8sXG5cdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9