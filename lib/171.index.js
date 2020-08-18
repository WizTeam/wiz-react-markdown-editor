(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ "./node_modules/prismjs/components/prism-ichigojam.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ichigojam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// according to the offical reference (EN)
// https://ichigojam.net/IchigoJam-en.html
Prism.languages.ichigojam = {
	'comment': /(?:\B'|REM)(?:[^\n\r]*)/i,
	'string': {
		pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
		greedy: true
	},
	'number': /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
	'keyword': /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
	'function': /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
	'label': /(?:\B@[^\s]+)/i,
	'operator': /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
	'punctuation': /[\[,;:()\]]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWljaGlnb2phbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsRSIsImZpbGUiOiIxNzEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhY2NvcmRpbmcgdG8gdGhlIG9mZmljYWwgcmVmZXJlbmNlIChFTilcbi8vIGh0dHBzOi8vaWNoaWdvamFtLm5ldC9JY2hpZ29KYW0tZW4uaHRtbFxuUHJpc20ubGFuZ3VhZ2VzLmljaGlnb2phbSA9IHtcblx0J2NvbW1lbnQnOiAvKD86XFxCJ3xSRU0pKD86W15cXG5cXHJdKikvaSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpcIlwifFshIyQlJicoKSosXFwvOjs8PT4/Xl8gK1xcLS5BLVpcXGRdKSpcIi9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzogL1xcQiNbMC05QS1GXSt8XFxCYFswMV0rfCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OkVbKy1dP1xcZCspPy9pLFxuXHQna2V5d29yZCc6IC9cXGIoPzpCRUVQfEJQU3xDQVNFfENMRUFSfENMS3xDTE98Q0xQfENMU3xDTFR8Q0xWfENPTlR8Q09QWXxFTFNFfEVORHxGSUxFfEZJTEVTfEZPUnxHT1NVQnxHU0J8R09UT3xJRnxJTlBVVHxLQkR8TEVEfExFVHxMSVNUfExPQUR8TE9DQVRFfExSVU58TkVXfE5FWFR8T1VUfFJJR0hUfFBMQVl8UE9LRXxQUklOVHxQV018UkVNfFJFTlVNfFJFU0VUfFJFVFVSTnxSVE58UlVOfFNBVkV8U0NST0xMfFNMRUVQfFNSTkR8U1RFUHxTVE9QfFNVQnxURU1QT3xUSEVOfFRPfFVBUlR8VklERU98V0FJVCkoPzpcXCR8XFxiKS9pLFxuXHQnZnVuY3Rpb24nOiAvXFxiKD86QUJTfEFOQXxBU0N8QklOfEJUTnxERUN8RU5EfEZSRUV8SEVMUHxIRVh8STJDUnxJMkNXfElOfElOS0VZfExFTnxMSU5FfFBFRUt8Uk5EfFNDUnxTT1VORHxTVFJ8VElDS3xVU1J8VkVSfFZQRUVLfFpFUikoPzpcXCR8XFxiKS9pLFxuXHQnbGFiZWwnOiAvKD86XFxCQFteXFxzXSspL2ksXG5cdCdvcGVyYXRvcic6IC88Wz0+XT98Pj0/fFxcfFxcfHwmJnxbK1xcLSpcXC89fCZefiFdfFxcYig/OkFORHxOT1R8T1IpXFxiL2ksXG5cdCdwdW5jdHVhdGlvbic6IC9bXFxbLDs6KClcXF1dL1xufTsiXSwic291cmNlUm9vdCI6IiJ9