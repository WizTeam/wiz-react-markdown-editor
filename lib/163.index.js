(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "./node_modules/prismjs/components/prism-hlsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hlsl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.hlsl = Prism.languages.extend('c', {

	// Regarding keywords and class names:
	// The list of all keywords was split into 'keyword' and 'class-name' tokens based on whether they are capitalized.
	// https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-keywords
	// https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-reserved-words
	'class-name': [
		Prism.languages.c['class-name'],
		/\b(?:AppendStructuredBuffer|BlendState|Buffer|ByteAddressBuffer|CompileShader|ComputeShader|ConsumeStructuredBuffer|DepthStencilState|DepthStencilView|DomainShader|GeometryShader|Hullshader|InputPatch|LineStream|OutputPatch|PixelShader|PointStream|RasterizerState|RenderTargetView|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture(?:1D|1DArray|2D|2DArray|3D)|SamplerComparisonState|SamplerState|StructuredBuffer|Texture(?:1D|1DArray|2D|2DArray|2DMS|2DMSArray|3D|Cube|CubeArray)|TriangleStream|VertexShader)\b/
	],
	'keyword': [
		// HLSL keyword
		/\b(?:asm|asm_fragment|auto|break|case|catch|cbuffer|centroid|char|class|column_major|compile|compile_fragment|const|const_cast|continue|default|delete|discard|do|dynamic_cast|else|enum|explicit|export|extern|for|friend|fxgroup|goto|groupshared|if|in|inline|inout|interface|line|lineadj|linear|long|matrix|mutable|namespace|new|nointerpolation|noperspective|operator|out|packoffset|pass|pixelfragment|point|precise|private|protected|public|register|reinterpret_cast|return|row_major|sample|sampler|shared|short|signed|sizeof|snorm|stateblock|stateblock_state|static|static_cast|string|struct|switch|tbuffer|technique|technique10|technique11|template|texture|this|throw|triangle|triangleadj|try|typedef|typename|uniform|union|unorm|unsigned|using|vector|vertexfragment|virtual|void|volatile|while)\b/,
		// scalar, vector, and matrix types
		/\b(?:bool|double|dword|float|half|int|min(?:10float|12int|16(?:float|int|uint))|uint)(?:[1-4](?:x[1-4])?)?\b/
	],
	// https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-grammar#floating-point-numbers
	'number': /(?:(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?|\b0x[\da-fA-F]+)[fFhHlLuU]?\b/,
	'boolean': /\b(?:false|true)\b/
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhsc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMTYzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmhsc2wgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjJywge1xuXG5cdC8vIFJlZ2FyZGluZyBrZXl3b3JkcyBhbmQgY2xhc3MgbmFtZXM6XG5cdC8vIFRoZSBsaXN0IG9mIGFsbCBrZXl3b3JkcyB3YXMgc3BsaXQgaW50byAna2V5d29yZCcgYW5kICdjbGFzcy1uYW1lJyB0b2tlbnMgYmFzZWQgb24gd2hldGhlciB0aGV5IGFyZSBjYXBpdGFsaXplZC5cblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvd2luZG93cy93aW4zMi9kaXJlY3QzZGhsc2wvZHgtZ3JhcGhpY3MtaGxzbC1hcHBlbmRpeC1rZXl3b3Jkc1xuXHQvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy93aW5kb3dzL3dpbjMyL2RpcmVjdDNkaGxzbC9keC1ncmFwaGljcy1obHNsLWFwcGVuZGl4LXJlc2VydmVkLXdvcmRzXG5cdCdjbGFzcy1uYW1lJzogW1xuXHRcdFByaXNtLmxhbmd1YWdlcy5jWydjbGFzcy1uYW1lJ10sXG5cdFx0L1xcYig/OkFwcGVuZFN0cnVjdHVyZWRCdWZmZXJ8QmxlbmRTdGF0ZXxCdWZmZXJ8Qnl0ZUFkZHJlc3NCdWZmZXJ8Q29tcGlsZVNoYWRlcnxDb21wdXRlU2hhZGVyfENvbnN1bWVTdHJ1Y3R1cmVkQnVmZmVyfERlcHRoU3RlbmNpbFN0YXRlfERlcHRoU3RlbmNpbFZpZXd8RG9tYWluU2hhZGVyfEdlb21ldHJ5U2hhZGVyfEh1bGxzaGFkZXJ8SW5wdXRQYXRjaHxMaW5lU3RyZWFtfE91dHB1dFBhdGNofFBpeGVsU2hhZGVyfFBvaW50U3RyZWFtfFJhc3Rlcml6ZXJTdGF0ZXxSZW5kZXJUYXJnZXRWaWV3fFJXQnVmZmVyfFJXQnl0ZUFkZHJlc3NCdWZmZXJ8UldTdHJ1Y3R1cmVkQnVmZmVyfFJXVGV4dHVyZSg/OjFEfDFEQXJyYXl8MkR8MkRBcnJheXwzRCl8U2FtcGxlckNvbXBhcmlzb25TdGF0ZXxTYW1wbGVyU3RhdGV8U3RydWN0dXJlZEJ1ZmZlcnxUZXh0dXJlKD86MUR8MURBcnJheXwyRHwyREFycmF5fDJETVN8MkRNU0FycmF5fDNEfEN1YmV8Q3ViZUFycmF5KXxUcmlhbmdsZVN0cmVhbXxWZXJ0ZXhTaGFkZXIpXFxiL1xuXHRdLFxuXHQna2V5d29yZCc6IFtcblx0XHQvLyBITFNMIGtleXdvcmRcblx0XHQvXFxiKD86YXNtfGFzbV9mcmFnbWVudHxhdXRvfGJyZWFrfGNhc2V8Y2F0Y2h8Y2J1ZmZlcnxjZW50cm9pZHxjaGFyfGNsYXNzfGNvbHVtbl9tYWpvcnxjb21waWxlfGNvbXBpbGVfZnJhZ21lbnR8Y29uc3R8Y29uc3RfY2FzdHxjb250aW51ZXxkZWZhdWx0fGRlbGV0ZXxkaXNjYXJkfGRvfGR5bmFtaWNfY2FzdHxlbHNlfGVudW18ZXhwbGljaXR8ZXhwb3J0fGV4dGVybnxmb3J8ZnJpZW5kfGZ4Z3JvdXB8Z290b3xncm91cHNoYXJlZHxpZnxpbnxpbmxpbmV8aW5vdXR8aW50ZXJmYWNlfGxpbmV8bGluZWFkanxsaW5lYXJ8bG9uZ3xtYXRyaXh8bXV0YWJsZXxuYW1lc3BhY2V8bmV3fG5vaW50ZXJwb2xhdGlvbnxub3BlcnNwZWN0aXZlfG9wZXJhdG9yfG91dHxwYWNrb2Zmc2V0fHBhc3N8cGl4ZWxmcmFnbWVudHxwb2ludHxwcmVjaXNlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWdpc3RlcnxyZWludGVycHJldF9jYXN0fHJldHVybnxyb3dfbWFqb3J8c2FtcGxlfHNhbXBsZXJ8c2hhcmVkfHNob3J0fHNpZ25lZHxzaXplb2Z8c25vcm18c3RhdGVibG9ja3xzdGF0ZWJsb2NrX3N0YXRlfHN0YXRpY3xzdGF0aWNfY2FzdHxzdHJpbmd8c3RydWN0fHN3aXRjaHx0YnVmZmVyfHRlY2huaXF1ZXx0ZWNobmlxdWUxMHx0ZWNobmlxdWUxMXx0ZW1wbGF0ZXx0ZXh0dXJlfHRoaXN8dGhyb3d8dHJpYW5nbGV8dHJpYW5nbGVhZGp8dHJ5fHR5cGVkZWZ8dHlwZW5hbWV8dW5pZm9ybXx1bmlvbnx1bm9ybXx1bnNpZ25lZHx1c2luZ3x2ZWN0b3J8dmVydGV4ZnJhZ21lbnR8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi8sXG5cdFx0Ly8gc2NhbGFyLCB2ZWN0b3IsIGFuZCBtYXRyaXggdHlwZXNcblx0XHQvXFxiKD86Ym9vbHxkb3VibGV8ZHdvcmR8ZmxvYXR8aGFsZnxpbnR8bWluKD86MTBmbG9hdHwxMmludHwxNig/OmZsb2F0fGludHx1aW50KSl8dWludCkoPzpbMS00XSg/OnhbMS00XSk/KT9cXGIvXG5cdF0sXG5cdC8vIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL3dpbmRvd3Mvd2luMzIvZGlyZWN0M2RobHNsL2R4LWdyYXBoaWNzLWhsc2wtYXBwZW5kaXgtZ3JhbW1hciNmbG9hdGluZy1wb2ludC1udW1iZXJzXG5cdCdudW1iZXInOiAvKD86KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86W2VFXVsrLV0/XFxkKyk/fFxcYjB4W1xcZGEtZkEtRl0rKVtmRmhIbEx1VV0/XFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=