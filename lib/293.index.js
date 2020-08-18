(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[293],{

/***/ "./node_modules/prismjs/components/prism-pascaligo.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pascaligo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	// Pascaligo is a layer 2 smart contract language for the tezos blockchain

	var braces = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source;
	var type = /(?:\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g, function () { return braces; });

	var pascaligo = Prism.languages.pascaligo = {
		'comment': /\(\*[\s\S]+?\*\)|\/\/.*/,
		'string': {
			pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
			greedy: true
		},
		'class-name': [
			{
				pattern: RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g, function () { return type; }), 'i'),
				lookbehind: true,
				inside: null // see below
			},
			{
				pattern: RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g, function () { return type; }), 'i'),
				inside: null // see below
			},
			{
				pattern: RegExp(/(:\s*)<type>/.source.replace(/<type>/g, function () { return type; })),
				lookbehind: true,
				inside: null // see below
			}
		],
		'keyword': {
			pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
			lookbehind: true
		},
		'boolean': {
			pattern: /(^|[^&])\b(?:True|False)\b/i,
			lookbehind: true
		},
		'builtin': {
			pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
			lookbehind: true
		},
		'function': /\w+(?=\s*\()/i,
		'number': [
			// Hexadecimal, octal and binary
			/%[01]+|&[0-7]+|\$[a-f\d]+/i,
			// Decimal
			/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
		],
		'operator': /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
		'punctuation': /\(\.|\.\)|[()\[\]:;,.{}]/
	};

	var classNameInside = ['comment', 'keyword', 'builtin', 'operator', 'punctuation'].reduce(function (accum, key) {
		accum[key] = pascaligo[key];
		return accum;
	}, {});

	pascaligo["class-name"].forEach(function (p) {
		p.inside = classNameInside;
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBhc2NhbGlnby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBLHFGQUFxRixlQUFlLEVBQUU7O0FBRXRHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDBGQUEwRixhQUFhLEVBQUU7QUFDekc7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLCtFQUErRSxhQUFhLEVBQUU7QUFDOUY7QUFDQSxJQUFJO0FBQ0o7QUFDQSwwRUFBMEUsYUFBYSxFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxJQUFJO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSTs7QUFFTjtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjI5My5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHQvLyBQYXNjYWxpZ28gaXMgYSBsYXllciAyIHNtYXJ0IGNvbnRyYWN0IGxhbmd1YWdlIGZvciB0aGUgdGV6b3MgYmxvY2tjaGFpblxuXG5cdHZhciBicmFjZXMgPSAvXFwoKD86W14oKV18XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKlxcKS8uc291cmNlO1xuXHR2YXIgdHlwZSA9IC8oPzpcXHcrKD86PGJyYWNlcz4pP3w8YnJhY2VzPikvLnNvdXJjZS5yZXBsYWNlKC88YnJhY2VzPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBicmFjZXM7IH0pO1xuXG5cdHZhciBwYXNjYWxpZ28gPSBQcmlzbS5sYW5ndWFnZXMucGFzY2FsaWdvID0ge1xuXHRcdCdjb21tZW50JzogL1xcKFxcKltcXHNcXFNdKz9cXCpcXCl8XFwvXFwvLiovLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXxcXF5bYS16XS9pLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnY2xhc3MtbmFtZSc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXFxidHlwZVxccytcXHcrXFxzK2lzXFxzKyk8dHlwZT4vLnNvdXJjZS5yZXBsYWNlKC88dHlwZT4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZTsgfSksICdpJyksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvPHR5cGU+KD89XFxzK2lzXFxiKS8uc291cmNlLnJlcGxhY2UoLzx0eXBlPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlOyB9KSwgJ2knKSxcblx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oOlxccyopPHR5cGU+Ly5zb3VyY2UucmVwbGFjZSgvPHR5cGU+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGU7IH0pKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14mXSlcXGIoPzpiZWdpbnxibG9ja3xjYXNlfGNvbnN0fGVsc2V8ZW5kfGZhaWx8Zm9yfGZyb218ZnVuY3Rpb258aWZ8aXN8bmlsfG9mfHJlbW92ZXxyZXR1cm58c2tpcHx0aGVufHR5cGV8dmFyfHdoaWxlfHdpdGgpXFxiL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnYm9vbGVhbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiZdKVxcYig/OlRydWV8RmFsc2UpXFxiL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnYnVpbHRpbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiZdKVxcYig/OmJvb2x8aW50fGxpc3R8bWFwfG5hdHxyZWNvcmR8c3RyaW5nfHVuaXQpXFxiL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxccypcXCgpL2ksXG5cdFx0J251bWJlcic6IFtcblx0XHRcdC8vIEhleGFkZWNpbWFsLCBvY3RhbCBhbmQgYmluYXJ5XG5cdFx0XHQvJVswMV0rfCZbMC03XSt8XFwkW2EtZlxcZF0rL2ksXG5cdFx0XHQvLyBEZWNpbWFsXG5cdFx0XHQvXFxiXFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspPyg/Om10enxuKT8vaVxuXHRcdF0sXG5cdFx0J29wZXJhdG9yJzogLy0+fD1cXC89fFxcLlxcLnxcXCpcXCp8Oj18PFs8PT5dP3w+Wz49XT98WytcXC0qXFwvXT0/fFtAXj18XXxcXGIoPzphbmR8bW9kfG9yKVxcYi8sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1xcKFxcLnxcXC5cXCl8WygpXFxbXFxdOjssLnt9XS9cblx0fTtcblxuXHR2YXIgY2xhc3NOYW1lSW5zaWRlID0gWydjb21tZW50JywgJ2tleXdvcmQnLCAnYnVpbHRpbicsICdvcGVyYXRvcicsICdwdW5jdHVhdGlvbiddLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIGtleSkge1xuXHRcdGFjY3VtW2tleV0gPSBwYXNjYWxpZ29ba2V5XTtcblx0XHRyZXR1cm4gYWNjdW07XG5cdH0sIHt9KTtcblxuXHRwYXNjYWxpZ29bXCJjbGFzcy1uYW1lXCJdLmZvckVhY2goZnVuY3Rpb24gKHApIHtcblx0XHRwLmluc2lkZSA9IGNsYXNzTmFtZUluc2lkZTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=