(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/prismjs/components/prism-aql.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-aql.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.aql = {
	'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
	'property': {
		pattern: /([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(["'´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
		greedy: true
	},
	'variable': /@@?\w+/,
	'keyword': [
		{
			pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i,
			lookbehind: true
		},
		/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WITH)\b/i,
		// pseudo keywords get a lookbehind to avoid false positives
		{
			pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,
			lookbehind: true
		},
		{
			pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,
			lookbehind: true
		},
		{
			pattern: /\bOPTIONS(?=\s*{)/i
		}
	],
	'function': /(?!\d)\w+(?=\s*\()/,
	'boolean': /(?:true|false)/i,
	'range': {
		pattern: /\.\./,
		alias: 'operator'
	},
	'number': /(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i,
	'operator': /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
	'punctuation': /::|[?.:,;()[\]{}]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGlCQUFpQixHQUFHO0FBQ3BCLDBCQUEwQixPQUFPO0FBQ2pDIiwiZmlsZSI6IjIxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmFxbCA9IHtcblx0J2NvbW1lbnQnOiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdCdwcm9wZXJ0eSc6IHtcblx0XHRwYXR0ZXJuOiAvKFt7LF1cXHMqKSg/Oig/IVxcZClcXHcrfChbXCInwrRgXSkoPzooPyFcXDIpW15cXFxcXFxyXFxuXXxcXFxcLikqXFwyKSg/PVxccyo6KS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIifCtGBdKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFwuKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQndmFyaWFibGUnOiAvQEA/XFx3Ky8sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFxiV0lUSFxccyspQ09VTlQoPz1cXHMrSU5UT1xcYikvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdC9cXGIoPzpBR0dSRUdBVEV8QUxMfEFORHxBTll8QVNDfENPTExFQ1R8REVTQ3xESVNUSU5DVHxGSUxURVJ8Rk9SfEdSQVBIfElOfElOQk9VTkR8SU5TRVJUfElOVE98S19TSE9SVEVTVF9QQVRIU3xMRVR8TElLRXxMSU1JVHxOT05FfE5PVHxOVUxMfE9SfE9VVEJPVU5EfFJFTU9WRXxSRVBMQUNFfFJFVFVSTnxTSE9SVEVTVF9QQVRIfFNPUlR8VVBEQVRFfFVQU0VSVHxXSVRIKVxcYi9pLFxuXHRcdC8vIHBzZXVkbyBrZXl3b3JkcyBnZXQgYSBsb29rYmVoaW5kIHRvIGF2b2lkIGZhbHNlIHBvc2l0aXZlc1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy5bXSkoPzpLRUVQfFBSVU5FfFNFQVJDSHxUTylcXGIvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy5bXSkoPzpDVVJSRU5UfE5FV3xPTEQpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cXGJPUFRJT05TKD89XFxzKnspL2lcblx0XHR9XG5cdF0sXG5cdCdmdW5jdGlvbic6IC8oPyFcXGQpXFx3Kyg/PVxccypcXCgpLyxcblx0J2Jvb2xlYW4nOiAvKD86dHJ1ZXxmYWxzZSkvaSxcblx0J3JhbmdlJzoge1xuXHRcdHBhdHRlcm46IC9cXC5cXC4vLFxuXHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdH0sXG5cdCdudW1iZXInOiAvKD86XFxCXFwuXFxkK3xcXGIoPzowfFsxLTldXFxkKikoPzpcXC5cXGQrKT8pKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9cXCp7Mix9fFs9IV1+fFshPTw+XT0/fCYmfFxcfFxcfHxbLSsqLyVdLyxcblx0J3B1bmN0dWF0aW9uJzogLzo6fFs/LjosOygpW1xcXXt9XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9