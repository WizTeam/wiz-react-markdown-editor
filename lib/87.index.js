(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/prismjs/components/prism-dart.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-dart.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.dart = Prism.languages.extend('clike', {
	'string': [
		{
			pattern: /r?("""|''')[\s\S]*?\1/,
			greedy: true
		},
		{
			pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		}
	],
	'keyword': [
		/\b(?:async|sync|yield)\*/,
		/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|Function|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/
	],
	'operator': /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
});

Prism.languages.insertBefore('dart','function',{
	'metadata': {
		pattern: /@\w+/,
		alias: 'symbol'
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiODcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuZGFydCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnc3RyaW5nJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9yPyhcIlwiXCJ8JycnKVtcXHNcXFNdKj9cXDEvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvcj8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2tleXdvcmQnOiBbXG5cdFx0L1xcYig/OmFzeW5jfHN5bmN8eWllbGQpXFwqLyxcblx0XHQvXFxiKD86YWJzdHJhY3R8YXNzZXJ0fGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8Y292YXJpYW50fGRlZmF1bHR8ZGVmZXJyZWR8ZG98ZHluYW1pY3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuc2lvbnxleHRlcm5hbHxleHRlbmRzfGZhY3Rvcnl8ZmluYWx8ZmluYWxseXxmb3J8RnVuY3Rpb258Z2V0fGhpZGV8aWZ8aW1wbGVtZW50c3xpbnRlcmZhY2V8aW1wb3J0fGlufGxpYnJhcnl8bWl4aW58bmV3fG51bGx8b258b3BlcmF0b3J8cGFydHxyZXRocm93fHJldHVybnxzZXR8c2hvd3xzdGF0aWN8c3VwZXJ8c3dpdGNofHN5bmN8dGhpc3x0aHJvd3x0cnl8dHlwZWRlZnx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi9cblx0XSxcblx0J29wZXJhdG9yJzogL1xcYmlzIXxcXGIoPzphc3xpcylcXGJ8XFwrXFwrfC0tfCYmfFxcfFxcfHw8PD0/fD4+PT98fig/OlxcLz0/KT98WytcXC0qXFwvJSZefD0hPD5dPT98XFw/L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2RhcnQnLCdmdW5jdGlvbicse1xuXHQnbWV0YWRhdGEnOiB7XG5cdFx0cGF0dGVybjogL0BcXHcrLyxcblx0XHRhbGlhczogJ3N5bWJvbCdcblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9