(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/prismjs/components/prism-applescript.js":
/*!**************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-applescript.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.applescript = {
	'comment': [
		// Allow one level of nesting
		/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
		/--.+/,
		/#.+/
	],
	'string': /"(?:\\.|[^"\\\r\n])*"/,
	'number': /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
	'operator': [
		/[&=≠≤≥*+\-\/÷^]|[<>]=?/,
		/\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
	],
	'keyword': /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
	'class': {
		pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
		alias: 'builtin'
	},
	'punctuation': /[{}():,¬«»《》]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFwcGxlc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysb0JBQW9CO0FBQ3BCIiwiZmlsZSI6IjE5LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmFwcGxlc2NyaXB0ID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHQvLyBBbGxvdyBvbmUgbGV2ZWwgb2YgbmVzdGluZ1xuXHRcdC9cXChcXCooPzpcXChcXCooPzpbXipdfFxcKig/IVxcKSkpKlxcKlxcKXwoPyFcXChcXCopW1xcc1xcU10pKj9cXCpcXCkvLFxuXHRcdC8tLS4rLyxcblx0XHQvIy4rL1xuXHRdLFxuXHQnc3RyaW5nJzogL1wiKD86XFxcXC58W15cIlxcXFxcXHJcXG5dKSpcIi8sXG5cdCdudW1iZXInOiAvKD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZS0/XFxkKyk/XFxiL2ksXG5cdCdvcGVyYXRvcic6IFtcblx0XHQvWyY94omg4omk4omlKitcXC1cXC/Dt15dfFs8Pl09Py8sXG5cdFx0L1xcYig/Oig/OnN0YXJ0fGJlZ2lufGVuZClzPyB3aXRofCg/Oig/OmRvZXMgbm90fGRvZXNuJ3QpIGNvbnRhaW58Y29udGFpbnM/KXwoPzppc3xpc24ndHxpcyBub3QpICg/OmlufGNvbnRhaW5lZCBieSl8KD86KD86aXN8aXNuJ3R8aXMgbm90KSApPyg/OmdyZWF0ZXJ8bGVzcykgdGhhbig/OiBvciBlcXVhbCk/KD86IHRvKT98KD86KD86ZG9lcyBub3R8ZG9lc24ndCkgY29tZXxjb21lcykgKD86YmVmb3JlfGFmdGVyKXwoPzppc3xpc24ndHxpcyBub3QpIGVxdWFsKD86IHRvKT98KD86KD86ZG9lcyBub3R8ZG9lc24ndCkgZXF1YWx8ZXF1YWxzfGVxdWFsIHRvfGlzbid0fGlzIG5vdCl8KD86YSApPyg/OnJlZig/OiB0byk/fHJlZmVyZW5jZSB0byl8KD86YW5kfG9yfGRpdnxtb2R8YXN8bm90KSlcXGIvXG5cdF0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmFib3V0fGFib3ZlfGFmdGVyfGFnYWluc3R8YXBhcnQgZnJvbXxhcm91bmR8YXNpZGUgZnJvbXxhdHxiYWNrfGJlZm9yZXxiZWdpbm5pbmd8YmVoaW5kfGJlbG93fGJlbmVhdGh8YmVzaWRlfGJldHdlZW58YnV0fGJ5fGNvbnNpZGVyaW5nfGNvbnRpbnVlfGNvcHl8ZG9lc3xlaWdodGh8ZWxzZXxlbmR8ZXF1YWx8ZXJyb3J8ZXZlcnl8ZXhpdHxmYWxzZXxmaWZ0aHxmaXJzdHxmb3J8Zm91cnRofGZyb218ZnJvbnR8Z2V0fGdpdmVufGdsb2JhbHxpZnxpZ25vcmluZ3xpbnxpbnN0ZWFkIG9mfGludG98aXN8aXR8aXRzfGxhc3R8bG9jYWx8bWV8bWlkZGxlfG15fG5pbnRofG9mfG9ufG9udG98b3V0IG9mfG92ZXJ8cHJvcHxwcm9wZXJ0eXxwdXR8cmVwZWF0fHJldHVybnxyZXR1cm5pbmd8c2Vjb25kfHNldHxzZXZlbnRofHNpbmNlfHNpeHRofHNvbWV8dGVsbHx0ZW50aHx0aGF0fHRoZXx0aGVufHRoaXJkfHRocm91Z2h8dGhydXx0aW1lb3V0fHRpbWVzfHRvfHRyYW5zYWN0aW9ufHRydWV8dHJ5fHVudGlsfHdoZXJlfHdoaWxlfHdob3NlfHdpdGh8d2l0aG91dClcXGIvLFxuXHQnY2xhc3MnOiB7XG5cdFx0cGF0dGVybjogL1xcYig/OmFsaWFzfGFwcGxpY2F0aW9ufGJvb2xlYW58Y2xhc3N8Y29uc3RhbnR8ZGF0ZXxmaWxlfGludGVnZXJ8bGlzdHxudW1iZXJ8UE9TSVggZmlsZXxyZWFsfHJlY29yZHxyZWZlcmVuY2V8UkdCIGNvbG9yfHNjcmlwdHx0ZXh0fGNlbnRpbWV0cmVzfGNlbnRpbWV0ZXJzfGZlZXR8aW5jaGVzfGtpbG9tZXRyZXN8a2lsb21ldGVyc3xtZXRyZXN8bWV0ZXJzfG1pbGVzfHlhcmRzfHNxdWFyZSBmZWV0fHNxdWFyZSBraWxvbWV0cmVzfHNxdWFyZSBraWxvbWV0ZXJzfHNxdWFyZSBtZXRyZXN8c3F1YXJlIG1ldGVyc3xzcXVhcmUgbWlsZXN8c3F1YXJlIHlhcmRzfGN1YmljIGNlbnRpbWV0cmVzfGN1YmljIGNlbnRpbWV0ZXJzfGN1YmljIGZlZXR8Y3ViaWMgaW5jaGVzfGN1YmljIG1ldHJlc3xjdWJpYyBtZXRlcnN8Y3ViaWMgeWFyZHN8Z2FsbG9uc3xsaXRyZXN8bGl0ZXJzfHF1YXJ0c3xncmFtc3xraWxvZ3JhbXN8b3VuY2VzfHBvdW5kc3xkZWdyZWVzIENlbHNpdXN8ZGVncmVlcyBGYWhyZW5oZWl0fGRlZ3JlZXMgS2VsdmluKVxcYi8sXG5cdFx0YWxpYXM6ICdidWlsdGluJ1xuXHR9LFxuXHQncHVuY3R1YXRpb24nOiAvW3t9KCk6LMKswqvCu+OAiuOAi10vXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==