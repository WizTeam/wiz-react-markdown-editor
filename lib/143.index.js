(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ "./node_modules/prismjs/components/prism-glsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-glsl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.glsl = Prism.languages.extend('c', {
	'keyword': /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMTQzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmdsc2wgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjJywge1xuXHQna2V5d29yZCc6IC9cXGIoPzphdHRyaWJ1dGV8Y29uc3R8dW5pZm9ybXx2YXJ5aW5nfGJ1ZmZlcnxzaGFyZWR8Y29oZXJlbnR8dm9sYXRpbGV8cmVzdHJpY3R8cmVhZG9ubHl8d3JpdGVvbmx5fGF0b21pY191aW50fGxheW91dHxjZW50cm9pZHxmbGF0fHNtb290aHxub3BlcnNwZWN0aXZlfHBhdGNofHNhbXBsZXxicmVha3xjb250aW51ZXxkb3xmb3J8d2hpbGV8c3dpdGNofGNhc2V8ZGVmYXVsdHxpZnxlbHNlfHN1YnJvdXRpbmV8aW58b3V0fGlub3V0fGZsb2F0fGRvdWJsZXxpbnR8dm9pZHxib29sfHRydWV8ZmFsc2V8aW52YXJpYW50fHByZWNpc2V8ZGlzY2FyZHxyZXR1cm58ZD9tYXRbMjM0XSg/OnhbMjM0XSk/fFtpYmR1XT92ZWNbMjM0XXx1aW50fGxvd3B8bWVkaXVtcHxoaWdocHxwcmVjaXNpb258W2l1XT9zYW1wbGVyWzEyM11EfFtpdV0/c2FtcGxlckN1YmV8c2FtcGxlclsxMl1EU2hhZG93fHNhbXBsZXJDdWJlU2hhZG93fFtpdV0/c2FtcGxlclsxMl1EQXJyYXl8c2FtcGxlclsxMl1EQXJyYXlTaGFkb3d8W2l1XT9zYW1wbGVyMkRSZWN0fHNhbXBsZXIyRFJlY3RTaGFkb3d8W2l1XT9zYW1wbGVyQnVmZmVyfFtpdV0/c2FtcGxlcjJETVMoPzpBcnJheSk/fFtpdV0/c2FtcGxlckN1YmVBcnJheXxzYW1wbGVyQ3ViZUFycmF5U2hhZG93fFtpdV0/aW1hZ2VbMTIzXUR8W2l1XT9pbWFnZTJEUmVjdHxbaXVdP2ltYWdlQ3ViZXxbaXVdP2ltYWdlQnVmZmVyfFtpdV0/aW1hZ2VbMTJdREFycmF5fFtpdV0/aW1hZ2VDdWJlQXJyYXl8W2l1XT9pbWFnZTJETVMoPzpBcnJheSk/fHN0cnVjdHxjb21tb258cGFydGl0aW9ufGFjdGl2ZXxhc218Y2xhc3N8dW5pb258ZW51bXx0eXBlZGVmfHRlbXBsYXRlfHRoaXN8cmVzb3VyY2V8Z290b3xpbmxpbmV8bm9pbmxpbmV8cHVibGljfHN0YXRpY3xleHRlcm58ZXh0ZXJuYWx8aW50ZXJmYWNlfGxvbmd8c2hvcnR8aGFsZnxmaXhlZHx1bnNpZ25lZHxzdXBlcnB8aW5wdXR8b3V0cHV0fGh2ZWNbMjM0XXxmdmVjWzIzNF18c2FtcGxlcjNEUmVjdHxmaWx0ZXJ8c2l6ZW9mfGNhc3R8bmFtZXNwYWNlfHVzaW5nKVxcYi9cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==