(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/prismjs/components/prism-asm6502.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-asm6502.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.asm6502 = {
	'comment': /;.*/,
	'directive': {
		pattern: /\.\w+(?= )/,
		alias: 'keyword'
	},
	'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
	'opcode': {
		pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
		alias: 'property'
	},
	'hexnumber': {
		pattern: /#?\$[\da-f]{2,4}\b/i,
		alias: 'string'
	},
	'binarynumber': {
		pattern: /#?%[01]+\b/,
		alias: 'string'
	},
	'decimalnumber': {
		pattern: /#?\b\d+\b/,
		alias: 'string'
	},
	'register': {
		pattern: /\b[xya]\b/i,
		alias: 'variable'
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFzbTY1MDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjI5LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmFzbTY1MDIgPSB7XG5cdCdjb21tZW50JzogLzsuKi8sXG5cdCdkaXJlY3RpdmUnOiB7XG5cdFx0cGF0dGVybjogL1xcLlxcdysoPz0gKS8sXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHQnc3RyaW5nJzogLyhbXCInYF0pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdCdvcGNvZGUnOiB7XG5cdFx0cGF0dGVybjogL1xcYig/OmFkY3xhbmR8YXNsfGJjY3xiY3N8YmVxfGJpdHxibWl8Ym5lfGJwbHxicmt8YnZjfGJ2c3xjbGN8Y2xkfGNsaXxjbHZ8Y21wfGNweHxjcHl8ZGVjfGRleHxkZXl8ZW9yfGluY3xpbnh8aW55fGptcHxqc3J8bGRhfGxkeHxsZHl8bHNyfG5vcHxvcmF8cGhhfHBocHxwbGF8cGxwfHJvbHxyb3J8cnRpfHJ0c3xzYmN8c2VjfHNlZHxzZWl8c3RhfHN0eHxzdHl8dGF4fHRheXx0c3h8dHhhfHR4c3x0eWF8QURDfEFORHxBU0x8QkNDfEJDU3xCRVF8QklUfEJNSXxCTkV8QlBMfEJSS3xCVkN8QlZTfENMQ3xDTER8Q0xJfENMVnxDTVB8Q1BYfENQWXxERUN8REVYfERFWXxFT1J8SU5DfElOWHxJTll8Sk1QfEpTUnxMREF8TERYfExEWXxMU1J8Tk9QfE9SQXxQSEF8UEhQfFBMQXxQTFB8Uk9MfFJPUnxSVEl8UlRTfFNCQ3xTRUN8U0VEfFNFSXxTVEF8U1RYfFNUWXxUQVh8VEFZfFRTWHxUWEF8VFhTfFRZQSlcXGIvLFxuXHRcdGFsaWFzOiAncHJvcGVydHknXG5cdH0sXG5cdCdoZXhudW1iZXInOiB7XG5cdFx0cGF0dGVybjogLyM/XFwkW1xcZGEtZl17Miw0fVxcYi9pLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQnYmluYXJ5bnVtYmVyJzoge1xuXHRcdHBhdHRlcm46IC8jPyVbMDFdK1xcYi8sXG5cdFx0YWxpYXM6ICdzdHJpbmcnXG5cdH0sXG5cdCdkZWNpbWFsbnVtYmVyJzoge1xuXHRcdHBhdHRlcm46IC8jP1xcYlxcZCtcXGIvLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQncmVnaXN0ZXInOiB7XG5cdFx0cGF0dGVybjogL1xcYlt4eWFdXFxiL2ksXG5cdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=