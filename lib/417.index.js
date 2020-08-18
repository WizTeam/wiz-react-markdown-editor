(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[417],{

/***/ "./node_modules/prismjs/components/prism-typescript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-typescript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.typescript = Prism.languages.extend('javascript', {
		'class-name': {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: true,
			greedy: true,
			inside: null // see below
		},
		// From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
		'keyword': /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
		'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
	});

	// doesn't work with TS because TS is too complex
	delete Prism.languages.typescript['parameter'];

	// a version of typescript specifically for highlighting types
	var typeInside = Prism.languages.extend('typescript', {});
	delete typeInside['class-name'];

	Prism.languages.typescript['class-name'].inside = typeInside;

	Prism.languages.insertBefore('typescript', 'function', {
		'generic-function': {
			// e.g. foo<T extends "bar" | "baz">( ...
			pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: true,
			inside: {
				'function': /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
				'generic': {
					pattern: /<[\s\S]+/, // everything after the first <
					alias: 'class-name',
					inside: typeInside
				}
			}
		}
	});

	Prism.languages.ts = Prism.languages.typescript;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDQUFDIiwiZmlsZSI6IjQxNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG5cdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfGludGVyZmFjZXxuZXd8dHlwZSlcXHMrKSg/IWtleW9mXFxiKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPzpcXHMqPCg/OltePD5dfDwoPzpbXjw+XXw8W148Pl0qPikqPikqPik/Lyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cdFx0fSxcblx0XHQvLyBGcm9tIEphdmFTY3JpcHQgUHJpc20ga2V5d29yZCBsaXN0IGFuZCBUeXBlU2NyaXB0IGxhbmd1YWdlIHNwZWM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL21hc3Rlci9kb2Mvc3BlYy5tZCMyMjEtcmVzZXJ2ZWQtd29yZHNcblx0XHQna2V5d29yZCc6IC9cXGIoPzphYnN0cmFjdHxhc3xhc3NlcnRzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29uc3RydWN0b3J8Y29udGludWV8ZGVidWdnZXJ8ZGVjbGFyZXxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8aXN8a2V5b2Z8bGV0fG1vZHVsZXxuYW1lc3BhY2V8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVhZG9ubHl8cmV0dXJufHJlcXVpcmV8c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcblx0XHQnYnVpbHRpbic6IC9cXGIoPzpzdHJpbmd8RnVuY3Rpb258YW55fG51bWJlcnxib29sZWFufEFycmF5fHN5bWJvbHxjb25zb2xlfFByb21pc2V8dW5rbm93bnxuZXZlcilcXGIvLFxuXHR9KTtcblxuXHQvLyBkb2Vzbid0IHdvcmsgd2l0aCBUUyBiZWNhdXNlIFRTIGlzIHRvbyBjb21wbGV4XG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFsncGFyYW1ldGVyJ107XG5cblx0Ly8gYSB2ZXJzaW9uIG9mIHR5cGVzY3JpcHQgc3BlY2lmaWNhbGx5IGZvciBoaWdobGlnaHRpbmcgdHlwZXNcblx0dmFyIHR5cGVJbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCd0eXBlc2NyaXB0Jywge30pO1xuXHRkZWxldGUgdHlwZUluc2lkZVsnY2xhc3MtbmFtZSddO1xuXG5cdFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0WydjbGFzcy1uYW1lJ10uaW5zaWRlID0gdHlwZUluc2lkZTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd0eXBlc2NyaXB0JywgJ2Z1bmN0aW9uJywge1xuXHRcdCdnZW5lcmljLWZ1bmN0aW9uJzoge1xuXHRcdFx0Ly8gZS5nLiBmb288VCBleHRlbmRzIFwiYmFyXCIgfCBcImJhelwiPiggLi4uXG5cdFx0XHRwYXR0ZXJuOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qXFxzKjwoPzpbXjw+XXw8KD86W148Pl18PFtePD5dKj4pKj4pKj4oPz1cXHMqXFwoKS8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL14jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSovLFxuXHRcdFx0XHQnZ2VuZXJpYyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvPFtcXHNcXFNdKy8sIC8vIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IDxcblx0XHRcdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnLFxuXHRcdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMudHMgPSBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdDtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==