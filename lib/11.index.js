(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/prismjs/components/prism-al.js":
/*!*****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-al.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// based on https://github.com/microsoft/AL/blob/master/grammar/alsyntax.tmlanguage

Prism.languages.al = {
	'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
	'string': {
		pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
		greedy: true
	},
	'function': {
		pattern: /(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,
		lookbehind: true
	},
	'keyword': [
		// keywords
		/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i,
		// objects and metadata that are used like keywords
		/\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i
	],
	'number': /\b(?:0x[\da-f]+|(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(?:F|U(?:LL?)?|LL?)?\b/i,
	'boolean': /\b(?:false|true)\b/i,
	'variable': /\b(?:Curr(?:FieldNo|Page|Report)|RequestOptionsPage|x?Rec)\b/,
	'class-name': /\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,
	'operator': /\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,
	'punctuation': /[()\[\]{}:.;,]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsR0FBRztBQUM3QiIsImZpbGUiOiIxMS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQUwvYmxvYi9tYXN0ZXIvZ3JhbW1hci9hbHN5bnRheC50bWxhbmd1YWdlXG5cblByaXNtLmxhbmd1YWdlcy5hbCA9IHtcblx0J2NvbW1lbnQnOiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLycoPzonJ3xbXidcXHJcXG5dKSonKD8hJyl8XCIoPzpcIlwifFteXCJcXHJcXG5dKSpcIig/IVwiKS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdmdW5jdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYig/OmV2ZW50fHByb2NlZHVyZXx0cmlnZ2VyKVxccyt8KD86XnxbXi5dKVxcLlxccyopW2Etel9dXFx3Kig/PVxccypcXCgpL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQna2V5d29yZCc6IFtcblx0XHQvLyBrZXl3b3Jkc1xuXHRcdC9cXGIoPzphcnJheXxhc3NlcnRlcnJvcnxiZWdpbnxicmVha3xjYXNlfGRvfGRvd250b3xlbHNlfGVuZHxldmVudHxleGl0fGZvcnxmb3JlYWNofGZ1bmN0aW9ufGlmfGltcGxlbWVudHN8aW58aW5kYXRhc2V0fGludGVyZmFjZXxpbnRlcm5hbHxsb2NhbHxvZnxwcm9jZWR1cmV8cHJvZ3JhbXxwcm90ZWN0ZWR8cmVwZWF0fHJ1bm9uY2xpZW50fHNlY3VyaXR5ZmlsdGVyaW5nfHN1cHByZXNzZGlzcG9zZXx0ZW1wb3Jhcnl8dGhlbnx0b3x0cmlnZ2VyfHVudGlsfHZhcnx3aGlsZXx3aXRofHdpdGhldmVudHMpXFxiL2ksXG5cdFx0Ly8gb2JqZWN0cyBhbmQgbWV0YWRhdGEgdGhhdCBhcmUgdXNlZCBsaWtlIGtleXdvcmRzXG5cdFx0L1xcYig/OmFjdGlvbnxhY3Rpb25zfGFkZGFmdGVyfGFkZGJlZm9yZXxhZGRmaXJzdHxhZGRsYXN0fGFyZWF8YXNzZW1ibHl8Y2hhcnRwYXJ0fGNvZGV1bml0fGNvbHVtbnxjb250cm9sYWRkaW58Y3VlZ3JvdXB8Y3VzdG9taXplc3xkYXRhaXRlbXxkYXRhc2V0fGRvdG5ldHxlbGVtZW50c3xlbnVtfGVudW1leHRlbnNpb258ZXh0ZW5kc3xmaWVsZHxmaWVsZGF0dHJpYnV0ZXxmaWVsZGVsZW1lbnR8ZmllbGRncm91cHxmaWVsZGdyb3Vwc3xmaWVsZHN8ZmlsdGVyfGZpeGVkfGdyaWR8Z3JvdXB8a2V5fGtleXN8bGFiZWx8bGFiZWxzfGxheW91dHxtb2RpZnl8bW92ZWFmdGVyfG1vdmViZWZvcmV8bW92ZWZpcnN0fG1vdmVsYXN0fHBhZ2V8cGFnZWN1c3RvbWl6YXRpb258cGFnZWV4dGVuc2lvbnxwYXJ0fHByb2ZpbGV8cXVlcnl8cmVwZWF0ZXJ8cmVwb3J0fHJlcXVlc3RwYWdlfHNjaGVtYXxzZXBhcmF0b3J8c3lzdGVtcGFydHx0YWJsZXx0YWJsZWVsZW1lbnR8dGFibGVleHRlbnNpb258dGV4dGF0dHJpYnV0ZXx0ZXh0ZWxlbWVudHx0eXBlfHVzZXJjb250cm9sfHZhbHVlfHhtbHBvcnQpXFxiL2lcblx0XSxcblx0J251bWJlcic6IC9cXGIoPzoweFtcXGRhLWZdK3woPzpcXGQrXFwuP1xcZCp8XFwuXFxkKykoPzplWystXT9cXGQrKT8pKD86RnxVKD86TEw/KT98TEw/KT9cXGIvaSxcblx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvaSxcblx0J3ZhcmlhYmxlJzogL1xcYig/OkN1cnIoPzpGaWVsZE5vfFBhZ2V8UmVwb3J0KXxSZXF1ZXN0T3B0aW9uc1BhZ2V8eD9SZWMpXFxiLyxcblx0J2NsYXNzLW5hbWUnOiAvXFxiKD86YXV0b21hdGlvbnxiaWdpbnRlZ2VyfGJpZ3RleHR8YmxvYnxib29sZWFufGJ5dGV8Y2hhcnxjbGllbnR0eXBlfGNvZGV8Y29tcGxldGlvbnRyaWdnZXJlcnJvcmxldmVsfGNvbm5lY3Rpb250eXBlfGRhdGFiYXNlfGRhdGFjbGFzc2lmaWNhdGlvbnxkYXRhc2NvcGV8ZGF0ZXxkYXRlZm9ybXVsYXxkYXRldGltZXxkZWNpbWFsfGRlZmF1bHRsYXlvdXR8ZGlhbG9nfGRpY3Rpb25hcnl8ZG90bmV0YXNzZW1ibHl8ZG90bmV0dHlwZWRlY2xhcmF0aW9ufGR1cmF0aW9ufGVycm9yaW5mb3xlcnJvcnR5cGV8ZXhlY3V0aW9uY29udGV4dHxleGVjdXRpb25tb2RlfGZpZWxkY2xhc3N8ZmllbGRyZWZ8ZmllbGR0eXBlfGZpbGV8ZmlsdGVycGFnZWJ1aWxkZXJ8Z3VpZHxodHRwY2xpZW50fGh0dHBjb250ZW50fGh0dHBoZWFkZXJzfGh0dHByZXF1ZXN0bWVzc2FnZXxodHRwcmVzcG9uc2VtZXNzYWdlfGluc3RyZWFtfGludGVnZXJ8am9rZXJ8anNvbmFycmF5fGpzb25vYmplY3R8anNvbnRva2VufGpzb252YWx1ZXxrZXlyZWZ8bGlzdHxtb2R1bGVkZXBlbmRlbmN5aW5mb3xtb2R1bGVpbmZvfG5vbmV8bm90aWZpY2F0aW9ufG5vdGlmaWNhdGlvbnNjb3BlfG9iamVjdHR5cGV8b3B0aW9ufG91dHN0cmVhbXxwYWdlcmVzdWx0fHJlY29yZHxyZWNvcmRpZHxyZWNvcmRyZWZ8cmVwb3J0Zm9ybWF0fHNlY3VyaXR5ZmlsdGVyfHNlc3Npb25zZXR0aW5nc3x0YWJsZWNvbm5lY3Rpb250eXBlfHRhYmxlZmlsdGVyfHRlc3RhY3Rpb258dGVzdGZpZWxkfHRlc3RmaWx0ZXJmaWVsZHx0ZXN0cGFnZXx0ZXN0cGVybWlzc2lvbnN8dGVzdHJlcXVlc3RwYWdlfHRleHR8dGV4dGJ1aWxkZXJ8dGV4dGNvbnN0fHRleHRlbmNvZGluZ3x0aW1lfHRyYW5zYWN0aW9ubW9kZWx8dHJhbnNhY3Rpb250eXBlfHZhcmlhbnR8dmVyYm9zaXR5fHZlcnNpb258dmlld3x2aWV3c3x3ZWJzZXJ2aWNlYWN0aW9uY29udGV4dHx3ZWJzZXJ2aWNlYWN0aW9ucmVzdWx0Y29kZXx4bWxhdHRyaWJ1dGV8eG1sYXR0cmlidXRlY29sbGVjdGlvbnx4bWxjZGF0YXx4bWxjb21tZW50fHhtbGRlY2xhcmF0aW9ufHhtbGRvY3VtZW50fHhtbGRvY3VtZW50dHlwZXx4bWxlbGVtZW50fHhtbG5hbWVzcGFjZW1hbmFnZXJ8eG1sbmFtZXRhYmxlfHhtbG5vZGV8eG1sbm9kZWxpc3R8eG1scHJvY2Vzc2luZ2luc3RydWN0aW9ufHhtbHJlYWRvcHRpb25zfHhtbHRleHR8eG1sd3JpdGVvcHRpb25zKVxcYi9pLFxuXHQnb3BlcmF0b3InOiAvXFwuXFwufDpbPTpdfFstKyovXT0/fDw+fFs8Pl09P3w9fFxcYig/OmFuZHxkaXZ8bW9kfG5vdHxvcnx4b3IpXFxiL2ksXG5cdCdwdW5jdHVhdGlvbic6IC9bKClcXFtcXF17fTouOyxdL1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=