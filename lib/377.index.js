(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[377],{

/***/ "./node_modules/prismjs/components/prism-solidity.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-solidity.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.solidity = Prism.languages.extend('clike', {
	'class-name': {
		pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
		lookbehind: true
	},
	'keyword': /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
	'operator': /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/
});

Prism.languages.insertBefore('solidity', 'keyword', {
	'builtin': /\b(?:address|bool|string|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|byte|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
});

Prism.languages.insertBefore('solidity', 'number', {
	'version': {
		pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
		lookbehind: true,
		alias: 'number',
	}
});

Prism.languages.sol = Prism.languages.solidity;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNvbGlkaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMzc3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnNvbGlkaXR5ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y29udHJhY3R8ZW51bXxpbnRlcmZhY2V8bGlicmFyeXxuZXd8c3RydWN0fHVzaW5nKVxccyspKD8hXFxkKVtcXHckXSsvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86X3xhbm9ueW1vdXN8YXN8YXNzZW1ibHl8YXNzZXJ0fGJyZWFrfGNhbGxkYXRhfGNhc2V8Y29uc3RhbnR8Y29uc3RydWN0b3J8Y29udGludWV8Y29udHJhY3R8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbWl0fGVudW18ZXZlbnR8ZXh0ZXJuYWx8Zm9yfGZyb218ZnVuY3Rpb258aWZ8aW1wb3J0fGluZGV4ZWR8aW5oZXJpdGVkfGludGVyZmFjZXxpbnRlcm5hbHxpc3xsZXR8bGlicmFyeXxtYXBwaW5nfG1lbW9yeXxtb2RpZmllcnxuZXd8cGF5YWJsZXxwcmFnbWF8cHJpdmF0ZXxwdWJsaWN8cHVyZXxyZXF1aXJlfHJldHVybnM/fHJldmVydHxzZWxmZGVzdHJ1Y3R8c29saWRpdHl8c3RvcmFnZXxzdHJ1Y3R8c3VpY2lkZXxzd2l0Y2h8dGhpc3x0aHJvd3x1c2luZ3x2YXJ8dmlld3x3aGlsZSlcXGIvLFxuXHQnb3BlcmF0b3InOiAvPT58LT58Oj18PTp8XFwqXFwqfFxcK1xcK3wtLXxcXHxcXHx8JiZ8PDw9P3w+Pj0/fFstKyovJV4mfDw+IT1dPT98W34/XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzb2xpZGl0eScsICdrZXl3b3JkJywge1xuXHQnYnVpbHRpbic6IC9cXGIoPzphZGRyZXNzfGJvb2x8c3RyaW5nfHU/aW50KD86OHwxNnwyNHwzMnw0MHw0OHw1Nnw2NHw3Mnw4MHw4OHw5NnwxMDR8MTEyfDEyMHwxMjh8MTM2fDE0NHwxNTJ8MTYwfDE2OHwxNzZ8MTg0fDE5MnwyMDB8MjA4fDIxNnwyMjR8MjMyfDI0MHwyNDh8MjU2KT98Ynl0ZXxieXRlcyg/OlsxLTldfFsxMl1cXGR8M1swLTJdKT8pXFxiL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3NvbGlkaXR5JywgJ251bWJlcicsIHtcblx0J3ZlcnNpb24nOiB7XG5cdFx0cGF0dGVybjogLyhbPD5dPT98XFxeKVxcZCtcXC5cXGQrXFwuXFxkK1xcYi8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ251bWJlcicsXG5cdH1cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuc29sID0gUHJpc20ubGFuZ3VhZ2VzLnNvbGlkaXR5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==