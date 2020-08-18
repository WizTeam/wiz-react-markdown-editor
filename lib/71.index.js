(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/prismjs/components/prism-cpp.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-cpp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;

	Prism.languages.cpp = Prism.languages.extend('c', {
		'class-name': [
			{
				pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source
					.replace(/<keyword>/g, function () { return keyword.source; })),
				lookbehind: true
			},
			// This is intended to capture the class name of method implementations like:
			//   void foo::bar() const {}
			// However! The `foo` in the above example could also be a namespace, so we only capture the class name if
			// it starts with an uppercase letter. This approximation should give decent results.
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			// This will capture the class name before destructors like:
			//   Foo::~Foo() {}
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			// This also intends to capture the class name of method implementations but here the class has template
			// parameters, so it can't be a namespace (until C++ adds generic namespaces).
			/\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
		],
		'keyword': keyword,
		'number': {
			pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
			greedy: true
		},
		'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		'boolean': /\b(?:true|false)\b/
	});

	Prism.languages.insertBefore('cpp', 'string', {
		'raw-string': {
			pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
			alias: 'string',
			greedy: true
		}
	});

	Prism.languages.insertBefore('cpp', 'class-name', {
		// the base clause is an optional list of parent classes
		// https://en.cppreference.com/w/cpp/language/class
		'base-clause': {
			pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)(?:[^;{}"'])+?(?=\s*[;{])/,
			lookbehind: true,
			greedy: true,
			inside: Prism.languages.extend('cpp', {})
		}
	});
	Prism.languages.insertBefore('inside', 'operator', {
		// All untokenized words that are not namespaces should be class names
		'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
	}, Prism.languages.cpp['base-clause']);

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUIsRUFBRTtBQUNsRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxlQUFlO0FBQ3JFO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjcxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBrZXl3b3JkID0gL1xcYig/OmFsaWduYXN8YWxpZ25vZnxhc218YXV0b3xib29sfGJyZWFrfGNhc2V8Y2F0Y2h8Y2hhcnxjaGFyOF90fGNoYXIxNl90fGNoYXIzMl90fGNsYXNzfGNvbXBsfGNvbmNlcHR8Y29uc3R8Y29uc3RldmFsfGNvbnN0ZXhwcnxjb25zdGluaXR8Y29uc3RfY2FzdHxjb250aW51ZXxjb19hd2FpdHxjb19yZXR1cm58Y29feWllbGR8ZGVjbHR5cGV8ZGVmYXVsdHxkZWxldGV8ZG98ZG91YmxlfGR5bmFtaWNfY2FzdHxlbHNlfGVudW18ZXhwbGljaXR8ZXhwb3J0fGV4dGVybnxmbG9hdHxmb3J8ZnJpZW5kfGdvdG98aWZ8aW5saW5lfGludHxpbnQ4X3R8aW50MTZfdHxpbnQzMl90fGludDY0X3R8dWludDhfdHx1aW50MTZfdHx1aW50MzJfdHx1aW50NjRfdHxsb25nfG11dGFibGV8bmFtZXNwYWNlfG5ld3xub2V4Y2VwdHxudWxscHRyfG9wZXJhdG9yfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWdpc3RlcnxyZWludGVycHJldF9jYXN0fHJlcXVpcmVzfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdGF0aWNfYXNzZXJ0fHN0YXRpY19jYXN0fHN0cnVjdHxzd2l0Y2h8dGVtcGxhdGV8dGhpc3x0aHJlYWRfbG9jYWx8dGhyb3d8dHJ5fHR5cGVkZWZ8dHlwZWlkfHR5cGVuYW1lfHVuaW9ufHVuc2lnbmVkfHVzaW5nfHZpcnR1YWx8dm9pZHx2b2xhdGlsZXx3Y2hhcl90fHdoaWxlKVxcYi87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNwcCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2MnLCB7XG5cdFx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKFxcYig/OmNsYXNzfGNvbmNlcHR8ZW51bXxzdHJ1Y3R8dHlwZW5hbWUpXFxzKykoPyE8a2V5d29yZD4pXFx3Ky8uc291cmNlXG5cdFx0XHRcdFx0LnJlcGxhY2UoLzxrZXl3b3JkPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXl3b3JkLnNvdXJjZTsgfSkpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8gVGhpcyBpcyBpbnRlbmRlZCB0byBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIG9mIG1ldGhvZCBpbXBsZW1lbnRhdGlvbnMgbGlrZTpcblx0XHRcdC8vICAgdm9pZCBmb286OmJhcigpIGNvbnN0IHt9XG5cdFx0XHQvLyBIb3dldmVyISBUaGUgYGZvb2AgaW4gdGhlIGFib3ZlIGV4YW1wbGUgY291bGQgYWxzbyBiZSBhIG5hbWVzcGFjZSwgc28gd2Ugb25seSBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIGlmXG5cdFx0XHQvLyBpdCBzdGFydHMgd2l0aCBhbiB1cHBlcmNhc2UgbGV0dGVyLiBUaGlzIGFwcHJveGltYXRpb24gc2hvdWxkIGdpdmUgZGVjZW50IHJlc3VsdHMuXG5cdFx0XHQvXFxiW0EtWl1cXHcqKD89XFxzKjo6XFxzKlxcdytcXHMqXFwoKS8sXG5cdFx0XHQvLyBUaGlzIHdpbGwgY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBiZWZvcmUgZGVzdHJ1Y3RvcnMgbGlrZTpcblx0XHRcdC8vICAgRm9vOjp+Rm9vKCkge31cblx0XHRcdC9cXGJbQS1aX11cXHcqKD89XFxzKjo6XFxzKn5cXHcrXFxzKlxcKCkvaSxcblx0XHRcdC8vIFRoaXMgYWxzbyBpbnRlbmRzIHRvIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgb2YgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBidXQgaGVyZSB0aGUgY2xhc3MgaGFzIHRlbXBsYXRlXG5cdFx0XHQvLyBwYXJhbWV0ZXJzLCBzbyBpdCBjYW4ndCBiZSBhIG5hbWVzcGFjZSAodW50aWwgQysrIGFkZHMgZ2VuZXJpYyBuYW1lc3BhY2VzKS5cblx0XHRcdC9cXHcrKD89XFxzKjwoPzpbXjw+XXw8KD86W148Pl18PFtePD5dKj4pKj4pKj5cXHMqOjpcXHMqXFx3K1xccypcXCgpL1xuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBrZXl3b3JkLFxuXHRcdCdudW1iZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKD86XFxiMGJbMDEnXSt8XFxiMHgoPzpbXFxkYS1mJ10rXFwuP1tcXGRhLWYnXSp8XFwuW1xcZGEtZiddKykoPzpwWystXT9bXFxkJ10rKT98KD86XFxiW1xcZCddK1xcLj9bXFxkJ10qfFxcQlxcLltcXGQnXSspKD86ZVsrLV0/W1xcZCddKyk/KVtmdWxdKi9pLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnb3BlcmF0b3InOiAvPj49P3w8PD0/fC0+fChbLSsmfDpdKVxcMXxbPzp+XXw8PT58Wy0rKi8lJnxeIT08Pl09P3xcXGIoPzphbmR8YW5kX2VxfGJpdGFuZHxiaXRvcnxub3R8bm90X2VxfG9yfG9yX2VxfHhvcnx4b3JfZXEpXFxiLyxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ3N0cmluZycsIHtcblx0XHQncmF3LXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC9SXCIoW14oKVxcXFwgXXswLDE2fSlcXChbXFxzXFxTXSo/XFwpXFwxXCIvLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjcHAnLCAnY2xhc3MtbmFtZScsIHtcblx0XHQvLyB0aGUgYmFzZSBjbGF1c2UgaXMgYW4gb3B0aW9uYWwgbGlzdCBvZiBwYXJlbnQgY2xhc3Nlc1xuXHRcdC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2NwcC9sYW5ndWFnZS9jbGFzc1xuXHRcdCdiYXNlLWNsYXVzZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8c3RydWN0KVxccytcXHcrXFxzKjpcXHMqKSg/OlteO3t9XCInXSkrPyg/PVxccypbO3tdKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjcHAnLCB7fSlcblx0XHR9XG5cdH0pO1xuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnb3BlcmF0b3InLCB7XG5cdFx0Ly8gQWxsIHVudG9rZW5pemVkIHdvcmRzIHRoYXQgYXJlIG5vdCBuYW1lc3BhY2VzIHNob3VsZCBiZSBjbGFzcyBuYW1lc1xuXHRcdCdjbGFzcy1uYW1lJzogL1xcYlthLXpfXVxcdypcXGIoPyFcXHMqOjopL2lcblx0fSwgUHJpc20ubGFuZ3VhZ2VzLmNwcFsnYmFzZS1jbGF1c2UnXSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=