(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[437],{

/***/ "./node_modules/prismjs/components/prism-wasm.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-wasm.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.wasm = {
	'comment': [
		/\(;[\s\S]*?;\)/,
		{
			pattern: /;;.*/,
			greedy: true
		}
	],
	'string': {
		pattern: /"(?:\\[\s\S]|[^"\\])*"/,
		greedy: true
	},
	'keyword': [
		{
			pattern: /\b(?:align|offset)=/,
			inside: {
				'operator': /=/
			}
		},
		{
			pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
			inside: {
				'punctuation': /\./
			}
		},
		/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
	],
	'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
	'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
	'punctuation': /[()]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXdhc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU0sU0FBUztBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiI0MzcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMud2FzbSA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0L1xcKDtbXFxzXFxTXSo/O1xcKS8sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLzs7LiovLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9cIig/OlxcXFxbXFxzXFxTXXxbXlwiXFxcXF0pKlwiLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYig/OmFsaWdufG9mZnNldCk9Lyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnb3BlcmF0b3InOiAvPS9cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cXGIoPzooPzpmMzJ8ZjY0fGkzMnxpNjQpKD86XFwuKD86YWJzfGFkZHxhbmR8Y2VpbHxjbHp8Y29uc3R8Y29udmVydF9bc3VdXFwvaSg/OjMyfDY0KXxjb3B5c2lnbnxjdHp8ZGVtb3RlXFwvZjY0fGRpdig/Ol9bc3VdKT98ZXF6P3xleHRlbmRfW3N1XVxcL2kzMnxmbG9vcnxnZSg/Ol9bc3VdKT98Z3QoPzpfW3N1XSk/fGxlKD86X1tzdV0pP3xsb2FkKD86KD86OHwxNnwzMilfW3N1XSk/fGx0KD86X1tzdV0pP3xtYXh8bWlufG11bHxuZWFyZXN0fG5lZz98b3J8cG9wY250fHByb21vdGVcXC9mMzJ8cmVpbnRlcnByZXRcXC9bZmldKD86MzJ8NjQpfHJlbV9bc3VdfHJvdFtscl18c2hsfHNocl9bc3VdfHN0b3JlKD86OHwxNnwzMik/fHNxcnR8c3VifHRydW5jKD86X1tzdV1cXC9mKD86MzJ8NjQpKT98d3JhcFxcL2k2NHx4b3IpKT98bWVtb3J5XFwuKD86Z3Jvd3xzaXplKSlcXGIvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvXFxiKD86YW55ZnVuY3xibG9ja3xicig/Ol9pZnxfdGFibGUpP3xjYWxsKD86X2luZGlyZWN0KT98ZGF0YXxkcm9wfGVsZW18ZWxzZXxlbmR8ZXhwb3J0fGZ1bmN8Z2V0Xyg/Omdsb2JhbHxsb2NhbCl8Z2xvYmFsfGlmfGltcG9ydHxsb2NhbHxsb29wfG1lbW9yeXxtb2R1bGV8bXV0fG5vcHxvZmZzZXR8cGFyYW18cmVzdWx0fHJldHVybnxzZWxlY3R8c2V0Xyg/Omdsb2JhbHxsb2NhbCl8c3RhcnR8dGFibGV8dGVlX2xvY2FsfHRoZW58dHlwZXx1bnJlYWNoYWJsZSlcXGIvXG5cdF0sXG5cdCd2YXJpYWJsZSc6IC9cXCRbXFx3ISMkJSYnKitcXC0uLzo8PT4/QFxcXFxeX2B8fl0rL2ksXG5cdCdudW1iZXInOiAvWystXT9cXGIoPzpcXGQoPzpfP1xcZCkqKD86XFwuXFxkKD86Xz9cXGQpKik/KD86W2VFXVsrLV0/XFxkKD86Xz9cXGQpKik/fDB4W1xcZGEtZkEtRl0oPzpfP1tcXGRhLWZBLUZdKSooPzpcXC5bXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRF0pKik/KD86W3BQXVsrLV0/XFxkKD86Xz9cXGQpKik/KVxcYnxcXGJpbmZcXGJ8XFxibmFuKD86OjB4W1xcZGEtZkEtRl0oPzpfP1tcXGRhLWZBLURdKSopP1xcYi8sXG5cdCdwdW5jdHVhdGlvbic6IC9bKCldL1xufTsiXSwic291cmNlUm9vdCI6IiJ9