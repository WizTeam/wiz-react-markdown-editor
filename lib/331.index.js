(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[331],{

/***/ "./node_modules/prismjs/components/prism-q.js":
/*!****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-q.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.q = {
	'string': /"(?:\\.|[^"\\\r\n])*"/,
	'comment': [
		// From http://code.kx.com/wiki/Reference/Slash:
		// When / is following a space (or a right parenthesis, bracket, or brace), it is ignored with the rest of the line.
		{

			pattern: /([\t )\]}])\/.*/,
			lookbehind: true,
			greedy: true
		},
		// From http://code.kx.com/wiki/Reference/Slash:
		// A line which has / as its first character and contains at least one other non-whitespace character is a whole-line comment and is ignored entirely.
		// A / on a line by itself begins a multiline comment which is terminated by the next \ on a line by itself.
		// If a / is not matched by a \, the multiline comment is unterminated and continues to end of file.
		// The / and \ must be the first char on the line, but may be followed by any amount of whitespace.
		{
			pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
			lookbehind: true,
			greedy: true
		},
		// From http://code.kx.com/wiki/Reference/Slash:
		// A \ on a line by itself with no preceding matching / will comment to end of file.
		{
			pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,
			greedy: true
		},
		{
			pattern: /^#!.+/m,
			greedy: true
		}
	],
	'symbol': /`(?::\S+|[\w.]*)/,
	'datetime': {
		pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
		alias: 'number'
	},
	// The negative look-ahead prevents bad highlighting
	// of verbs 0: and 1:
	'number': /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
	'keyword': /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
	'adverb': {
		pattern: /['\/\\]:?|\beach\b/,
		alias: 'function'
	},
	'verb': {
		pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?~=|$&#@^]):?|\b_\b:?/,
		alias: 'operator'
	},
	'punctuation': /[(){}\[\];.]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUU7QUFDcEM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLHNCQUFzQixLQUFLO0FBQzNCIiwiZmlsZSI6IjMzMS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5xID0ge1xuXHQnc3RyaW5nJzogL1wiKD86XFxcXC58W15cIlxcXFxcXHJcXG5dKSpcIi8sXG5cdCdjb21tZW50JzogW1xuXHRcdC8vIEZyb20gaHR0cDovL2NvZGUua3guY29tL3dpa2kvUmVmZXJlbmNlL1NsYXNoOlxuXHRcdC8vIFdoZW4gLyBpcyBmb2xsb3dpbmcgYSBzcGFjZSAob3IgYSByaWdodCBwYXJlbnRoZXNpcywgYnJhY2tldCwgb3IgYnJhY2UpLCBpdCBpcyBpZ25vcmVkIHdpdGggdGhlIHJlc3Qgb2YgdGhlIGxpbmUuXG5cdFx0e1xuXG5cdFx0XHRwYXR0ZXJuOiAvKFtcXHQgKVxcXX1dKVxcLy4qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdC8vIEZyb20gaHR0cDovL2NvZGUua3guY29tL3dpa2kvUmVmZXJlbmNlL1NsYXNoOlxuXHRcdC8vIEEgbGluZSB3aGljaCBoYXMgLyBhcyBpdHMgZmlyc3QgY2hhcmFjdGVyIGFuZCBjb250YWlucyBhdCBsZWFzdCBvbmUgb3RoZXIgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIGlzIGEgd2hvbGUtbGluZSBjb21tZW50IGFuZCBpcyBpZ25vcmVkIGVudGlyZWx5LlxuXHRcdC8vIEEgLyBvbiBhIGxpbmUgYnkgaXRzZWxmIGJlZ2lucyBhIG11bHRpbGluZSBjb21tZW50IHdoaWNoIGlzIHRlcm1pbmF0ZWQgYnkgdGhlIG5leHQgXFwgb24gYSBsaW5lIGJ5IGl0c2VsZi5cblx0XHQvLyBJZiBhIC8gaXMgbm90IG1hdGNoZWQgYnkgYSBcXCwgdGhlIG11bHRpbGluZSBjb21tZW50IGlzIHVudGVybWluYXRlZCBhbmQgY29udGludWVzIHRvIGVuZCBvZiBmaWxlLlxuXHRcdC8vIFRoZSAvIGFuZCBcXCBtdXN0IGJlIHRoZSBmaXJzdCBjaGFyIG9uIHRoZSBsaW5lLCBidXQgbWF5IGJlIGZvbGxvd2VkIGJ5IGFueSBhbW91bnQgb2Ygd2hpdGVzcGFjZS5cblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxyP1xcbnxcXHIpXFwvW1xcdCBdKig/Oig/Olxccj9cXG58XFxyKSg/Oi4qKD86XFxyP1xcbnxcXHIpKSo/KD86XFxcXCg/PVtcXHQgXSooPzpcXHI/XFxufFxccikpfCQpfFxcUy4qKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQvLyBGcm9tIGh0dHA6Ly9jb2RlLmt4LmNvbS93aWtpL1JlZmVyZW5jZS9TbGFzaDpcblx0XHQvLyBBIFxcIG9uIGEgbGluZSBieSBpdHNlbGYgd2l0aCBubyBwcmVjZWRpbmcgbWF0Y2hpbmcgLyB3aWxsIGNvbW1lbnQgdG8gZW5kIG9mIGZpbGUuXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL15cXFxcW1xcdCBdKig/Olxccj9cXG58XFxyKVtcXHNcXFNdKy9tLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvXiMhLisvbSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3N5bWJvbCc6IC9gKD86OlxcUyt8W1xcdy5dKikvLFxuXHQnZGF0ZXRpbWUnOiB7XG5cdFx0cGF0dGVybjogLzBOW21kenV2dF18MFdbZHR6XXxcXGR7NH1cXC5cXGRcXGQoPzptfFxcLlxcZFxcZCg/OlQoPzpcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuOl1cXGRcXGRcXGQpPyk/KT8pPyk/W2R6XT8pfFxcZFxcZDpcXGRcXGQoPzo6XFxkXFxkKD86Wy46XVxcZFxcZFxcZCk/KT9bdXZ0XT8vLFxuXHRcdGFsaWFzOiAnbnVtYmVyJ1xuXHR9LFxuXHQvLyBUaGUgbmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBiYWQgaGlnaGxpZ2h0aW5nXG5cdC8vIG9mIHZlcmJzIDA6IGFuZCAxOlxuXHQnbnVtYmVyJzogL1xcYig/IVswMV06KSg/OjBbd25dfDBXW2hqXT98ME5baGplXT98MHhbXFxkYS1mQS1GXSt8XFxkK1xcLj9cXGQqKD86ZVsrLV0/XFxkKyk/W2hqZmViXT8pLyxcblx0J2tleXdvcmQnOiAvXFxcXFxcdytcXGJ8XFxiKD86YWJzfGFjb3N8YWowP3xhbGx8YW5kfGFueXxhc2N8YXNpbnxhc29mfGF0YW58YXR0cnxhdmdzP3xiaW5yP3xieXxjZWlsaW5nfGNvbHN8Y29yfGNvc3xjb3VudHxjb3Z8Y3Jvc3N8Y3N2fGN1dHxkZWxldGV8ZGVsdGFzfGRlc2N8ZGV2fGRpZmZlcnxkaXN0aW5jdHxkaXZ8ZG98ZHNhdmV8ZWp8ZW5saXN0fGV2YWx8ZXhjZXB0fGV4ZWN8ZXhpdHxleHB8ZmJ5fGZpbGxzfGZpcnN0fGZrZXlzfGZsaXB8Zmxvb3J8ZnJvbXxnZXR8Z2V0ZW52fGdyb3VwfGd0aW1lfGhjbG9zZXxoY291bnR8aGRlbHxob3Blbnxoc3ltfGlhc2N8aWRlbnRpdHl8aWRlc2N8aWZ8aWp8aW58aW5zZXJ0fGludGVyfGludnxrZXlzP3xsYXN0fGxpa2V8bGlzdHxsamY/fGxvYWR8bG9nfGxvd2VyfGxzcXxsdGltZXxsdHJpbXxtYXZnfG1heHM/fG1jb3VudHxtZDV8bWRldnxtZWR8bWV0YXxtaW5zP3xtbWF4fG1taW58bW11fG1vZHxtc3VtfG5lZ3xuZXh0fG5vdHxudWxsfG9yfG92ZXJ8cGFyc2V8cGVhY2h8cGp8cGxpc3R8cHJkcz98cHJldnxwcmlvcnxyYW5kfHJhbmt8cmF0aW9zfHJhemV8cmVhZDB8cmVhZDF8cmVjaXByb2NhbHxyZXZhbHxyZXZlcnNlfHJsb2FkfHJvdGF0ZXxyc2F2ZXxydHJpbXxzYXZlfHNjYW58c2NvdnxzZGV2fHNlbGVjdHxzZXR8c2V0ZW52fHNob3d8c2lnbnVtfHNpbnxzcXJ0fHNzcj98c3RyaW5nfHN1Ymxpc3R8c3Vtcz98c3Z8c3ZhcnxzeXN0ZW18dGFibGVzfHRhbnx0aWx8dHJpbXx0eGZ8dHlwZXx1anx1bmdyb3VwfHVuaW9ufHVwZGF0ZXx1cHBlcnx1cHNlcnR8dmFsdWV8dmFyfHZpZXdzP3x2c3x3YXZnfHdoZXJlfHdoaWxlfHdpdGhpbnx3ajE/fHdzdW18d3d8eGFzY3x4YmFyfHhjb2xzP3x4ZGVzY3x4ZXhwfHhncm91cHx4a2V5fHhsb2d8eHByZXZ8eHJhbmspXFxiLyxcblx0J2FkdmVyYic6IHtcblx0XHRwYXR0ZXJuOiAvWydcXC9cXFxcXTo/fFxcYmVhY2hcXGIvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCd2ZXJiJzoge1xuXHRcdHBhdHRlcm46IC8oPzpcXEJcXC5cXEJ8XFxiWzAxXTp8PFs9Pl0/fD49P3xbOitcXC0qJSwhP349fCQmI0BeXSk6P3xcXGJfXFxiOj8vLFxuXHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdH0sXG5cdCdwdW5jdHVhdGlvbic6IC9bKCl7fVxcW1xcXTsuXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9