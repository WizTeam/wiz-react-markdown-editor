(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/prismjs/components/prism-ada.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ada.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.ada = {
	'comment': /--.*/,
	'string': /"(?:""|[^"\r\f\n])*"/i,
	'number': [
		{
			pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
		},
		{
			pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
		}
	],
	'attr-name': /\b'\w+/i,
	'keyword': /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
	'boolean': /\b(?:true|false)\b/i,
	'operator': /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
	'punctuation': /\.\.?|[,;():]/,
	'char': /'.'/,
	'variable': /\b[a-z](?:[_a-z\d])*\b/i
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFkYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsRSIsImZpbGUiOiI3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmFkYSA9IHtcblx0J2NvbW1lbnQnOiAvLS0uKi8sXG5cdCdzdHJpbmcnOiAvXCIoPzpcIlwifFteXCJcXHJcXGZcXG5dKSpcIi9pLFxuXHQnbnVtYmVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cXGJcXGQoPzpfP1xcZCkqI1tcXGRBLUZdKD86Xz9bXFxkQS1GXSkqKD86XFwuW1xcZEEtRl0oPzpfP1tcXGRBLUZdKSopPyMoPzpFWystXT9cXGQoPzpfP1xcZCkqKT8vaVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYlxcZCg/Ol8/XFxkKSooPzpcXC5cXGQoPzpfP1xcZCkqKT8oPzpFWystXT9cXGQoPzpfP1xcZCkqKT9cXGIvaVxuXHRcdH1cblx0XSxcblx0J2F0dHItbmFtZSc6IC9cXGInXFx3Ky9pLFxuXHQna2V5d29yZCc6IC9cXGIoPzphYm9ydHxhYnN8YWJzdHJhY3R8YWNjZXB0fGFjY2Vzc3xhbGlhc2VkfGFsbHxhbmR8YXJyYXl8YXR8YmVnaW58Ym9keXxjYXNlfGNvbnN0YW50fGRlY2xhcmV8ZGVsYXl8ZGVsdGF8ZGlnaXRzfGRvfGVsc2V8bmV3fHJldHVybnxlbHNpZnxlbmR8ZW50cnl8ZXhjZXB0aW9ufGV4aXR8Zm9yfGZ1bmN0aW9ufGdlbmVyaWN8Z290b3xpZnxpbnxpbnRlcmZhY2V8aXN8bGltaXRlZHxsb29wfG1vZHxub3R8bnVsbHxvZnxvdGhlcnN8b3V0fG92ZXJyaWRpbmd8cGFja2FnZXxwcmFnbWF8cHJpdmF0ZXxwcm9jZWR1cmV8cHJvdGVjdGVkfHJhaXNlfHJhbmdlfHJlY29yZHxyZW18cmVuYW1lc3xyZXF1ZXVlfHJldmVyc2V8c2VsZWN0fHNlcGFyYXRlfHNvbWV8c3VidHlwZXxzeW5jaHJvbml6ZWR8dGFnZ2VkfHRhc2t8dGVybWluYXRlfHRoZW58dHlwZXx1bnRpbHx1c2V8d2hlbnx3aGlsZXx3aXRofHhvcilcXGIvaSxcblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvaSxcblx0J29wZXJhdG9yJzogLzxbPT5dP3w+PT98PT4/fDo9fFxcLz0/fFxcKlxcKj98WyYrLV0vLFxuXHQncHVuY3R1YXRpb24nOiAvXFwuXFwuP3xbLDsoKTpdLyxcblx0J2NoYXInOiAvJy4nLyxcblx0J3ZhcmlhYmxlJzogL1xcYlthLXpdKD86W19hLXpcXGRdKSpcXGIvaVxufTsiXSwic291cmNlUm9vdCI6IiJ9