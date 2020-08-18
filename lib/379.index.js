(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[379],{

/***/ "./node_modules/prismjs/components/prism-solution-file.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-solution-file.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism){

	var guid = {
		// https://en.wikipedia.org/wiki/Universally_unique_identifier#Format
		pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
		alias: 'constant',
		inside: {
			'punctuation': /[{}]/
		}
	};

	Prism.languages['solution-file'] = {
		'comment': {
			pattern: /#.*/,
			greedy: true
		},
		'string': {
			pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
			greedy: true,
			inside: {
				'guid': guid
			}
		},
		'object': {
			// Foo
			//   Bar("abs") = 9
			//   EndBar
			//   Prop = TRUE
			// EndFoo
			pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
			lookbehind: true,
			greedy: true,
			alias: 'keyword'
		},
		'property': {
			pattern: /^([ \t]*)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
			lookbehind: true,
			inside: {
				'guid': guid
			}
		},
		'guid': guid,
		'number': /\b\d+(?:\.\d+)*\b/,
		'boolean': /\b(?:FALSE|TRUE)\b/,
		'operator': /=/,
		'punctuation': /[(),]/
	};

	Prism.languages['sln'] = Prism.languages['solution-file'];

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNvbHV0aW9uLWZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLGNBQWMsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjM3OS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pe1xuXG5cdHZhciBndWlkID0ge1xuXHRcdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbGx5X3VuaXF1ZV9pZGVudGlmaWVyI0Zvcm1hdFxuXHRcdHBhdHRlcm46IC9cXHtbXFxkYS1mXXs4fS1bXFxkYS1mXXs0fS1bXFxkYS1mXXs0fS1bXFxkYS1mXXs0fS1bXFxkYS1mXXsxMn1cXH0vaSxcblx0XHRhbGlhczogJ2NvbnN0YW50Jyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9be31dL1xuXHRcdH1cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXNbJ3NvbHV0aW9uLWZpbGUnXSA9IHtcblx0XHQnY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8jLiovLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1wiW15cIlxcclxcbl0qXCJ8J1teJ1xcclxcbl0qJy8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2d1aWQnOiBndWlkXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnb2JqZWN0Jzoge1xuXHRcdFx0Ly8gRm9vXG5cdFx0XHQvLyAgIEJhcihcImFic1wiKSA9IDlcblx0XHRcdC8vICAgRW5kQmFyXG5cdFx0XHQvLyAgIFByb3AgPSBUUlVFXG5cdFx0XHQvLyBFbmRGb29cblx0XHRcdHBhdHRlcm46IC9eKFsgXFx0XSopKD86KFtBLVpdXFx3KilcXGIoPz0uKig/Olxcclxcbj98XFxuKSg/OlxcMVsgXFx0XS4qKD86XFxyXFxuP3xcXG4pKSpcXDFFbmRcXDIoPz1bIFxcdF0qJCkpfEVuZFtBLVpdXFx3Kig/PVsgXFx0XSokKSkvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXihbIFxcdF0qKVteXFxyXFxuXCIjPSgpXSpbXlxcc1wiIz0oKV0oPz1cXHMqPSkvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2d1aWQnOiBndWlkXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnZ3VpZCc6IGd1aWQsXG5cdFx0J251bWJlcic6IC9cXGJcXGQrKD86XFwuXFxkKykqXFxiLyxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzpGQUxTRXxUUlVFKVxcYi8sXG5cdFx0J29wZXJhdG9yJzogLz0vLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCksXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXNbJ3NsbiddID0gUHJpc20ubGFuZ3VhZ2VzWydzb2x1dGlvbi1maWxlJ107XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=