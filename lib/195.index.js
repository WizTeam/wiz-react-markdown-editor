(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

/***/ "./node_modules/prismjs/components/prism-javastacktrace.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javastacktrace.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javastacktrace = {

	// java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
	// Caused by: java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
	// Caused by: com.example.myproject.MyProjectServletException
	// Caused by: MidLevelException: LowLevelException
	// Suppressed: Resource$CloseFailException: Resource ID = 0
	'summary': {
		pattern: /^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?:\:.*)?$/m,
		inside: {
			'keyword': {
				pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
				lookbehind: true
			},

			// the current thread if the summary starts with 'Exception in thread'
			'string': {
				pattern: /^(\s*)"[^"]*"/,
				lookbehind: true
			},
			'exceptions': {
				pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
				lookbehind: true,
				inside: {
					'class-name': /[\w$]+(?=$|:)/,
					'namespace': /[a-z]\w*/,
					'punctuation': /[.:]/
				}
			},
			'message': {
				pattern: /(:\s*)\S.*/,
				lookbehind: true,
				alias: 'string'
			},
			'punctuation': /[:]/
		}
	},

	// at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)
	// at org.hsqldb.jdbc.Util.throwError(Unknown Source) here could be some notes
	// at Util.<init>(Unknown Source)
	'stack-frame': {
		pattern: /^[\t ]*at [\w$.]+(?:<init>)?\([^()]*\)/m,
		inside: {
			'keyword': {
				pattern: /^(\s*)at/,
				lookbehind: true
			},
			'source': [
				// (Main.java:15)
				// (Main.scala:15)
				{
					pattern: /(\()\w+.\w+:\d+(?=\))/,
					lookbehind: true,
					inside: {
						'file': /^\w+\.\w+/,
						'punctuation': /:/,
						'line-number': {
							pattern: /\d+/,
							alias: 'number'
						}
					}
				},
				// (Unknown Source)
				// (Native Method)
				// (...something...)
				{
					pattern: /(\()[^()]*(?=\))/,
					lookbehind: true,
					inside: {
						'keyword': /^(?:Unknown Source|Native Method)$/
					}
				}
			],
			'class-name': /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
			'function': /(?:<init>|[\w$]+)(?=\()/,
			'namespace': /[a-z]\w*/,
			'punctuation': /[.()]/
		}
	},

	// ... 32 more
	// ... 32 common frames omitted
	'more': {
		pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
		inside: {
			'punctuation': /\.{3}/,
			'number': /\d+/,
			'keyword': /\b[a-z]+(?: [a-z]+)*\b/
		}
	}

};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzdGFja3RyYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixFQUFFO0FBQ3hCO0FBQ0Esc0JBQXNCLEVBQUU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTk1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmphdmFzdGFja3RyYWNlID0ge1xuXG5cdC8vIGphdmEuc3FsLlNRTEV4Y2VwdGlvbjogVmlvbGF0aW9uIG9mIHVuaXF1ZSBjb25zdHJhaW50IE1ZX0VOVElUWV9VS18xOiBkdXBsaWNhdGUgdmFsdWUocykgZm9yIGNvbHVtbihzKSBNWV9DT0xVTU4gaW4gc3RhdGVtZW50IFsuLi5dXG5cdC8vIENhdXNlZCBieTogamF2YS5zcWwuU1FMRXhjZXB0aW9uOiBWaW9sYXRpb24gb2YgdW5pcXVlIGNvbnN0cmFpbnQgTVlfRU5USVRZX1VLXzE6IGR1cGxpY2F0ZSB2YWx1ZShzKSBmb3IgY29sdW1uKHMpIE1ZX0NPTFVNTiBpbiBzdGF0ZW1lbnQgWy4uLl1cblx0Ly8gQ2F1c2VkIGJ5OiBjb20uZXhhbXBsZS5teXByb2plY3QuTXlQcm9qZWN0U2VydmxldEV4Y2VwdGlvblxuXHQvLyBDYXVzZWQgYnk6IE1pZExldmVsRXhjZXB0aW9uOiBMb3dMZXZlbEV4Y2VwdGlvblxuXHQvLyBTdXBwcmVzc2VkOiBSZXNvdXJjZSRDbG9zZUZhaWxFeGNlcHRpb246IFJlc291cmNlIElEID0gMFxuXHQnc3VtbWFyeSc6IHtcblx0XHRwYXR0ZXJuOiAvXltcXHQgXSooPzooPzpDYXVzZWQgYnk6fFN1cHByZXNzZWQ6fEV4Y2VwdGlvbiBpbiB0aHJlYWQgXCJbXlwiXSpcIilbXFx0IF0rKT9bXFx3JC5dKyg/OlxcOi4qKT8kL20sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQna2V5d29yZCc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFxzKikoPzooPzpDYXVzZWQgYnl8U3VwcHJlc3NlZCkoPz06KXxFeGNlcHRpb24gaW4gdGhyZWFkKS9tLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyB0aGUgY3VycmVudCB0aHJlYWQgaWYgdGhlIHN1bW1hcnkgc3RhcnRzIHdpdGggJ0V4Y2VwdGlvbiBpbiB0aHJlYWQnXG5cdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVwiW15cIl0qXCIvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J2V4Y2VwdGlvbnMnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKDo/XFxzKilbXFx3JC5dKyg/PTp8JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnY2xhc3MtbmFtZSc6IC9bXFx3JF0rKD89JHw6KS8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9bYS16XVxcdyovLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLjpdL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J21lc3NhZ2UnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oOlxccyopXFxTLiovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWzpdL1xuXHRcdH1cblx0fSxcblxuXHQvLyBhdCBvcmcubW9ydGJheS5qZXR0eS5zZXJ2bGV0LlNlcnZsZXRIYW5kbGVyJENhY2hlZENoYWluLmRvRmlsdGVyKFNlcnZsZXRIYW5kbGVyLmphdmE6MTE2Nilcblx0Ly8gYXQgb3JnLmhzcWxkYi5qZGJjLlV0aWwudGhyb3dFcnJvcihVbmtub3duIFNvdXJjZSkgaGVyZSBjb3VsZCBiZSBzb21lIG5vdGVzXG5cdC8vIGF0IFV0aWwuPGluaXQ+KFVua25vd24gU291cmNlKVxuXHQnc3RhY2stZnJhbWUnOiB7XG5cdFx0cGF0dGVybjogL15bXFx0IF0qYXQgW1xcdyQuXSsoPzo8aW5pdD4pP1xcKFteKCldKlxcKS9tLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKFxccyopYXQvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J3NvdXJjZSc6IFtcblx0XHRcdFx0Ly8gKE1haW4uamF2YToxNSlcblx0XHRcdFx0Ly8gKE1haW4uc2NhbGE6MTUpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcKClcXHcrLlxcdys6XFxkKyg/PVxcKSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQnZmlsZSc6IC9eXFx3K1xcLlxcdysvLFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzovLFxuXHRcdFx0XHRcdFx0J2xpbmUtbnVtYmVyJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXFxkKy8sXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiAnbnVtYmVyJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gKFVua25vd24gU291cmNlKVxuXHRcdFx0XHQvLyAoTmF0aXZlIE1ldGhvZClcblx0XHRcdFx0Ly8gKC4uLnNvbWV0aGluZy4uLilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFwoKVteKCldKig/PVxcKSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQna2V5d29yZCc6IC9eKD86VW5rbm93biBTb3VyY2V8TmF0aXZlIE1ldGhvZCkkL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdCdjbGFzcy1uYW1lJzogL1tcXHckXSsoPz1cXC4oPzo8aW5pdD58W1xcdyRdKylcXCgpLyxcblx0XHRcdCdmdW5jdGlvbic6IC8oPzo8aW5pdD58W1xcdyRdKykoPz1cXCgpLyxcblx0XHRcdCduYW1lc3BhY2UnOiAvW2Etel1cXHcqLyxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLigpXS9cblx0XHR9XG5cdH0sXG5cblx0Ly8gLi4uIDMyIG1vcmVcblx0Ly8gLi4uIDMyIGNvbW1vbiBmcmFtZXMgb21pdHRlZFxuXHQnbW9yZSc6IHtcblx0XHRwYXR0ZXJuOiAvXltcXHQgXSpcXC57M30gXFxkKyBbYS16XSsoPzogW2Etel0rKSovbSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC57M30vLFxuXHRcdFx0J251bWJlcic6IC9cXGQrLyxcblx0XHRcdCdrZXl3b3JkJzogL1xcYlthLXpdKyg/OiBbYS16XSspKlxcYi9cblx0XHR9XG5cdH1cblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=