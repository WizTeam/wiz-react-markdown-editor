(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/prismjs/components/prism-go.js":
/*!*****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-go.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.go = Prism.languages.extend('clike', {
	'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
	'boolean': /\b(?:_|iota|nil|true|false)\b/,
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
	'string': {
		pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
		greedy: true
	}
});
delete Prism.languages.go['class-name'];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6IjE0Ny5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5nbyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQna2V5d29yZCc6IC9cXGIoPzpicmVha3xjYXNlfGNoYW58Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkZWZlcnxlbHNlfGZhbGx0aHJvdWdofGZvcnxmdW5jfGdvKD86dG8pP3xpZnxpbXBvcnR8aW50ZXJmYWNlfG1hcHxwYWNrYWdlfHJhbmdlfHJldHVybnxzZWxlY3R8c3RydWN0fHN3aXRjaHx0eXBlfHZhcilcXGIvLFxuXHQnYnVpbHRpbic6IC9cXGIoPzpib29sfGJ5dGV8Y29tcGxleCg/OjY0fDEyOCl8ZXJyb3J8ZmxvYXQoPzozMnw2NCl8cnVuZXxzdHJpbmd8dT9pbnQoPzo4fDE2fDMyfDY0KT98dWludHB0cnxhcHBlbmR8Y2FwfGNsb3NlfGNvbXBsZXh8Y29weXxkZWxldGV8aW1hZ3xsZW58bWFrZXxuZXd8cGFuaWN8cHJpbnQoPzpsbik/fHJlYWx8cmVjb3ZlcilcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzpffGlvdGF8bmlsfHRydWV8ZmFsc2UpXFxiLyxcblx0J29wZXJhdG9yJzogL1sqXFwvJV4hPV09P3xcXCtbPStdP3wtWz0tXT98XFx8Wz18XT98Jig/Oj18JnxcXF49Pyk/fD4oPzo+PT98PSk/fDwoPzo8PT98PXwtKT98Oj18XFwuXFwuXFwuLyxcblx0J251bWJlcic6IC8oPzpcXGIweFthLWZcXGRdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWy0rXT9cXGQrKT8paT8vaSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH1cbn0pO1xuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5nb1snY2xhc3MtbmFtZSddO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==