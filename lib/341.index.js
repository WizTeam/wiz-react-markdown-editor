(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[341],{

/***/ "./node_modules/prismjs/components/prism-reason.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-reason.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.reason = Prism.languages.extend('clike', {
	'string': {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
		greedy: true
	},
	// 'class-name' must be matched *after* 'constructor' defined below
	'class-name': /\b[A-Z]\w*/,
	'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
	'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
	'character': {
		pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
		alias: 'string'
	},
	'constructor': {
		// Negative look-ahead prevents from matching things like String.capitalize
		pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
		alias: 'variable'
	},
	'label': {
		pattern: /\b[a-z]\w*(?=::)/,
		alias: 'symbol'
	}
});

// We can't match functions property, so let's not even try.
delete Prism.languages.reason.function;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJlYXNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJCQUEyQixFQUFFLHlCQUF5QixFQUFFO0FBQ3hEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6IjM0MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5yZWFzb24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gJ2NsYXNzLW5hbWUnIG11c3QgYmUgbWF0Y2hlZCAqYWZ0ZXIqICdjb25zdHJ1Y3RvcicgZGVmaW5lZCBiZWxvd1xuXHQnY2xhc3MtbmFtZSc6IC9cXGJbQS1aXVxcdyovLFxuXHQna2V5d29yZCc6IC9cXGIoPzphbmR8YXN8YXNzZXJ0fGJlZ2lufGNsYXNzfGNvbnN0cmFpbnR8ZG98ZG9uZXxkb3dudG98ZWxzZXxlbmR8ZXhjZXB0aW9ufGV4dGVybmFsfGZvcnxmdW58ZnVuY3Rpb258ZnVuY3RvcnxpZnxpbnxpbmNsdWRlfGluaGVyaXR8aW5pdGlhbGl6ZXJ8bGF6eXxsZXR8bWV0aG9kfG1vZHVsZXxtdXRhYmxlfG5ld3xub25yZWN8b2JqZWN0fG9mfG9wZW58b3J8cHJpdmF0ZXxyZWN8c2lnfHN0cnVjdHxzd2l0Y2h8dGhlbnx0b3x0cnl8dHlwZXx2YWx8dmlydHVhbHx3aGVufHdoaWxlfHdpdGgpXFxiLyxcblx0J29wZXJhdG9yJzogL1xcLnszfXw6Wzo9XXxcXHw+fC0+fD0oPzo9PT98Pik/fDw9P3w+PT98W3xePycjIX5gXXxbK1xcLSpcXC9dXFwuP3xcXGIoPzptb2R8bGFuZHxsb3J8bHhvcnxsc2x8bHNyfGFzcilcXGIvXG59KTtcblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3JlYXNvbicsICdjbGFzcy1uYW1lJywge1xuXHQnY2hhcmFjdGVyJzoge1xuXHRcdHBhdHRlcm46IC8nKD86XFxcXHhbXFxkYS1mXXsyfXxcXFxcb1swLTNdWzAtN11bMC03XXxcXFxcXFxkezN9fFxcXFwufFteJ1xcXFxcXHJcXG5dKScvLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQnY29uc3RydWN0b3InOiB7XG5cdFx0Ly8gTmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBmcm9tIG1hdGNoaW5nIHRoaW5ncyBsaWtlIFN0cmluZy5jYXBpdGFsaXplXG5cdFx0cGF0dGVybjogL1xcYltBLVpdXFx3KlxcYig/IVxccypcXC4pLyxcblx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHR9LFxuXHQnbGFiZWwnOiB7XG5cdFx0cGF0dGVybjogL1xcYlthLXpdXFx3Kig/PTo6KS8sXG5cdFx0YWxpYXM6ICdzeW1ib2wnXG5cdH1cbn0pO1xuXG4vLyBXZSBjYW4ndCBtYXRjaCBmdW5jdGlvbnMgcHJvcGVydHksIHNvIGxldCdzIG5vdCBldmVuIHRyeS5cbmRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMucmVhc29uLmZ1bmN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==