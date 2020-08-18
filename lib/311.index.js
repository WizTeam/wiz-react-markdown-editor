(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[311],{

/***/ "./node_modules/prismjs/components/prism-powershell.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-powershell.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var powershell = Prism.languages.powershell = {
		'comment': [
			{
				pattern: /(^|[^`])<#[\s\S]*?#>/,
				lookbehind: true
			},
			{
				pattern: /(^|[^`])#.*/,
				lookbehind: true
			}
		],
		'string': [
			{
				pattern: /"(?:`[\s\S]|[^`"])*"/,
				greedy: true,
				inside: {
					'function': {
						// Allow for one level of nesting
						pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
						lookbehind: true,
						// Populated at end of file
						inside: {}
					}
				}
			},
			{
				pattern: /'(?:[^']|'')*'/,
				greedy: true
			}
		],
		// Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
		// Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
		'namespace': /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
		'boolean': /\$(?:true|false)\b/i,
		'variable': /\$\w+\b/,
		// Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
		// Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
		// Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
		'function': [
			/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
			/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
		],
		// per http://technet.microsoft.com/en-us/library/hh847744.aspx
		'keyword': /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
		'operator': {
			pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
			lookbehind: true
		},
		'punctuation': /[|{}[\];(),.]/
	};

	// Variable interpolation inside strings, and nested expressions
	var stringInside = powershell.string[0].inside;
	stringInside.boolean = powershell.boolean;
	stringInside.variable = powershell.variable;
	stringInside.function.inside = powershell;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBvd2Vyc2hlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixJQUFJO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIzMTEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHBvd2Vyc2hlbGwgPSBQcmlzbS5sYW5ndWFnZXMucG93ZXJzaGVsbCA9IHtcblx0XHQnY29tbWVudCc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhefFteYF0pPCNbXFxzXFxTXSo/Iz4vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58W15gXSkjLiovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnc3RyaW5nJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXCIoPzpgW1xcc1xcU118W15gXCJdKSpcIi8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0XHRcdFx0Ly8gQWxsb3cgZm9yIG9uZSBsZXZlbCBvZiBuZXN0aW5nXG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKF58W15gXSlcXCRcXCgoPzpcXCRcXChbXlxcclxcbigpXSpcXCl8KD8hXFwkXFwoKVteXFxyXFxuKV0pKlxcKS8sXG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0Ly8gUG9wdWxhdGVkIGF0IGVuZCBvZiBmaWxlXG5cdFx0XHRcdFx0XHRpbnNpZGU6IHt9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvJyg/OlteJ118JycpKicvLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH1cblx0XHRdLFxuXHRcdC8vIE1hdGNoZXMgbmFtZSBzcGFjZXMgYXMgd2VsbCBhcyBjYXN0cywgYXR0cmlidXRlIGRlY29yYXRvcnMuIEZvcmNlIHN0YXJ0aW5nIHdpdGggbGV0dGVyIHRvIGF2b2lkIG1hdGNoaW5nIGFycmF5IGluZGljZXNcblx0XHQvLyBTdXBwb3J0cyB0d28gbGV2ZWxzIG9mIG5lc3RlZCBicmFja2V0cyAoZS5nLiBgW091dHB1dFR5cGUoW1N5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3RbaW50XV0pXWApXG5cdFx0J25hbWVzcGFjZSc6IC9cXFtbYS16XSg/OlxcWyg/OlxcW1teXFxdXSpdfFteXFxbXFxdXSkqXXxbXlxcW1xcXV0pKl0vaSxcblx0XHQnYm9vbGVhbic6IC9cXCQoPzp0cnVlfGZhbHNlKVxcYi9pLFxuXHRcdCd2YXJpYWJsZSc6IC9cXCRcXHcrXFxiLyxcblx0XHQvLyBDbWRsZXRzIGFuZCBhbGlhc2VzLiBBbGlhc2VzIHNob3VsZCBjb21lIGxhc3QsIG90aGVyd2lzZSBcIndyaXRlXCIgZ2V0cyBwcmVmZXJyZWQgb3ZlciBcIndyaXRlLWhvc3RcIiBmb3IgZXhhbXBsZVxuXHRcdC8vIEdldC1Db21tYW5kIHwgP3sgJF8uTW9kdWxlTmFtZSAtbWF0Y2ggXCJNaWNyb3NvZnQuUG93ZXJTaGVsbC4oVXRpbHxDb3JlfE1hbmFnZW1lbnQpXCIgfVxuXHRcdC8vIEdldC1BbGlhcyB8ID97ICRfLlJlZmVyZW5jZWRDb21tYW5kLk1vZHVsZS5OYW1lIC1tYXRjaCBcIk1pY3Jvc29mdC5Qb3dlclNoZWxsLihVdGlsfENvcmV8TWFuYWdlbWVudClcIiB9XG5cdFx0J2Z1bmN0aW9uJzogW1xuXHRcdFx0L1xcYig/OkFkZHxBcHByb3ZlfEFzc2VydHxCYWNrdXB8QmxvY2t8Q2hlY2twb2ludHxDbGVhcnxDbG9zZXxDb21wYXJlfENvbXBsZXRlfENvbXByZXNzfENvbmZpcm18Q29ubmVjdHxDb252ZXJ0fENvbnZlcnRGcm9tfENvbnZlcnRUb3xDb3B5fERlYnVnfERlbnl8RGlzYWJsZXxEaXNjb25uZWN0fERpc21vdW50fEVkaXR8RW5hYmxlfEVudGVyfEV4aXR8RXhwYW5kfEV4cG9ydHxGaW5kfEZvckVhY2h8Rm9ybWF0fEdldHxHcmFudHxHcm91cHxIaWRlfEltcG9ydHxJbml0aWFsaXplfEluc3RhbGx8SW52b2tlfEpvaW58TGltaXR8TG9ja3xNZWFzdXJlfE1lcmdlfE1vdmV8TmV3fE5ld3xPcGVufE9wdGltaXplfE91dHxQaW5nfFBvcHxQcm90ZWN0fFB1Ymxpc2h8UHVzaHxSZWFkfFJlY2VpdmV8UmVkb3xSZWdpc3RlcnxSZW1vdmV8UmVuYW1lfFJlcGFpcnxSZXF1ZXN0fFJlc2V0fFJlc2l6ZXxSZXNvbHZlfFJlc3RhcnR8UmVzdG9yZXxSZXN1bWV8UmV2b2tlfFNhdmV8U2VhcmNofFNlbGVjdHxTZW5kfFNldHxTaG93fFNraXB8U29ydHxTcGxpdHxTdGFydHxTdGVwfFN0b3B8U3VibWl0fFN1c3BlbmR8U3dpdGNofFN5bmN8VGVlfFRlc3R8VHJhY2V8VW5ibG9ja3xVbmRvfFVuaW5zdGFsbHxVbmxvY2t8VW5wcm90ZWN0fFVucHVibGlzaHxVbnJlZ2lzdGVyfFVwZGF0ZXxVc2V8V2FpdHxXYXRjaHxXaGVyZXxXcml0ZSktW2Etel0rXFxiL2ksXG5cdFx0XHQvXFxiKD86YWN8Y2F0fGNoZGlyfGNsY3xjbGl8Y2xwfGNsdnxjb21wYXJlfGNvcHl8Y3B8Y3BpfGNwcHxjdnBhfGRicHxkZWx8ZGlmZnxkaXJ8ZWJwfGVjaG98ZXBhbHxlcGNzdnxlcHNufGVyYXNlfGZjfGZsfGZ0fGZ3fGdhbHxnYnB8Z2N8Z2NpfGdjc3xnZHJ8Z2l8Z2x8Z218Z3B8Z3BzfGdyb3VwfGdzdnxndXxndnxnd21pfGlleHxpaXxpcGFsfGlwY3N2fGlwc258aXJtfGl3bWl8aXdyfGtpbGx8bHB8bHN8bWVhc3VyZXxtaXxtb3VudHxtb3ZlfG1wfG12fG5hbHxuZHJ8bml8bnZ8b2d2fHBvcGR8cHN8cHVzaGR8cHdkfHJicHxyZHxyZHJ8cmVufHJpfHJtfHJtZGlyfHJuaXxybnB8cnB8cnZ8cnZwYXxyd21pfHNhbHxzYXBzfHNhc3Z8c2JwfHNjfHNlbGVjdHxzZXR8c2hjbXxzaXxzbHxzbGVlcHxzbHN8c29ydHxzcHxzcHBzfHNwc3Z8c3RhcnR8c3Z8c3dtaXx0ZWV8dHJjbXx0eXBlfHdyaXRlKVxcYi9pXG5cdFx0XSxcblx0XHQvLyBwZXIgaHR0cDovL3RlY2huZXQubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODQ3NzQ0LmFzcHhcblx0XHQna2V5d29yZCc6IC9cXGIoPzpCZWdpbnxCcmVha3xDYXRjaHxDbGFzc3xDb250aW51ZXxEYXRhfERlZmluZXxEb3xEeW5hbWljUGFyYW18RWxzZXxFbHNlSWZ8RW5kfEV4aXR8RmlsdGVyfEZpbmFsbHl8Rm9yfEZvckVhY2h8RnJvbXxGdW5jdGlvbnxJZnxJbmxpbmVTY3JpcHR8UGFyYWxsZWx8UGFyYW18UHJvY2Vzc3xSZXR1cm58U2VxdWVuY2V8U3dpdGNofFRocm93fFRyYXB8VHJ5fFVudGlsfFVzaW5nfFZhcnxXaGlsZXxXb3JrZmxvdylcXGIvaSxcblx0XHQnb3BlcmF0b3InOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcVz8pKD86IXwtKD86ZXF8bmV8Z3R8Z2V8bHR8bGV8c2hbbHJdfG5vdHxiPyg/OmFuZHx4P29yKXwoPzpOb3QpPyg/Okxpa2V8TWF0Y2h8Q29udGFpbnN8SW4pfFJlcGxhY2V8Sm9pbnxpcyg/Ok5vdCk/fGFzKVxcYnwtWy09XT98XFwrWys9XT98WypcXC8lXT0/KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1t8e31bXFxdOygpLC5dL1xuXHR9O1xuXG5cdC8vIFZhcmlhYmxlIGludGVycG9sYXRpb24gaW5zaWRlIHN0cmluZ3MsIGFuZCBuZXN0ZWQgZXhwcmVzc2lvbnNcblx0dmFyIHN0cmluZ0luc2lkZSA9IHBvd2Vyc2hlbGwuc3RyaW5nWzBdLmluc2lkZTtcblx0c3RyaW5nSW5zaWRlLmJvb2xlYW4gPSBwb3dlcnNoZWxsLmJvb2xlYW47XG5cdHN0cmluZ0luc2lkZS52YXJpYWJsZSA9IHBvd2Vyc2hlbGwudmFyaWFibGU7XG5cdHN0cmluZ0luc2lkZS5mdW5jdGlvbi5pbnNpZGUgPSBwb3dlcnNoZWxsO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9