(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[273],{

/***/ "./node_modules/prismjs/components/prism-nim.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-nim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.nim = {
	'comment': /#.*/,
	// Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)
	// Character literals are handled specifically to prevent issues with numeric type suffixes
	'string': {
		pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
		greedy: true
	},
	// The negative look ahead prevents wrong highlighting of the .. operator
	'number': /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
	'keyword': /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
	'function': {
		pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
		inside: {
			'operator': /\*$/
		}
	},
	// We don't want to highlight operators inside backticks
	'ignore': {
		pattern: /`[^`\r\n]+`/,
		inside: {
			'punctuation': /`/
		}
	},
	'operator': {
		// Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)
		// but allow the slice operator .. to take precedence over them
		// One can define his own operators in Nim so all combination of operators might be an operator.
		pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
		lookbehind: true
	},
	'punctuation': /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW5pbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0lBQXdJLEVBQUU7QUFDMUk7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxrRkFBa0YsSUFBSTtBQUN0RjtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQixtREFBbUQ7QUFDdkY7QUFDQSxFQUFFO0FBQ0Ysb0JBQW9CLFdBQVcsVUFBVTtBQUN6QyxFIiwiZmlsZSI6IjI3My5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5uaW0gPSB7XG5cdCdjb21tZW50JzogLyMuKi8sXG5cdC8vIERvdWJsZS1xdW90ZWQgc3RyaW5ncyBjYW4gYmUgcHJlZml4ZWQgYnkgYW4gaWRlbnRpZmllciAoR2VuZXJhbGl6ZWQgcmF3IHN0cmluZyBsaXRlcmFscylcblx0Ly8gQ2hhcmFjdGVyIGxpdGVyYWxzIGFyZSBoYW5kbGVkIHNwZWNpZmljYWxseSB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIG51bWVyaWMgdHlwZSBzdWZmaXhlc1xuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oPzooPzpcXGIoPyFcXGQpKD86XFx3fFxcXFx4WzgtOWEtZkEtRl1bMC05YS1mQS1GXSkrKT8oPzpcIlwiXCJbXFxzXFxTXSo/XCJcIlwiKD8hXCIpfFwiKD86XFxcXFtcXHNcXFNdfFwiXCJ8W15cIlxcXFxdKSpcIil8Jyg/OlxcXFwoPzpcXGQrfHhbXFxkYS1mQS1GXXsyfXwuKXxbXiddKScpLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gVGhlIG5lZ2F0aXZlIGxvb2sgYWhlYWQgcHJldmVudHMgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIHRoZSAuLiBvcGVyYXRvclxuXHQnbnVtYmVyJzogL1xcYig/OjBbeFhvT2JCXVtcXGRhLWZBLUZfXSt8XFxkW1xcZF9dKig/Oig/IVxcLlxcLilcXC5bXFxkX10qKT8oPzpbZUVdWystXT9cXGRbXFxkX10qKT8pKD86Jz9baXVmXVxcZCopPy8sXG5cdCdrZXl3b3JkJzogL1xcYig/OmFkZHJ8YXN8YXNtfGF0b21pY3xiaW5kfGJsb2NrfGJyZWFrfGNhc2V8Y2FzdHxjb25jZXB0fGNvbnN0fGNvbnRpbnVlfGNvbnZlcnRlcnxkZWZlcnxkaXNjYXJkfGRpc3RpbmN0fGRvfGVsaWZ8ZWxzZXxlbmR8ZW51bXxleGNlcHR8ZXhwb3J0fGZpbmFsbHl8Zm9yfGZyb218ZnVuY3xnZW5lcmljfGlmfGltcG9ydHxpbmNsdWRlfGludGVyZmFjZXxpdGVyYXRvcnxsZXR8bWFjcm98bWV0aG9kfG1peGlufG5pbHxvYmplY3R8b3V0fHByb2N8cHRyfHJhaXNlfHJlZnxyZXR1cm58c3RhdGljfHRlbXBsYXRlfHRyeXx0dXBsZXx0eXBlfHVzaW5nfHZhcnx3aGVufHdoaWxlfHdpdGh8d2l0aG91dHx5aWVsZClcXGIvLFxuXHQnZnVuY3Rpb24nOiB7XG5cdFx0cGF0dGVybjogLyg/Oig/IVxcZCkoPzpcXHd8XFxcXHhbOC05YS1mQS1GXVswLTlhLWZBLUZdKSt8YFteYFxcclxcbl0rYClcXCo/KD86XFxbW15cXF1dK1xcXSk/KD89XFxzKlxcKCkvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J29wZXJhdG9yJzogL1xcKiQvXG5cdFx0fVxuXHR9LFxuXHQvLyBXZSBkb24ndCB3YW50IHRvIGhpZ2hsaWdodCBvcGVyYXRvcnMgaW5zaWRlIGJhY2t0aWNrc1xuXHQnaWdub3JlJzoge1xuXHRcdHBhdHRlcm46IC9gW15gXFxyXFxuXStgLyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9gL1xuXHRcdH1cblx0fSxcblx0J29wZXJhdG9yJzoge1xuXHRcdC8vIExvb2sgYmVoaW5kIGFuZCBsb29rIGFoZWFkIHByZXZlbnQgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIHB1bmN0dWF0aW9ucyBbLiAuXSB7LiAufSAoLiAuKVxuXHRcdC8vIGJ1dCBhbGxvdyB0aGUgc2xpY2Ugb3BlcmF0b3IgLi4gdG8gdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlbVxuXHRcdC8vIE9uZSBjYW4gZGVmaW5lIGhpcyBvd24gb3BlcmF0b3JzIGluIE5pbSBzbyBhbGwgY29tYmluYXRpb24gb2Ygb3BlcmF0b3JzIG1pZ2h0IGJlIGFuIG9wZXJhdG9yLlxuXHRcdHBhdHRlcm46IC8oXnxbKHtcXFtdKD89XFwuXFwuKXwoPyFbKHtcXFtdXFwuKS4pKD86KD86Wz0rXFwtKlxcLzw+QCR+JiV8IT9eOlxcXFxdfFxcLlxcLnxcXC4oPyFbKX1cXF1dKSkrfFxcYig/OmFuZHxkaXZ8b2Z8b3J8aW58aXN8aXNub3R8bW9kfG5vdHxub3RpbnxzaGx8c2hyfHhvcilcXGIpL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQncHVuY3R1YXRpb24nOiAvWyh7XFxbXVxcLnxcXC5bKX1cXF1dfFtgKCl7fVxcW1xcXSw6XS9cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==