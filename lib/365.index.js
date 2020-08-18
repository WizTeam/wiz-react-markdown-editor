(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[365],{

/***/ "./node_modules/prismjs/components/prism-scheme.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scheme.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.scheme = {
	'comment': /;.*/,
	'string': {
		pattern: /"(?:[^"\\]|\\.)*"/,
		greedy: true
	},
	'symbol': {
		pattern: /'[^()#'\s]+/,
		greedy: true
	},
	'character': {
		pattern: /#\\(?:[ux][a-fA-F\d]+|[-a-zA-Z]+|\S)/,
		greedy: true,
		alias: 'string'
	},
	'lambda-parameter': [
		// https://www.cs.cmu.edu/Groups/AI/html/r4rs/r4rs_6.html#SEC30
		{
			pattern: /(\(lambda\s+)[^()'\s]+/,
			lookbehind: true
		},
		{
			pattern: /(\(lambda\s+\()[^()']+/,
			lookbehind: true
		}
	],
	'keyword': {
		pattern: /(\()(?:define(?:-library|-macro|-syntax|-values)?|defmacro|(?:case-)?lambda|let(?:(?:\*|rec)?(?:-values)?|-syntax|rec-syntax)|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-(?:case|rules))(?=[()\s]|$)/,
		lookbehind: true
	},
	'builtin': {
		pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s]|$)/,
		lookbehind: true
	},
	'number': {
		// This pattern (apart from the lookarounds) works like this:
		//
		// Decimal numbers
		// <dec real>       := \d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+
		// <dec complex>    := <dec real>(?:[+-]<dec real>i)?|<dec real>i
		// <dec prefix>     := (?:#d(?:#[ei])?|#[ei](?:#d)?)?
		// <dec number>     := <dec prefix>[+-]?<complex>
		//
		// Binary, octal, and hexadecimal numbers
		// <b.o.x. real>    := [\da-fA-F]+(?:\/[\da-fA-F]+)?
		// <b.o.x. complex> := <b.o.x. real>(?:[+-]<b.o.x. real>i)?|<b.o.x. real>i
		// <b.o.x. prefix>  := #[box](?:#[ei])?|#[ei](?:#[box])?
		// <b.o.x. number>  := <b.o.x. prefix>[+-]?<b.o.x. complex>
		//
		// <number>         := <dec number>|<b.o.x. number>
		pattern: /(^|[\s()])(?:(?:#d(?:#[ei])?|#[ei](?:#d)?)?[+-]?(?:(?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)(?:[+-](?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)i)?|(?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)i)|(?:#[box](?:#[ei])?|#[ei](?:#[box])?)[+-]?(?:[\da-fA-F]+(?:\/[\da-fA-F]+)?(?:[+-][\da-fA-F]+(?:\/[\da-fA-F]+)?i)?|[\da-fA-F]+(?:\/[\da-fA-F]+)?i))(?=[()\s]|$)/,
		lookbehind: true
	},
	'boolean': {
		pattern: /(^|[\s()])#[ft](?=[()\s]|$)/,
		lookbehind: true
	},
	'operator': {
		pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=[()\s]|$)/,
		lookbehind: true
	},
	'function': {
		pattern: /(\()[^()'\s]+(?=[()\s]|$)/,
		lookbehind: true
	},
	'punctuation': /[()']/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjaGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EiLCJmaWxlIjoiMzY1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnNjaGVtZSA9IHtcblx0J2NvbW1lbnQnOiAvOy4qLyxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwiLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3N5bWJvbCc6IHtcblx0XHRwYXR0ZXJuOiAvJ1teKCkjJ1xcc10rLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NoYXJhY3Rlcic6IHtcblx0XHRwYXR0ZXJuOiAvI1xcXFwoPzpbdXhdW2EtZkEtRlxcZF0rfFstYS16QS1aXSt8XFxTKS8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQnbGFtYmRhLXBhcmFtZXRlcic6IFtcblx0XHQvLyBodHRwczovL3d3dy5jcy5jbXUuZWR1L0dyb3Vwcy9BSS9odG1sL3I0cnMvcjRyc182Lmh0bWwjU0VDMzBcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcKGxhbWJkYVxccyspW14oKSdcXHNdKy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcKGxhbWJkYVxccytcXCgpW14oKSddKy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQna2V5d29yZCc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcKCkoPzpkZWZpbmUoPzotbGlicmFyeXwtbWFjcm98LXN5bnRheHwtdmFsdWVzKT98ZGVmbWFjcm98KD86Y2FzZS0pP2xhbWJkYXxsZXQoPzooPzpcXCp8cmVjKT8oPzotdmFsdWVzKT98LXN5bnRheHxyZWMtc3ludGF4KXxlbHNlfGlmfGNvbmR8YmVnaW58ZGVsYXkoPzotZm9yY2UpP3xwYXJhbWV0ZXJpemV8Z3VhcmR8c2V0IXwoPzpxdWFzaS0pP3F1b3RlfHN5bnRheC0oPzpjYXNlfHJ1bGVzKSkoPz1bKClcXHNdfCQpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdidWlsdGluJzoge1xuXHRcdHBhdHRlcm46IC8oXFwoKSg/Oig/OmNvbnN8Y2FyfGNkcnxsaXN0fGNhbGwtd2l0aC1jdXJyZW50LWNvbnRpbnVhdGlvbnxjYWxsXFwvY2N8YXBwZW5kfGFic3xhcHBseXxldmFsKVxcYnxudWxsXFw/fHBhaXJcXD98Ym9vbGVhblxcP3xlb2Ytb2JqZWN0XFw/fGNoYXJcXD98cHJvY2VkdXJlXFw/fG51bWJlclxcP3xwb3J0XFw/fHN0cmluZ1xcP3x2ZWN0b3JcXD98c3ltYm9sXFw/fGJ5dGV2ZWN0b3JcXD8pKD89WygpXFxzXXwkKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzoge1xuXHRcdC8vIFRoaXMgcGF0dGVybiAoYXBhcnQgZnJvbSB0aGUgbG9va2Fyb3VuZHMpIHdvcmtzIGxpa2UgdGhpczpcblx0XHQvL1xuXHRcdC8vIERlY2ltYWwgbnVtYmVyc1xuXHRcdC8vIDxkZWMgcmVhbD4gICAgICAgOj0gXFxkKlxcLj9cXGQrKD86W2VFXVsrLV0/XFxkKyk/fFxcZCtcXC9cXGQrXG5cdFx0Ly8gPGRlYyBjb21wbGV4PiAgICA6PSA8ZGVjIHJlYWw+KD86WystXTxkZWMgcmVhbD5pKT98PGRlYyByZWFsPmlcblx0XHQvLyA8ZGVjIHByZWZpeD4gICAgIDo9ICg/OiNkKD86I1tlaV0pP3wjW2VpXSg/OiNkKT8pP1xuXHRcdC8vIDxkZWMgbnVtYmVyPiAgICAgOj0gPGRlYyBwcmVmaXg+WystXT88Y29tcGxleD5cblx0XHQvL1xuXHRcdC8vIEJpbmFyeSwgb2N0YWwsIGFuZCBoZXhhZGVjaW1hbCBudW1iZXJzXG5cdFx0Ly8gPGIuby54LiByZWFsPiAgICA6PSBbXFxkYS1mQS1GXSsoPzpcXC9bXFxkYS1mQS1GXSspP1xuXHRcdC8vIDxiLm8ueC4gY29tcGxleD4gOj0gPGIuby54LiByZWFsPig/OlsrLV08Yi5vLnguIHJlYWw+aSk/fDxiLm8ueC4gcmVhbD5pXG5cdFx0Ly8gPGIuby54LiBwcmVmaXg+ICA6PSAjW2JveF0oPzojW2VpXSk/fCNbZWldKD86I1tib3hdKT9cblx0XHQvLyA8Yi5vLnguIG51bWJlcj4gIDo9IDxiLm8ueC4gcHJlZml4PlsrLV0/PGIuby54LiBjb21wbGV4PlxuXHRcdC8vXG5cdFx0Ly8gPG51bWJlcj4gICAgICAgICA6PSA8ZGVjIG51bWJlcj58PGIuby54LiBudW1iZXI+XG5cdFx0cGF0dGVybjogLyhefFtcXHMoKV0pKD86KD86I2QoPzojW2VpXSk/fCNbZWldKD86I2QpPyk/WystXT8oPzooPzpcXGQqXFwuP1xcZCsoPzpbZUVdWystXT9cXGQrKT98XFxkK1xcL1xcZCspKD86WystXSg/OlxcZCpcXC4/XFxkKyg/OltlRV1bKy1dP1xcZCspP3xcXGQrXFwvXFxkKylpKT98KD86XFxkKlxcLj9cXGQrKD86W2VFXVsrLV0/XFxkKyk/fFxcZCtcXC9cXGQrKWkpfCg/OiNbYm94XSg/OiNbZWldKT98I1tlaV0oPzojW2JveF0pPylbKy1dPyg/OltcXGRhLWZBLUZdKyg/OlxcL1tcXGRhLWZBLUZdKyk/KD86WystXVtcXGRhLWZBLUZdKyg/OlxcL1tcXGRhLWZBLUZdKyk/aSk/fFtcXGRhLWZBLUZdKyg/OlxcL1tcXGRhLWZBLUZdKyk/aSkpKD89WygpXFxzXXwkKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnYm9vbGVhbic6IHtcblx0XHRwYXR0ZXJuOiAvKF58W1xccygpXSkjW2Z0XSg/PVsoKVxcc118JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J29wZXJhdG9yJzoge1xuXHRcdHBhdHRlcm46IC8oXFwoKSg/OlstKyolXFwvXXxbPD5dPT98PT4/KSg/PVsoKVxcc118JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J2Z1bmN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC8oXFwoKVteKCknXFxzXSsoPz1bKClcXHNdfCQpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdwdW5jdHVhdGlvbic6IC9bKCknXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9