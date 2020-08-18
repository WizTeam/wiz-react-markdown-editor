(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[327],{

/***/ "./node_modules/prismjs/components/prism-purebasic.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-purebasic.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Original Code by Bas Groothedde
!!MANY THANKS!! I never would have made this, regex and me will never be best friends ;)
==> https://codepen.io/ImagineProgramming/details/JYydBy/
slightly changed to pass all tests
*/


// PureBasic support, steal stuff from ansi-c
Prism.languages.purebasic = Prism.languages.extend('clike', {
	'comment': /;.*/,
	'keyword': /\b(?:declarecdll|declaredll|compilerselect|compilercase|compilerdefault|compilerendselect|compilererror|enableexplicit|disableexplicit|not|and|or|xor|calldebugger|debuglevel|enabledebugger|disabledebugger|restore|read|includepath|includebinary|threaded|runtime|with|endwith|structureunion|endstructureunion|align|newlist|newmap|interface|endinterface|extends|enumeration|endenumeration|swap|foreach|continue|fakereturn|goto|gosub|return|break|module|endmodule|declaremodule|enddeclaremodule|declare|declarec|prototype|prototypec|enableasm|disableasm|dim|redim|data|datasection|enddatasection|to|procedurereturn|debug|default|case|select|endselect|as|import|endimport|importc|compilerif|compilerelse|compilerendif|compilerelseif|end|structure|endstructure|while|wend|for|next|step|if|else|elseif|endif|repeat|until|procedure|proceduredll|procedurec|procedurecdll|endprocedure|protected|shared|static|global|define|includefile|xincludefile|macro|endmacro)\b/i,
	'function': /\b\w+(?:\.\w+)?\s*(?=\()/,
	'number': /(?:\$[\da-f]+|\b-?\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/
});

Prism.languages.insertBefore('purebasic', 'keyword', {
	'tag': /#\w+/,
	'asm': {
		pattern: /(^\s*)!.*/m,
		lookbehind: true,
		alias: 'tag',
		inside: {
			'comment': /;.*/,
			'string': {
				pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			// Anonymous label references, i.e.: jmp @b
			'label-reference-anonymous': {
				pattern: /(\s*!\s*j[a-z]+\s+)@[fb]/i,
				lookbehind: true,
				alias: 'fasm-label'
			},
			// Named label reference, i.e.: jne label1
			'label-reference-addressed': {
				pattern: /(\s*!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,
				lookbehind: true,
				alias: 'fasm-label'
			},
			'function': {
				pattern: /^(\s*!\s*)[\da-z]+(?=\s|$)/im,
				lookbehind: true
			},
			'function-inline': {
				pattern: /(\s*:\s*)[\da-z]+(?=\s)/i,
				lookbehind: true,
				alias: 'function'
			},
			'label': {
				pattern: /^(\s*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,
				lookbehind: true,
				alias: 'fasm-label'
			},
			'keyword': [
				/(?:extern|extern|global)[^;\r\n]*/i,
				/(?:CPU|FLOAT|DEFAULT).*/
			],
			'register': /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s|mm\d+)\b/i,
			'number': /(?:\b|-|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
			'operator': /[\[\]*+\-/%<>=&|$!,.:]/
		}
	}
});

delete Prism.languages.purebasic['class-name'];
delete Prism.languages.purebasic['boolean'];

Prism.languages.pbfasm = Prism.languages['purebasic'];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB1cmViYXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMzI3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbk9yaWdpbmFsIENvZGUgYnkgQmFzIEdyb290aGVkZGVcbiEhTUFOWSBUSEFOS1MhISBJIG5ldmVyIHdvdWxkIGhhdmUgbWFkZSB0aGlzLCByZWdleCBhbmQgbWUgd2lsbCBuZXZlciBiZSBiZXN0IGZyaWVuZHMgOylcbj09PiBodHRwczovL2NvZGVwZW4uaW8vSW1hZ2luZVByb2dyYW1taW5nL2RldGFpbHMvSll5ZEJ5L1xuc2xpZ2h0bHkgY2hhbmdlZCB0byBwYXNzIGFsbCB0ZXN0c1xuKi9cblxuXG4vLyBQdXJlQmFzaWMgc3VwcG9ydCwgc3RlYWwgc3R1ZmYgZnJvbSBhbnNpLWNcblByaXNtLmxhbmd1YWdlcy5wdXJlYmFzaWMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NvbW1lbnQnOiAvOy4qLyxcblx0J2tleXdvcmQnOiAvXFxiKD86ZGVjbGFyZWNkbGx8ZGVjbGFyZWRsbHxjb21waWxlcnNlbGVjdHxjb21waWxlcmNhc2V8Y29tcGlsZXJkZWZhdWx0fGNvbXBpbGVyZW5kc2VsZWN0fGNvbXBpbGVyZXJyb3J8ZW5hYmxlZXhwbGljaXR8ZGlzYWJsZWV4cGxpY2l0fG5vdHxhbmR8b3J8eG9yfGNhbGxkZWJ1Z2dlcnxkZWJ1Z2xldmVsfGVuYWJsZWRlYnVnZ2VyfGRpc2FibGVkZWJ1Z2dlcnxyZXN0b3JlfHJlYWR8aW5jbHVkZXBhdGh8aW5jbHVkZWJpbmFyeXx0aHJlYWRlZHxydW50aW1lfHdpdGh8ZW5kd2l0aHxzdHJ1Y3R1cmV1bmlvbnxlbmRzdHJ1Y3R1cmV1bmlvbnxhbGlnbnxuZXdsaXN0fG5ld21hcHxpbnRlcmZhY2V8ZW5kaW50ZXJmYWNlfGV4dGVuZHN8ZW51bWVyYXRpb258ZW5kZW51bWVyYXRpb258c3dhcHxmb3JlYWNofGNvbnRpbnVlfGZha2VyZXR1cm58Z290b3xnb3N1YnxyZXR1cm58YnJlYWt8bW9kdWxlfGVuZG1vZHVsZXxkZWNsYXJlbW9kdWxlfGVuZGRlY2xhcmVtb2R1bGV8ZGVjbGFyZXxkZWNsYXJlY3xwcm90b3R5cGV8cHJvdG90eXBlY3xlbmFibGVhc218ZGlzYWJsZWFzbXxkaW18cmVkaW18ZGF0YXxkYXRhc2VjdGlvbnxlbmRkYXRhc2VjdGlvbnx0b3xwcm9jZWR1cmVyZXR1cm58ZGVidWd8ZGVmYXVsdHxjYXNlfHNlbGVjdHxlbmRzZWxlY3R8YXN8aW1wb3J0fGVuZGltcG9ydHxpbXBvcnRjfGNvbXBpbGVyaWZ8Y29tcGlsZXJlbHNlfGNvbXBpbGVyZW5kaWZ8Y29tcGlsZXJlbHNlaWZ8ZW5kfHN0cnVjdHVyZXxlbmRzdHJ1Y3R1cmV8d2hpbGV8d2VuZHxmb3J8bmV4dHxzdGVwfGlmfGVsc2V8ZWxzZWlmfGVuZGlmfHJlcGVhdHx1bnRpbHxwcm9jZWR1cmV8cHJvY2VkdXJlZGxsfHByb2NlZHVyZWN8cHJvY2VkdXJlY2RsbHxlbmRwcm9jZWR1cmV8cHJvdGVjdGVkfHNoYXJlZHxzdGF0aWN8Z2xvYmFsfGRlZmluZXxpbmNsdWRlZmlsZXx4aW5jbHVkZWZpbGV8bWFjcm98ZW5kbWFjcm8pXFxiL2ksXG5cdCdmdW5jdGlvbic6IC9cXGJcXHcrKD86XFwuXFx3Kyk/XFxzKig/PVxcKCkvLFxuXHQnbnVtYmVyJzogLyg/OlxcJFtcXGRhLWZdK3xcXGItP1xcZCpcXC4/XFxkKyg/OmVbKy1dP1xcZCspPylcXGIvaSxcblx0J29wZXJhdG9yJzogLyg/OkBcXCo/fFxcP3xcXCopXFx3K3wtWz4tXT98XFwrXFwrP3whPT98PDw/PT98Pj4/PT98PT0/fCYmP3xcXHw/XFx8fFt+XiU/Ki9AXS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwdXJlYmFzaWMnLCAna2V5d29yZCcsIHtcblx0J3RhZyc6IC8jXFx3Ky8sXG5cdCdhc20nOiB7XG5cdFx0cGF0dGVybjogLyheXFxzKikhLiovbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAndGFnJyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdjb21tZW50JzogLzsuKi8sXG5cdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFtcIidgXSkoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8gQW5vbnltb3VzIGxhYmVsIHJlZmVyZW5jZXMsIGkuZS46IGptcCBAYlxuXHRcdFx0J2xhYmVsLXJlZmVyZW5jZS1hbm9ueW1vdXMnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFxzKiFcXHMqalthLXpdK1xccyspQFtmYl0vaSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdmYXNtLWxhYmVsJ1xuXHRcdFx0fSxcblx0XHRcdC8vIE5hbWVkIGxhYmVsIHJlZmVyZW5jZSwgaS5lLjogam5lIGxhYmVsMVxuXHRcdFx0J2xhYmVsLXJlZmVyZW5jZS1hZGRyZXNzZWQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFxzKiFcXHMqalthLXpdK1xccyspW0EtWi5fPyRAXVtcXHcuPyRAfiNdKi9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ2Zhc20tbGFiZWwnXG5cdFx0XHR9LFxuXHRcdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqIVxccyopW1xcZGEtel0rKD89XFxzfCQpL2ltLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J2Z1bmN0aW9uLWlubGluZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHMqOlxccyopW1xcZGEtel0rKD89XFxzKS9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdFx0fSxcblx0XHRcdCdsYWJlbCc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFxzKiFcXHMqKVtBLVphLXouXz8kQF1bXFx3Lj8kQH4jXSooPz06KS9tLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ2Zhc20tbGFiZWwnXG5cdFx0XHR9LFxuXHRcdFx0J2tleXdvcmQnOiBbXG5cdFx0XHRcdC8oPzpleHRlcm58ZXh0ZXJufGdsb2JhbClbXjtcXHJcXG5dKi9pLFxuXHRcdFx0XHQvKD86Q1BVfEZMT0FUfERFRkFVTFQpLiovXG5cdFx0XHRdLFxuXHRcdFx0J3JlZ2lzdGVyJzogL1xcYig/OnN0XFxkfFt4eXpdbW1cXGRcXGQ/fFtjZHRdclxcZHxyXFxkXFxkP1tid2RdP3xbZXJdP1thYmNkXXh8W2FiY2RdW2hsXXxbZXJdPyg/OmJwfHNwfHNpfGRpKXxbY2RlZmdzXXN8bW1cXGQrKVxcYi9pLFxuXHRcdFx0J251bWJlcic6IC8oPzpcXGJ8LXwoPz1cXCQpKSg/OjBbaHhdW1xcZGEtZl0qXFwuP1tcXGRhLWZdKyg/OnBbKy1dP1xcZCspP3xcXGRbXFxkYS1mXStbaHhdfFxcJFxcZFtcXGRhLWZdKnwwW29xXVswLTddK3xbMC03XStbb3FdfDBbYnldWzAxXSt8WzAxXStbYnldfDBbZHRdXFxkK3xcXGQqXFwuP1xcZCsoPzpcXC4/ZVsrLV0/XFxkKyk/W2R0XT8pXFxiL2ksXG5cdFx0XHQnb3BlcmF0b3InOiAvW1xcW1xcXSorXFwtLyU8Pj0mfCQhLC46XS9cblx0XHR9XG5cdH1cbn0pO1xuXG5kZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnB1cmViYXNpY1snY2xhc3MtbmFtZSddO1xuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5wdXJlYmFzaWNbJ2Jvb2xlYW4nXTtcblxuUHJpc20ubGFuZ3VhZ2VzLnBiZmFzbSA9IFByaXNtLmxhbmd1YWdlc1sncHVyZWJhc2ljJ107XG4iXSwic291cmNlUm9vdCI6IiJ9