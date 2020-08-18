(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[179],{

/***/ "./node_modules/prismjs/components/prism-inform7.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-inform7.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.inform7 = {
	'string': {
		pattern: /"[^"]*"/,
		inside: {
			'substitution': {
				pattern: /\[[^\]]+\]/,
				inside: {
					'delimiter': {
						pattern:/\[|\]/,
						alias: 'punctuation'
					}
					// See rest below
				}
			}
		}
	},
	'comment': {
		pattern: /\[[^\]]+\]/,
		greedy: true
	},
	'title': {
		pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
		alias: 'important'
	},
	'number': {
		pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
		lookbehind: true
	},
	'verb': {
		pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
		lookbehind: true,
		alias: 'operator'
	},
	'keyword': {
		pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
		lookbehind: true
	},
	'property': {
		pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
		lookbehind: true,
		alias: 'symbol'
	},
	'position': {
		pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
		lookbehind: true,
		alias: 'keyword'
	},
	'type': {
		pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
		lookbehind: true,
		alias: 'variable'
	},
	'punctuation': /[.,:;(){}]/
};

Prism.languages.inform7['string'].inside['substitution'].inside.rest = Prism.languages.inform7;
// We don't want the remaining text in the substitution to be highlighted as the string.
Prism.languages.inform7['string'].inside['substitution'].inside.rest.text = {
	pattern: /\S(?:\s*\S)*/,
	alias: 'comment'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWluZm9ybTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixzQkFBc0IsSUFBSTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiIxNzkuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuaW5mb3JtNyA9IHtcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCJbXlwiXSpcIi8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnc3Vic3RpdHV0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxbW15cXF1dK1xcXS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOi9cXFt8XFxdLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFNlZSByZXN0IGJlbG93XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC9cXFtbXlxcXV0rXFxdLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3RpdGxlJzoge1xuXHRcdHBhdHRlcm46IC9eWyBcXHRdKig/OnZvbHVtZXxib29rfHBhcnQoPyEgb2YpfGNoYXB0ZXJ8c2VjdGlvbnx0YWJsZSlcXGIuKy9pbSxcblx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0fSxcblx0J251bWJlcic6IHtcblx0XHRwYXR0ZXJuOiAvKF58W14tXSkoPzpcXGJcXGQrKD86XFwuXFxkKyk/KD86XFxeXFxkKyk/XFx3KnxcXGIoPzpvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkpXFxiKD8hLSkvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCd2ZXJiJzoge1xuXHRcdHBhdHRlcm46IC8oXnxbXi1dKVxcYig/OmFwcGx5aW5nIHRvfGFyZXxhdHRhY2tpbmd8YW5zd2VyaW5nfGFza2luZ3xiZSg/OmluZyk/fGJ1cm5pbmd8YnV5aW5nfGNhbGxlZHxjYXJyaWVzfGNhcnJ5KD8hIG91dCl8Y2Fycnlpbmd8Y2xpbWJpbmd8Y2xvc2luZ3xjb25jZWFsKD86c3xpbmcpP3xjb25zdWx0aW5nfGNvbnRhaW4oPzpzfGluZyk/fGN1dHRpbmd8ZHJpbmtpbmd8ZHJvcHBpbmd8ZWF0aW5nfGVuY2xvcyg/OmVzP3xpbmcpfGVudGVyaW5nfGV4YW1pbmluZ3xleGl0aW5nfGdldHRpbmd8Z2l2aW5nfGdvaW5nfGhhKD86dmV8c3x2aW5nKXxob2xkKD86c3xpbmcpP3xpbXBsKD86eXxpZXMpfGluY29ycG9yYXQoPzplcz98aW5nKXxpbnNlcnRpbmd8aXN8anVtcGluZ3xraXNzaW5nfGxpc3RlbmluZ3xsb2NraW5nfGxvb2tpbmd8bWVhbig/OnN8aW5nKT98b3BlbmluZ3xwcm92aWQoPzplcz98aW5nKXxwdWxsaW5nfHB1c2hpbmd8cHV0dGluZ3xyZWxhdCg/OmVzP3xpbmcpfHJlbW92aW5nfHNlYXJjaGluZ3xzZWUoPzpzfGluZyk/fHNldHRpbmd8c2hvd2luZ3xzaW5naW5nfHNsZWVwaW5nfHNtZWxsaW5nfHNxdWVlemluZ3xzd2l0Y2hpbmd8c3VwcG9ydCg/OnN8aW5nKT98c3dlYXJpbmd8dGFraW5nfHRhc3Rpbmd8dGVsbGluZ3x0aGlua2luZ3x0aHJvd2luZ3x0b3VjaGluZ3x0dXJuaW5nfHR5aW5nfHVubG9jayg/OnN8aW5nKT98dmFyKD86eXxpZXN8eWluZyl8d2FpdGluZ3x3YWtpbmd8d2F2aW5nfHdlYXIoPzpzfGluZyk/KVxcYig/IS0pL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHR9LFxuXHQna2V5d29yZCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W14tXSlcXGIoPzphZnRlcnxiZWZvcmV8Y2Fycnkgb3V0fGNoZWNrfGNvbnRpbnVlIHRoZSBhY3Rpb258ZGVmaW5pdGlvbig/PSAqOil8ZG8gbm90aGluZ3xlbHNlfGVuZCAoPzppZnx1bmxlc3N8dGhlIHN0b3J5KXxldmVyeSB0dXJufGlmfGluY2x1ZGV8aW5zdGVhZCg/OiBvZik/fGxldHxtb3ZlfG5vfG5vd3xvdGhlcndpc2V8cmVwZWF0fHJlcG9ydHxyZXN1bWUgdGhlIHN0b3J5fHJ1bGUgZm9yfHJ1bm5pbmcgdGhyb3VnaHxzYXkoPzppbmcpP3xzdG9wIHRoZSBhY3Rpb258dGVzdHx0cnkoPzppbmcpP3x1bmRlcnN0YW5kfHVubGVzc3x1c2V8d2hlbnx3aGlsZXx5ZXMpXFxiKD8hLSkvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdwcm9wZXJ0eSc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W14tXSlcXGIoPzphZGphY2VudCg/ISB0byl8Y2FycmllZHxjbG9zZWR8Y29uY2VhbGVkfGNvbnRhaW5lZHxkYXJrfGRlc2NyaWJlZHxlZGlibGV8ZW1wdHl8ZW5jbG9zZWR8ZW50ZXJhYmxlfGV2ZW58ZmVtYWxlfGZpeGVkIGluIHBsYWNlfGZ1bGx8aGFuZGxlZHxoZWxkfGltcHJvcGVyLW5hbWVkfGluY29ycG9yYXRlZHxpbmVkaWJsZXxpbnZpc2libGV8bGlnaHRlZHxsaXR8bG9jayg/OmFibGV8ZWQpfG1hbGV8bWFya2VkIGZvciBsaXN0aW5nfG1lbnRpb25lZHxuZWdhdGl2ZXxuZXV0ZXJ8bm9uLSg/OmVtcHR5fGZ1bGx8cmVjdXJyaW5nKXxvZGR8b3BhcXVlfG9wZW4oPzphYmxlKT98cGx1cmFsLW5hbWVkfHBvcnRhYmxlfHBvc2l0aXZlfHByaXZhdGVseS1uYW1lZHxwcm9wZXItbmFtZWR8cHJvdmlkZWR8cHVibGljYWxseS1uYW1lZHxwdXNoYWJsZSBiZXR3ZWVuIHJvb21zfHJlY3VycmluZ3xyZWxhdGVkfHJ1YmJpbmd8c2NlbmVyeXxzZWVufHNpbmd1bGFyLW5hbWVkfHN1cHBvcnRlZHxzd2luZ2luZ3xzd2l0Y2goPzphYmxlfGVkKD86IG9ufCBvZmYpPyl8dG91Y2goPzphYmxlfGVkKXx0cmFuc3BhcmVudHx1bmNvbmNlYWxlZHx1bmRlc2NyaWJlZHx1bmxpdHx1bmxvY2tlZHx1bm1hcmtlZCBmb3IgbGlzdGluZ3x1bm1lbnRpb25lZHx1bm9wZW5hYmxlfHVudG91Y2hhYmxlfHVudmlzaXRlZHx2YXJpYWJsZXx2aXNpYmxlfHZpc2l0ZWR8d2VhcmFibGV8d29ybilcXGIoPyEtKS9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdzeW1ib2wnXG5cdH0sXG5cdCdwb3NpdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvKF58W14tXSlcXGIoPzphYm92ZXxhZGphY2VudCB0b3xiYWNrIHNpZGUgb2Z8YmVsb3d8YmV0d2Vlbnxkb3dufGVhc3R8ZXZlcnl3aGVyZXxmcm9udCBzaWRlfGhlcmV8aW58aW5zaWRlKD86IGZyb20pP3xub3J0aCg/OmVhc3R8d2VzdCk/fG5vd2hlcmV8b24oPzogdG9wIG9mKT98b3RoZXIgc2lkZXxvdXRzaWRlKD86IGZyb20pP3xwYXJ0cz8gb2Z8cmVnaW9uYWxseSBpbnxzb3V0aCg/OmVhc3R8d2VzdCk/fHRocm91Z2h8dXB8d2VzdHx3aXRoaW4pXFxiKD8hLSkvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAna2V5d29yZCdcblx0fSxcblx0J3R5cGUnOiB7XG5cdFx0cGF0dGVybjogLyhefFteLV0pXFxiKD86YWN0aW9ucz98YWN0aXZpdCg/Onl8aWVzKXxhY3RvcnM/fGFuaW1hbHM/fGJhY2tkcm9wcz98Y29udGFpbmVycz98ZGV2aWNlcz98ZGlyZWN0aW9ucz98ZG9vcnM/fGhvbGRlcnM/fGtpbmRzP3xsaXN0cz98bVthZV1ufG5vYm9keXxub3RoaW5nfG5vdW5zP3xudW1iZXJzP3xvYmplY3RzP3xwZW9wbGV8cGVyc29ucz98cGxheWVyKD86J3MgaG9sZGFsbCk/fHJlZ2lvbnM/fHJlbGF0aW9ucz98cm9vbXM/fHJ1bGUoPzpib29rKT9zP3xzY2VuZXM/fHNvbWVvbmV8c29tZXRoaW5nfHN1cHBvcnRlcnM/fHRhYmxlcz98dGV4dHM/fHRoaW5ncz98dGltZXx2ZWhpY2xlcz98d29tW2FlXW4pXFxiKD8hLSkvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH0sXG5cdCdwdW5jdHVhdGlvbic6IC9bLiw6Oygpe31dL1xufTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluZm9ybTdbJ3N0cmluZyddLmluc2lkZVsnc3Vic3RpdHV0aW9uJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuaW5mb3JtNztcbi8vIFdlIGRvbid0IHdhbnQgdGhlIHJlbWFpbmluZyB0ZXh0IGluIHRoZSBzdWJzdGl0dXRpb24gdG8gYmUgaGlnaGxpZ2h0ZWQgYXMgdGhlIHN0cmluZy5cblByaXNtLmxhbmd1YWdlcy5pbmZvcm03WydzdHJpbmcnXS5pbnNpZGVbJ3N1YnN0aXR1dGlvbiddLmluc2lkZS5yZXN0LnRleHQgPSB7XG5cdHBhdHRlcm46IC9cXFMoPzpcXHMqXFxTKSovLFxuXHRhbGlhczogJ2NvbW1lbnQnXG59OyJdLCJzb3VyY2VSb290IjoiIn0=