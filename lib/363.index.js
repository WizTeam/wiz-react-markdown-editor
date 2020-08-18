(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[363],{

/***/ "./node_modules/prismjs/components/prism-scala.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scala.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.scala = Prism.languages.extend('java', {
	'keyword': /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
	'triple-quoted-string': {
		pattern: /"""[\s\S]*?"""/,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'builtin': /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
	'number': /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
	'symbol': /'[^\d\s\\]\w*/
});
delete Prism.languages.scala['class-name'];
delete Prism.languages.scala['function'];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjYWxhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoiMzYzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnNjYWxhID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YScsIHtcblx0J2tleXdvcmQnOiAvPC18PT58XFxiKD86YWJzdHJhY3R8Y2FzZXxjYXRjaHxjbGFzc3xkZWZ8ZG98ZWxzZXxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm9yfGZvclNvbWV8aWZ8aW1wbGljaXR8aW1wb3J0fGxhenl8bWF0Y2h8bmV3fG51bGx8b2JqZWN0fG92ZXJyaWRlfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cmV0dXJufHNlYWxlZHxzZWxmfHN1cGVyfHRoaXN8dGhyb3d8dHJhaXR8dHJ5fHR5cGV8dmFsfHZhcnx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdCd0cmlwbGUtcXVvdGVkLXN0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCJcIlwiW1xcc1xcU10qP1wiXCJcIi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2J1aWx0aW4nOiAvXFxiKD86U3RyaW5nfEludHxMb25nfFNob3J0fEJ5dGV8Qm9vbGVhbnxEb3VibGV8RmxvYXR8Q2hhcnxBbnl8QW55UmVmfEFueVZhbHxVbml0fE5vdGhpbmcpXFxiLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdKlxcLj9bXFxkYS1mXSt8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVxcZCspP1tkZmxdPy9pLFxuXHQnc3ltYm9sJzogLydbXlxcZFxcc1xcXFxdXFx3Ki9cbn0pO1xuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5zY2FsYVsnY2xhc3MtbmFtZSddO1xuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5zY2FsYVsnZnVuY3Rpb24nXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=