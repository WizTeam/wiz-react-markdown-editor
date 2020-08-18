(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[427],{

/***/ "./node_modules/prismjs/components/prism-verilog.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-verilog.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.verilog = {
	'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
	'string': {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: true
	},
	// support for any kernel function (ex: $display())
	'property': /\B\$\w+\b/,
	// support for user defined constants (ex: `define)
	'constant': /\B`\w+\b/,
	'function': /\w+(?=\()/,
	// support for verilog and system verilog keywords
	'keyword': /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
	// bold highlighting for all verilog and system verilog logic blocks
	'important': /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
	// support for time ticks, vectors, and real numbers
	'number': /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
	'operator': /[-+{}^~%*\/?=!<>&|]+/,
	'punctuation': /[[\];(),.:]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXZlcmlsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixFIiwiZmlsZSI6IjQyNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy52ZXJpbG9nID0ge1xuXHQnY29tbWVudCc6IC9cXC9cXC8uKnxcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwiLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gc3VwcG9ydCBmb3IgYW55IGtlcm5lbCBmdW5jdGlvbiAoZXg6ICRkaXNwbGF5KCkpXG5cdCdwcm9wZXJ0eSc6IC9cXEJcXCRcXHcrXFxiLyxcblx0Ly8gc3VwcG9ydCBmb3IgdXNlciBkZWZpbmVkIGNvbnN0YW50cyAoZXg6IGBkZWZpbmUpXG5cdCdjb25zdGFudCc6IC9cXEJgXFx3K1xcYi8sXG5cdCdmdW5jdGlvbic6IC9cXHcrKD89XFwoKS8sXG5cdC8vIHN1cHBvcnQgZm9yIHZlcmlsb2cgYW5kIHN5c3RlbSB2ZXJpbG9nIGtleXdvcmRzXG5cdCdrZXl3b3JkJzogL1xcYig/OmFsaWFzfGFuZHxhc3NlcnR8YXNzaWdufGFzc3VtZXxhdXRvbWF0aWN8YmVmb3JlfGJlZ2lufGJpbmR8Ymluc3xiaW5zb2Z8Yml0fGJyZWFrfGJ1ZnxidWZpZjB8YnVmaWYxfGJ5dGV8Y2xhc3N8Y2FzZXxjYXNleHxjYXNlenxjZWxsfGNoYW5kbGV8Y2xvY2tpbmd8Y21vc3xjb25maWd8Y29uc3R8Y29uc3RyYWludHxjb250ZXh0fGNvbnRpbnVlfGNvdmVyfGNvdmVyZ3JvdXB8Y292ZXJwb2ludHxjcm9zc3xkZWFzc2lnbnxkZWZhdWx0fGRlZnBhcmFtfGRlc2lnbnxkaXNhYmxlfGRpc3R8ZG98ZWRnZXxlbHNlfGVuZHxlbmRjYXNlfGVuZGNsYXNzfGVuZGNsb2NraW5nfGVuZGNvbmZpZ3xlbmRmdW5jdGlvbnxlbmRnZW5lcmF0ZXxlbmRncm91cHxlbmRpbnRlcmZhY2V8ZW5kbW9kdWxlfGVuZHBhY2thZ2V8ZW5kcHJpbWl0aXZlfGVuZHByb2dyYW18ZW5kcHJvcGVydHl8ZW5kc3BlY2lmeXxlbmRzZXF1ZW5jZXxlbmR0YWJsZXxlbmR0YXNrfGVudW18ZXZlbnR8ZXhwZWN0fGV4cG9ydHxleHRlbmRzfGV4dGVybnxmaW5hbHxmaXJzdF9tYXRjaHxmb3J8Zm9yY2V8Zm9yZWFjaHxmb3JldmVyfGZvcmt8Zm9ya2pvaW58ZnVuY3Rpb258Z2VuZXJhdGV8Z2VudmFyfGhpZ2h6MHxoaWdoejF8aWZ8aWZmfGlmbm9uZXxpZ25vcmVfYmluc3xpbGxlZ2FsX2JpbnN8aW1wb3J0fGluY2RpcnxpbmNsdWRlfGluaXRpYWx8aW5vdXR8aW5wdXR8aW5zaWRlfGluc3RhbmNlfGludHxpbnRlZ2VyfGludGVyZmFjZXxpbnRlcnNlY3R8am9pbnxqb2luX2FueXxqb2luX25vbmV8bGFyZ2V8bGlibGlzdHxsaWJyYXJ5fGxvY2FsfGxvY2FscGFyYW18bG9naWN8bG9uZ2ludHxtYWNyb21vZHVsZXxtYXRjaGVzfG1lZGl1bXxtb2Rwb3J0fG1vZHVsZXxuYW5kfG5lZ2VkZ2V8bmV3fG5tb3N8bm9yfG5vc2hvd2NhbmNlbGxlZHxub3R8bm90aWYwfG5vdGlmMXxudWxsfG9yfG91dHB1dHxwYWNrYWdlfHBhY2tlZHxwYXJhbWV0ZXJ8cG1vc3xwb3NlZGdlfHByaW1pdGl2ZXxwcmlvcml0eXxwcm9ncmFtfHByb3BlcnR5fHByb3RlY3RlZHxwdWxsMHxwdWxsMXxwdWxsZG93bnxwdWxsdXB8cHVsc2VzdHlsZV9vbmV2ZW50fHB1bHNlc3R5bGVfb25kZXRlY3R8cHVyZXxyYW5kfHJhbmRjfHJhbmRjYXNlfHJhbmRzZXF1ZW5jZXxyY21vc3xyZWFsfHJlYWx0aW1lfHJlZnxyZWd8cmVsZWFzZXxyZXBlYXR8cmV0dXJufHJubW9zfHJwbW9zfHJ0cmFufHJ0cmFuaWYwfHJ0cmFuaWYxfHNjYWxhcmVkfHNlcXVlbmNlfHNob3J0aW50fHNob3J0cmVhbHxzaG93Y2FuY2VsbGVkfHNpZ25lZHxzbWFsbHxzb2x2ZXxzcGVjaWZ5fHNwZWNwYXJhbXxzdGF0aWN8c3RyaW5nfHN0cm9uZzB8c3Ryb25nMXxzdHJ1Y3R8c3VwZXJ8c3VwcGx5MHxzdXBwbHkxfHRhYmxlfHRhZ2dlZHx0YXNrfHRoaXN8dGhyb3VnaG91dHx0aW1lfHRpbWVwcmVjaXNpb258dGltZXVuaXR8dHJhbnx0cmFuaWYwfHRyYW5pZjF8dHJpfHRyaTB8dHJpMXx0cmlhbmR8dHJpb3J8dHJpcmVnfHR5cGV8dHlwZWRlZnx1bmlvbnx1bmlxdWV8dW5zaWduZWR8dXNlfHV3aXJlfHZhcnx2ZWN0b3JlZHx2aXJ0dWFsfHZvaWR8d2FpdHx3YWl0X29yZGVyfHdhbmR8d2VhazB8d2VhazF8d2hpbGV8d2lsZGNhcmR8d2lyZXx3aXRofHdpdGhpbnx3b3J8eG5vcnx4b3IpXFxiLyxcblx0Ly8gYm9sZCBoaWdobGlnaHRpbmcgZm9yIGFsbCB2ZXJpbG9nIGFuZCBzeXN0ZW0gdmVyaWxvZyBsb2dpYyBibG9ja3Ncblx0J2ltcG9ydGFudCc6IC9cXGIoPzphbHdheXNfbGF0Y2h8YWx3YXlzX2NvbWJ8YWx3YXlzX2ZmfGFsd2F5cylcXGIgP0A/Lyxcblx0Ly8gc3VwcG9ydCBmb3IgdGltZSB0aWNrcywgdmVjdG9ycywgYW5kIHJlYWwgbnVtYmVyc1xuXHQnbnVtYmVyJzogL1xcQiMjP1xcZCt8KD86XFxiXFxkKyk/J1tvZGJoXSA/W1xcZGEtZnp4Xz9dK3xcXGJcXGQqWy5fXT9cXGQrKD86ZVstK10/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bLSt7fV5+JSpcXC8/PSE8PiZ8XSsvLFxuXHQncHVuY3R1YXRpb24nOiAvW1tcXF07KCksLjpdL1xufTsiXSwic291cmNlUm9vdCI6IiJ9