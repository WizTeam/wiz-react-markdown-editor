(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[369],{

/***/ "./node_modules/prismjs/components/prism-shell-session.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-shell-session.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	// CAREFUL!
	// The following patterns are concatenated, so the group referenced by a back reference is non-obvious!

	var strings = [
		// normal string
		// 1 capturing group
		/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/.source,

		// here doc
		// 1 capturing group
		/<<-?\s*(\w+?)[ \t]*(?!.)[\s\S]*?[\r\n]\2/.source,

		// here doc quoted
		// 2 capturing group
		/<<-?\s*(["'])(\w+)\3[ \t]*(?!.)[\s\S]*?[\r\n]\4/.source
	].join('|');

	Prism.languages['shell-session'] = {
		'info': {
			// foo@bar:~/files$ exit
			// foo@bar$ exit
			pattern: /^[^\r\n$#*!]+(?=[$#])/m,
			alias: 'punctuation',
			inside: {
				'path': {
					pattern: /(:)[\s\S]+/,
					lookbehind: true
				},
				'user': /^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,
				'punctuation': /:/
			}
		},
		'command': {
			pattern: RegExp(/[$#](?:[^\\\r\n'"<]|\\.|<<str>>)+/.source.replace(/<<str>>/g, function () { return strings; })),
			greedy: true,
			inside: {
				'bash': {
					pattern: /(^[$#]\s*)[\s\S]+/,
					lookbehind: true,
					alias: 'language-bash',
					inside: Prism.languages.bash
				},
				'shell-symbol': {
					pattern: /^[$#]/,
					alias: 'important'
				}
			}
		},
		'output': /.(?:.*(?:[\r\n]|.$))*/
	};

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNoZWxsLXNlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0ZBQStGLGdCQUFnQixFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjM2OS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHQvLyBDQVJFRlVMIVxuXHQvLyBUaGUgZm9sbG93aW5nIHBhdHRlcm5zIGFyZSBjb25jYXRlbmF0ZWQsIHNvIHRoZSBncm91cCByZWZlcmVuY2VkIGJ5IGEgYmFjayByZWZlcmVuY2UgaXMgbm9uLW9idmlvdXMhXG5cblx0dmFyIHN0cmluZ3MgPSBbXG5cdFx0Ly8gbm9ybWFsIHN0cmluZ1xuXHRcdC8vIDEgY2FwdHVyaW5nIGdyb3VwXG5cdFx0LyhbXCInXSkoPzpcXFxcW1xcc1xcU118XFwkXFwoW14pXStcXCl8YFteYF0rYHwoPyFcXDEpW15cXFxcXSkqXFwxLy5zb3VyY2UsXG5cblx0XHQvLyBoZXJlIGRvY1xuXHRcdC8vIDEgY2FwdHVyaW5nIGdyb3VwXG5cdFx0Lzw8LT9cXHMqKFxcdys/KVsgXFx0XSooPyEuKVtcXHNcXFNdKj9bXFxyXFxuXVxcMi8uc291cmNlLFxuXG5cdFx0Ly8gaGVyZSBkb2MgcXVvdGVkXG5cdFx0Ly8gMiBjYXB0dXJpbmcgZ3JvdXBcblx0XHQvPDwtP1xccyooW1wiJ10pKFxcdyspXFwzWyBcXHRdKig/IS4pW1xcc1xcU10qP1tcXHJcXG5dXFw0Ly5zb3VyY2Vcblx0XS5qb2luKCd8Jyk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzWydzaGVsbC1zZXNzaW9uJ10gPSB7XG5cdFx0J2luZm8nOiB7XG5cdFx0XHQvLyBmb29AYmFyOn4vZmlsZXMkIGV4aXRcblx0XHRcdC8vIGZvb0BiYXIkIGV4aXRcblx0XHRcdHBhdHRlcm46IC9eW15cXHJcXG4kIyohXSsoPz1bJCNdKS9tLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbicsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3BhdGgnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyg6KVtcXHNcXFNdKy8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQndXNlcic6IC9eW15cXHNAOiQjKiEvXFxcXF0rQFteXFxzQDokIyohL1xcXFxdKyg/PTp8JCkvLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvOi9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjb21tYW5kJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC9bJCNdKD86W15cXFxcXFxyXFxuJ1wiPF18XFxcXC58PDxzdHI+PikrLy5zb3VyY2UucmVwbGFjZSgvPDxzdHI+Pi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdzOyB9KSksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Jhc2gnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyheWyQjXVxccyopW1xcc1xcU10rLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtYmFzaCcsXG5cdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuYmFzaFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc2hlbGwtc3ltYm9sJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eWyQjXS8sXG5cdFx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdvdXRwdXQnOiAvLig/Oi4qKD86W1xcclxcbl18LiQpKSovXG5cdH07XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=