(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/prismjs/components/prism-dns-zone-file.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-dns-zone-file.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages['dns-zone-file'] = {
	'comment': /;.*/,
	'string': {
		pattern: /"(?:\\.|[^"\\\r\n])*"/,
		greedy: true
	},
	'variable': [
		{
			pattern: /(^\$ORIGIN[ \t]+)\S+/m,
			lookbehind: true,
		},
		{
			pattern: /(^|\s)@(?=\s|$)/,
			lookbehind: true,
		}
	],
	'keyword': /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
	'class': {
		// https://tools.ietf.org/html/rfc1035#page-13
		pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
		lookbehind: true,
		alias: 'keyword'
	},
	'type': {
		// https://en.wikipedia.org/wiki/List_of_DNS_record_types
		pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
		lookbehind: true,
		alias: 'keyword'
	},
	'punctuation': /[()]/
};

Prism.languages['dns-zone'] = Prism.languages['dns-zone-file']


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRucy16b25lLWZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBIiwiZmlsZSI6Ijk3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzWydkbnMtem9uZS1maWxlJ10gPSB7XG5cdCdjb21tZW50JzogLzsuKi8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL1wiKD86XFxcXC58W15cIlxcXFxcXHJcXG5dKSpcIi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCd2YXJpYWJsZSc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF5cXCRPUklHSU5bIFxcdF0rKVxcUysvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxzKUAoPz1cXHN8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogL15cXCQoPzpPUklHSU58SU5DTFVERXxUVEwpKD89XFxzfCQpL20sXG5cdCdjbGFzcyc6IHtcblx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMTAzNSNwYWdlLTEzXG5cdFx0cGF0dGVybjogLyhefFxccykoPzpJTnxDSHxDU3xIUykoPz1cXHN8JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHQndHlwZSc6IHtcblx0XHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX0ROU19yZWNvcmRfdHlwZXNcblx0XHRwYXR0ZXJuOiAvKF58XFxzKSg/OkF8QTZ8QUFBQXxBRlNEQnxBUEx8QVRNQXxDQUF8Q0ROU0tFWXxDRFN8Q0VSVHxDTkFNRXxESENJRHxETFZ8RE5BTUV8RE5TS0VZfERTfEVJRHxHSUR8R1BPU3xISU5GT3xISVB8SVBTRUNLRVl8SVNETnxLRVl8S1h8TE9DfE1BSUxBfE1BSUxCfE1CfE1EfE1GfE1HfE1JTkZPfE1SfE1YfE5BUFRSfE5CfE5CU1RBVHxOSU1MT0N8TklORk98TlN8TlNBUHxOU0FQLVBUUnxOU0VDfE5TRUMzfE5TRUMzUEFSQU18TlVMTHxOWFR8T1BFTlBHUEtFWXxQVFJ8UFh8UktFWXxSUHxSUlNJR3xSVHxTSUd8U0lOS3xTTUlNRUF8U09BfFNQRnxTUlZ8U1NIRlB8VEF8VEtFWXxUTFNBfFRTSUd8VFhUfFVJRHxVSU5GT3xVTlNQRUN8VVJJfFdLU3xYMjUpKD89XFxzfCQpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAna2V5d29yZCdcblx0fSxcblx0J3B1bmN0dWF0aW9uJzogL1soKV0vXG59O1xuXG5QcmlzbS5sYW5ndWFnZXNbJ2Rucy16b25lJ10gPSBQcmlzbS5sYW5ndWFnZXNbJ2Rucy16b25lLWZpbGUnXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==