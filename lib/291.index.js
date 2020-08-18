(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[291],{

/***/ "./node_modules/prismjs/components/prism-pascal.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pascal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Based on Free Pascal

/* TODO
	Support inline asm ?
*/

Prism.languages.pascal = {
	'comment': [
		/\(\*[\s\S]+?\*\)/,
		/\{[\s\S]+?\}/,
		/\/\/.*/
	],
	'string': {
		pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
		greedy: true
	},
	'keyword': [
		{
			// Turbo Pascal
			pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
			lookbehind: true
		},
		{
			// Free Pascal
			pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
			lookbehind: true
		},
		{
			// Object Pascal
			pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
			lookbehind: true
		},
		{
			// Modifiers
			pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
			lookbehind: true
		}
	],
	'number': [
		// Hexadecimal, octal and binary
		/(?:[&%]\d+|\$[a-f\d]+)/i,
		// Decimal
		/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i
	],
	'operator': [
		/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
		{
			pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
			lookbehind: true
		}
	],
	'punctuation': /\(\.|\.\)|[()\[\]:;,.]/
};

Prism.languages.objectpascal = Prism.languages.pascal;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBhc2NhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBIiwiZmlsZSI6IjI5MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJhc2VkIG9uIEZyZWUgUGFzY2FsXG5cbi8qIFRPRE9cblx0U3VwcG9ydCBpbmxpbmUgYXNtID9cbiovXG5cblByaXNtLmxhbmd1YWdlcy5wYXNjYWwgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdC9cXChcXCpbXFxzXFxTXSs/XFwqXFwpLyxcblx0XHQvXFx7W1xcc1xcU10rP1xcfS8sXG5cdFx0L1xcL1xcLy4qL1xuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oPzonKD86Jyd8W14nXFxyXFxuXSkqJyg/IScpfCNbJiQlXT9bYS1mXFxkXSspK3xcXF5bYS16XS9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQna2V5d29yZCc6IFtcblx0XHR7XG5cdFx0XHQvLyBUdXJibyBQYXNjYWxcblx0XHRcdHBhdHRlcm46IC8oXnxbXiZdKVxcYig/OmFic29sdXRlfGFycmF5fGFzbXxiZWdpbnxjYXNlfGNvbnN0fGNvbnN0cnVjdG9yfGRlc3RydWN0b3J8ZG98ZG93bnRvfGVsc2V8ZW5kfGZpbGV8Zm9yfGZ1bmN0aW9ufGdvdG98aWZ8aW1wbGVtZW50YXRpb258aW5oZXJpdGVkfGlubGluZXxpbnRlcmZhY2V8bGFiZWx8bmlsfG9iamVjdHxvZnxvcGVyYXRvcnxwYWNrZWR8cHJvY2VkdXJlfHByb2dyYW18cmVjb3JkfHJlaW50cm9kdWNlfHJlcGVhdHxzZWxmfHNldHxzdHJpbmd8dGhlbnx0b3x0eXBlfHVuaXR8dW50aWx8dXNlc3x2YXJ8d2hpbGV8d2l0aClcXGIvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIEZyZWUgUGFzY2FsXG5cdFx0XHRwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzpkaXNwb3NlfGV4aXR8ZmFsc2V8bmV3fHRydWUpXFxiL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHQvLyBPYmplY3QgUGFzY2FsXG5cdFx0XHRwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzpjbGFzc3xkaXNwaW50ZXJmYWNlfGV4Y2VwdHxleHBvcnRzfGZpbmFsaXphdGlvbnxmaW5hbGx5fGluaXRpYWxpemF0aW9ufGlubGluZXxsaWJyYXJ5fG9ufG91dHxwYWNrZWR8cHJvcGVydHl8cmFpc2V8cmVzb3VyY2VzdHJpbmd8dGhyZWFkdmFyfHRyeSlcXGIvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIE1vZGlmaWVyc1xuXHRcdFx0cGF0dGVybjogLyhefFteJl0pXFxiKD86YWJzb2x1dGV8YWJzdHJhY3R8YWxpYXN8YXNzZW1ibGVyfGJpdHBhY2tlZHxicmVha3xjZGVjbHxjb250aW51ZXxjcHBkZWNsfGN2YXJ8ZGVmYXVsdHxkZXByZWNhdGVkfGR5bmFtaWN8ZW51bWVyYXRvcnxleHBlcmltZW50YWx8ZXhwb3J0fGV4dGVybmFsfGZhcnxmYXIxNnxmb3J3YXJkfGdlbmVyaWN8aGVscGVyfGltcGxlbWVudHN8aW5kZXh8aW50ZXJydXB0fGlvY2hlY2tzfGxvY2FsfG1lc3NhZ2V8bmFtZXxuZWFyfG5vZGVmYXVsdHxub3JldHVybnxub3N0YWNrZnJhbWV8b2xkZnBjY2FsbHxvdGhlcndpc2V8b3ZlcmxvYWR8b3ZlcnJpZGV8cGFzY2FsfHBsYXRmb3JtfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xwdWJsaXNoZWR8cmVhZHxyZWdpc3RlcnxyZWludHJvZHVjZXxyZXN1bHR8c2FmZWNhbGx8c2F2ZXJlZ2lzdGVyc3xzb2Z0ZmxvYXR8c3BlY2lhbGl6ZXxzdGF0aWN8c3RkY2FsbHxzdG9yZWR8c3RyaWN0fHVuYWxpZ25lZHx1bmltcGxlbWVudGVkfHZhcmFyZ3N8dmlydHVhbHx3cml0ZSlcXGIvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdudW1iZXInOiBbXG5cdFx0Ly8gSGV4YWRlY2ltYWwsIG9jdGFsIGFuZCBiaW5hcnlcblx0XHQvKD86WyYlXVxcZCt8XFwkW2EtZlxcZF0rKS9pLFxuXHRcdC8vIERlY2ltYWxcblx0XHQvXFxiXFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspPy9pXG5cdF0sXG5cdCdvcGVyYXRvcic6IFtcblx0XHQvXFwuXFwufFxcKlxcKnw6PXw8Wzw9Pl0/fD5bPj1dP3xbK1xcLSpcXC9dPT98W0BePV0vaSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzphbmR8YXN8ZGl2fGV4Y2x1ZGV8aW58aW5jbHVkZXxpc3xtb2R8bm90fG9yfHNobHxzaHJ8eG9yKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQncHVuY3R1YXRpb24nOiAvXFwoXFwufFxcLlxcKXxbKClcXFtcXF06OywuXS9cbn07XG5cblByaXNtLmxhbmd1YWdlcy5vYmplY3RwYXNjYWwgPSBQcmlzbS5sYW5ndWFnZXMucGFzY2FsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==