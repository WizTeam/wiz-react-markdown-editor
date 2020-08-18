(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/prismjs/components/prism-cypher.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-cypher.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.cypher = {
	// https://neo4j.com/docs/cypher-manual/current/syntax/comments/
	'comment': /\/\/.*/,
	'string': {
		pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,
		greedy: true
	},
	'class-name': {
		pattern: /(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,
		lookbehind: true,
		greedy: true
	},
	'relationship': {
		pattern: /(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	},
	'identifier': {
		pattern: /`(?:[^`\\\r\n])*`/,
		greedy: true,
		alias: 'symbol'
	},

	'variable': /\$\w+/,

	// https://neo4j.com/docs/cypher-manual/current/syntax/reserved/
	'keyword': /\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,

	'function': /\b\w+\b(?=\s*\()/,

	'boolean': /\b(?:true|false|null)\b/i,
	'number': /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,
	// https://neo4j.com/docs/cypher-manual/current/syntax/operators/
	'operator': /:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,
	'punctuation': /[()[\]{},;.]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWN5cGhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0IiLCJmaWxlIjoiODMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuY3lwaGVyID0ge1xuXHQvLyBodHRwczovL25lbzRqLmNvbS9kb2NzL2N5cGhlci1tYW51YWwvY3VycmVudC9zeW50YXgvY29tbWVudHMvXG5cdCdjb21tZW50JzogL1xcL1xcLy4qLyxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXC4pKlwifCcoPzpbXidcXFxcXFxyXFxuXXxcXFxcLikqJy8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oOlxccyopKD86XFx3K3xgKD86W15gXFxcXFxcclxcbl0pKmApKD89XFxzKlt7KTpdKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3JlbGF0aW9uc2hpcCc6IHtcblx0XHRwYXR0ZXJuOiAvKC1cXFtcXHMqKD86XFx3K1xccyp8YCg/OlteYFxcXFxcXHJcXG5dKSpgXFxzKik/Olxccyp8XFx8XFxzKjpcXHMqKSg/Olxcdyt8YCg/OlteYFxcXFxcXHJcXG5dKSpgKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0fSxcblx0J2lkZW50aWZpZXInOiB7XG5cdFx0cGF0dGVybjogL2AoPzpbXmBcXFxcXFxyXFxuXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnc3ltYm9sJ1xuXHR9LFxuXG5cdCd2YXJpYWJsZSc6IC9cXCRcXHcrLyxcblxuXHQvLyBodHRwczovL25lbzRqLmNvbS9kb2NzL2N5cGhlci1tYW51YWwvY3VycmVudC9zeW50YXgvcmVzZXJ2ZWQvXG5cdCdrZXl3b3JkJzogL1xcYig/OkFERHxBTEx8QU5EfEFTfEFTQ3xBU0NFTkRJTkd8QVNTRVJUfEJZfENBTEx8Q0FTRXxDT01NSVR8Q09OU1RSQUlOVHxDT05UQUlOU3xDUkVBVEV8Q1NWfERFTEVURXxERVNDfERFU0NFTkRJTkd8REVUQUNIfERJU1RJTkNUfERPfERST1B8RUxTRXxFTkR8RU5EU3xFWElTVFN8Rk9SfEZPUkVBQ0h8SU58SU5ERVh8SVN8Sk9JTnxLRVl8TElNSVR8TE9BRHxNQU5EQVRPUll8TUFUQ0h8TUVSR0V8Tk9ERXxOT1R8T0Z8T058T1BUSU9OQUx8T1J8T1JERVIoPz1cXHMrQlkpfFBFUklPRElDfFJFTU9WRXxSRVFVSVJFfFJFVFVSTnxTQ0FMQVJ8U0NBTnxTRVR8U0tJUHxTVEFSVHxTVEFSVFN8VEhFTnxVTklPTnxVTklRVUV8VU5XSU5EfFVTSU5HfFdIRU58V0hFUkV8V0lUSHxYT1J8WUlFTEQpXFxiL2ksXG5cblx0J2Z1bmN0aW9uJzogL1xcYlxcdytcXGIoPz1cXHMqXFwoKS8sXG5cblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZXxudWxsKVxcYi9pLFxuXHQnbnVtYmVyJzogL1xcYig/OjB4W1xcZGEtZkEtRl0rfFxcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8pXFxiLyxcblx0Ly8gaHR0cHM6Ly9uZW80ai5jb20vZG9jcy9jeXBoZXItbWFudWFsL2N1cnJlbnQvc3ludGF4L29wZXJhdG9ycy9cblx0J29wZXJhdG9yJzogLzp8PC0tP3wtLT8+P3w8Pnw9fj98Wzw+XT0/fFsrKi8lXnxdfFxcLlxcLlxcLj8vLFxuXHQncHVuY3R1YXRpb24nOiAvWygpW1xcXXt9LDsuXS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9