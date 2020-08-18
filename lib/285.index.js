(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[285],{

/***/ "./node_modules/prismjs/components/prism-oz.js":
/*!*****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-oz.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.oz = {
	'comment': /\/\*[\s\S]*?\*\/|%.*/,
	'string': {
		pattern: /"(?:[^"\\]|\\[\s\S])*"/,
		greedy: true
	},
	'atom': {
		pattern: /'(?:[^'\\]|\\[\s\S])*'/,
		greedy: true,
		alias: 'builtin'
	},
	'keyword': /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
	'function': [
		/\b[a-z][A-Za-z\d]*(?=\()/,
		{
			pattern: /(\{)[A-Z][A-Za-z\d]*\b/,
			lookbehind: true
		}
	],
	'number': /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,
	'variable': /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
	'attr-name': /\w+(?=:)/,
	'operator': /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
	'punctuation': /[\[\](){}.:;?]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW96LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0IiLCJmaWxlIjoiMjg1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLm96ID0ge1xuXHQnY29tbWVudCc6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfCUuKi8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86W15cIlxcXFxdfFxcXFxbXFxzXFxTXSkqXCIvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnYXRvbSc6IHtcblx0XHRwYXR0ZXJuOiAvJyg/OlteJ1xcXFxdfFxcXFxbXFxzXFxTXSkqJy8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnYnVpbHRpbidcblx0fSxcblx0J2tleXdvcmQnOiAvXFwkfFxcW1xcXXxcXGIoPzpffGF0fGF0dHJ8Y2FzZXxjYXRjaHxjaG9pY2V8Y2xhc3N8Y29uZHxkZWNsYXJlfGRlZmluZXxkaXN8ZWxzZSg/OmNhc2V8aWYpP3xlbmR8ZXhwb3J0fGZhaWx8ZmFsc2V8ZmVhdHxmaW5hbGx5fGZyb218ZnVufGZ1bmN0b3J8aWZ8aW1wb3J0fGlufGxvY2FsfGxvY2t8bWV0aHxuaWx8bm90fG9mfG9yfHByZXBhcmV8cHJvY3xwcm9wfHJhaXNlfHJlcXVpcmV8c2VsZnxza2lwfHRoZW58dGhyZWFkfHRydWV8dHJ5fHVuaXQpXFxiLyxcblx0J2Z1bmN0aW9uJzogW1xuXHRcdC9cXGJbYS16XVtBLVphLXpcXGRdKig/PVxcKCkvLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFx7KVtBLVpdW0EtWmEtelxcZF0qXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdudW1iZXInOiAvXFxiKD86MFtieF1bXFxkYS1mXSt8XFxkK1xcLj9cXGQqKD86ZX4/XFxkKyk/KVxcYnwmKD86W15cXFxcXXxcXFxcKD86XFxkezN9fC4pKS9pLFxuXHQndmFyaWFibGUnOiAvXFxiW0EtWl1bQS1aYS16XFxkXSp8YCg/OlteYFxcXFxdfFxcXFwuKStgLyxcblx0J2F0dHItbmFtZSc6IC9cXHcrKD89OikvLFxuXHQnb3BlcmF0b3InOiAvOig/Oj18Ojo/KXw8Wy06PV0/fD0oPzo9fDw/Oj8pfD49Pzo/fFxcXFw9Oj98ISE/fFt8IytcXC0qXFwvLH5eQF18XFxiKD86YW5kdGhlbnxkaXZ8bW9kfG9yZWxzZSlcXGIvLFxuXHQncHVuY3R1YXRpb24nOiAvW1xcW1xcXSgpe30uOjs/XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9