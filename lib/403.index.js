(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[403],{

/***/ "./node_modules/prismjs/components/prism-tcl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tcl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.tcl = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true
	},
	'string': {
		pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
		greedy: true
	},
	'variable': [
		{
			pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
			lookbehind: true
		},
		{
			pattern: /(\$){[^}]+}/,
			lookbehind: true
		},
		{
			pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
			lookbehind: true
		}
	],
	'function': {
		pattern: /(^\s*proc[ \t]+)[^\s]+/m,
		lookbehind: true
	},
	'builtin': [
		{
			pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
			lookbehind: true
		},
		/\b(?:elseif|else)\b/
	],
	'scope': {
		pattern: /(^\s*)(?:global|upvar|variable)\b/m,
		lookbehind: true,
		alias: 'constant'
	},
	'keyword': {
		pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
		lookbehind: true
	},
	'operator': /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
	'punctuation': /[{}()\[\]]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsR0FBRyxHQUFHO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLG9CQUFvQjtBQUNwQiIsImZpbGUiOiI0MDMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMudGNsID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlwiLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3ZhcmlhYmxlJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFwkKSg/Ojo6KT8oPzpbYS16QS1aMC05XSs6OikqXFx3Ky8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcJCl7W159XSt9Lyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXlxccypzZXRbIFxcdF0rKSg/Ojo6KT8oPzpbYS16QS1aMC05XSs6OikqXFx3Ky9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2Z1bmN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC8oXlxccypwcm9jWyBcXHRdKylbXlxcc10rL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnYnVpbHRpbic6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF5cXHMqKSg/OnByb2N8cmV0dXJufGNsYXNzfGVycm9yfGV2YWx8ZXhpdHxmb3J8Zm9yZWFjaHxpZnxzd2l0Y2h8d2hpbGV8YnJlYWt8Y29udGludWUpXFxiL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQvXFxiKD86ZWxzZWlmfGVsc2UpXFxiL1xuXHRdLFxuXHQnc2NvcGUnOiB7XG5cdFx0cGF0dGVybjogLyheXFxzKikoPzpnbG9iYWx8dXB2YXJ8dmFyaWFibGUpXFxiL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbnN0YW50J1xuXHR9LFxuXHQna2V5d29yZCc6IHtcblx0XHRwYXR0ZXJuOiAvKF5cXHMqfFxcWykoPzphZnRlcnxhcHBlbmR8YXBwbHl8YXJyYXl8YXV0b18oPzpleGVjb2t8aW1wb3J0fGxvYWR8bWtpbmRleHxxdWFsaWZ5fHJlc2V0KXxhdXRvbWtpbmRleF9vbGR8YmdlcnJvcnxiaW5hcnl8Y2F0Y2h8Y2R8Y2hhbnxjbG9ja3xjbG9zZXxjb25jYXR8ZGRlfGRpY3R8ZW5jb2Rpbmd8ZW9mfGV4ZWN8ZXhwcnxmYmxvY2tlZHxmY29uZmlndXJlfGZjb3B5fGZpbGUoPzpldmVudHxuYW1lKT98Zmx1c2h8Z2V0c3xnbG9ifGhpc3Rvcnl8aHR0cHxpbmNyfGluZm98aW50ZXJwfGpvaW58bGFwcGVuZHxsYXNzaWdufGxpbmRleHxsaW5zZXJ0fGxpc3R8bGxlbmd0aHxsb2FkfGxyYW5nZXxscmVwZWF0fGxyZXBsYWNlfGxyZXZlcnNlfGxzZWFyY2h8bHNldHxsc29ydHxtYXRoKD86ZnVuY3xvcCl8bWVtb3J5fG1zZ2NhdHxuYW1lc3BhY2V8b3BlbnxwYWNrYWdlfHBhcnJheXxwaWR8cGtnX21rSW5kZXh8cGxhdGZvcm18cHV0c3xwd2R8cmVfc3ludGF4fHJlYWR8cmVmY2hhbnxyZWdleHB8cmVnaXN0cnl8cmVnc3VifHJlbmFtZXxTYWZlX0Jhc2V8c2NhbnxzZWVrfHNldHxzb2NrZXR8c291cmNlfHNwbGl0fHN0cmluZ3xzdWJzdHxUY2x8dGNsKD86X2VuZE9mV29yZHxfZmluZExpYnJhcnl8c3RhcnRPZig/Ok5leHR8UHJldmlvdXMpV29yZHx3b3JkQnJlYWsoPzpBZnRlcnxCZWZvcmUpfHRlc3R8dmFycyl8dGVsbHx0aW1lfHRtfHRyYWNlfHVua25vd258dW5sb2FkfHVuc2V0fHVwZGF0ZXx1cGxldmVsfHZ3YWl0KVxcYi9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J29wZXJhdG9yJzogLyE9P3xcXCpcXCo/fD09fCYmP3xcXHxcXHw/fDxbPTxdP3w+Wz0+XT98Wy0rflxcLyU/Xl18XFxiKD86ZXF8bmV8aW58bmkpXFxiLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fSgpXFxbXFxdXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9