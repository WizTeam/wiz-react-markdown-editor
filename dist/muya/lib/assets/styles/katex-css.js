'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;
var _default =
  "\n/* stylelint-disable font-family-no-missing-generic-family-keyword */\n@font-face {\n  font-family: 'KaTeX_AMS';\n  src: url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'), url(fonts/KaTeX_AMS-Regular.woff) format('woff'), url(fonts/KaTeX_AMS-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url(fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'), url(fonts/KaTeX_Caligraphic-Bold.woff) format('woff'), url(fonts/KaTeX_Caligraphic-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url(fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'), url(fonts/KaTeX_Caligraphic-Regular.woff) format('woff'), url(fonts/KaTeX_Caligraphic-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url(fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'), url(fonts/KaTeX_Fraktur-Bold.woff) format('woff'), url(fonts/KaTeX_Fraktur-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url(fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'), url(fonts/KaTeX_Fraktur-Regular.woff) format('woff'), url(fonts/KaTeX_Fraktur-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url(fonts/KaTeX_Main-Bold.woff2) format('woff2'), url(fonts/KaTeX_Main-Bold.woff) format('woff'), url(fonts/KaTeX_Main-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url(fonts/KaTeX_Main-BoldItalic.woff2) format('woff2'), url(fonts/KaTeX_Main-BoldItalic.woff) format('woff'), url(fonts/KaTeX_Main-BoldItalic.ttf) format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url(fonts/KaTeX_Main-Italic.woff2) format('woff2'), url(fonts/KaTeX_Main-Italic.woff) format('woff'), url(fonts/KaTeX_Main-Italic.ttf) format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url(fonts/KaTeX_Main-Regular.woff2) format('woff2'), url(fonts/KaTeX_Main-Regular.woff) format('woff'), url(fonts/KaTeX_Main-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url(fonts/KaTeX_Math-BoldItalic.woff2) format('woff2'), url(fonts/KaTeX_Math-BoldItalic.woff) format('woff'), url(fonts/KaTeX_Math-BoldItalic.ttf) format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url(fonts/KaTeX_Math-Italic.woff2) format('woff2'), url(fonts/KaTeX_Math-Italic.woff) format('woff'), url(fonts/KaTeX_Math-Italic.ttf) format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url(fonts/KaTeX_SansSerif-Bold.woff2) format('woff2'), url(fonts/KaTeX_SansSerif-Bold.woff) format('woff'), url(fonts/KaTeX_SansSerif-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url(fonts/KaTeX_SansSerif-Italic.woff2) format('woff2'), url(fonts/KaTeX_SansSerif-Italic.woff) format('woff'), url(fonts/KaTeX_SansSerif-Italic.ttf) format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url(fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'), url(fonts/KaTeX_SansSerif-Regular.woff) format('woff'), url(fonts/KaTeX_SansSerif-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Script';\n  src: url(fonts/KaTeX_Script-Regular.woff2) format('woff2'), url(fonts/KaTeX_Script-Regular.woff) format('woff'), url(fonts/KaTeX_Script-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size1';\n  src: url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'), url(fonts/KaTeX_Size1-Regular.woff) format('woff'), url(fonts/KaTeX_Size1-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size2';\n  src: url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'), url(fonts/KaTeX_Size2-Regular.woff) format('woff'), url(fonts/KaTeX_Size2-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size3';\n  src: url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'), url(fonts/KaTeX_Size3-Regular.woff) format('woff'), url(fonts/KaTeX_Size3-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size4';\n  src: url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'), url(fonts/KaTeX_Size4-Regular.woff) format('woff'), url(fonts/KaTeX_Size4-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Typewriter';\n  src: url(fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'), url(fonts/KaTeX_Typewriter-Regular.woff) format('woff'), url(fonts/KaTeX_Typewriter-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n.katex {\n  font: normal 1.21em KaTeX_Main, Times New Roman, serif;\n  line-height: 1.2;\n  text-indent: 0;\n  text-rendering: auto;\n  border-color: currentColor;\n}\n.katex * {\n  -ms-high-contrast-adjust: none !important;\n}\n.katex .katex-version::after {\n  content: \"0.12.0\";\n}\n.katex .katex-mathml {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n.katex .katex-html {\n  /* \newline is an empty block at top level, between .base elements */\n}\n.katex .katex-html > .newline {\n  display: block;\n}\n.katex .base {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  width: min-content;\n}\n.katex .strut {\n  display: inline-block;\n}\n.katex .textbf {\n  font-weight: bold;\n}\n.katex .textit {\n  font-style: italic;\n}\n.katex .textrm {\n  font-family: KaTeX_Main;\n}\n.katex .textsf {\n  font-family: KaTeX_SansSerif;\n}\n.katex .texttt {\n  font-family: KaTeX_Typewriter;\n}\n.katex .mathnormal {\n  font-family: KaTeX_Math;\n  font-style: italic;\n}\n.katex .mathit {\n  font-family: KaTeX_Main;\n  font-style: italic;\n}\n.katex .mathrm {\n  font-style: normal;\n}\n.katex .mathbf {\n  font-family: KaTeX_Main;\n  font-weight: bold;\n}\n.katex .boldsymbol {\n  font-family: KaTeX_Math;\n  font-weight: bold;\n  font-style: italic;\n}\n.katex .amsrm {\n  font-family: KaTeX_AMS;\n}\n.katex .mathbb,\n.katex .textbb {\n  font-family: KaTeX_AMS;\n}\n.katex .mathcal {\n  font-family: KaTeX_Caligraphic;\n}\n.katex .mathfrak,\n.katex .textfrak {\n  font-family: KaTeX_Fraktur;\n}\n.katex .mathtt {\n  font-family: KaTeX_Typewriter;\n}\n.katex .mathscr,\n.katex .textscr {\n  font-family: KaTeX_Script;\n}\n.katex .mathsf,\n.katex .textsf {\n  font-family: KaTeX_SansSerif;\n}\n.katex .mathboldsf,\n.katex .textboldsf {\n  font-family: KaTeX_SansSerif;\n  font-weight: bold;\n}\n.katex .mathitsf,\n.katex .textitsf {\n  font-family: KaTeX_SansSerif;\n  font-style: italic;\n}\n.katex .mainrm {\n  font-family: KaTeX_Main;\n  font-style: normal;\n}\n.katex .vlist-t {\n  display: inline-table;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n.katex .vlist-r {\n  display: table-row;\n}\n.katex .vlist {\n  display: table-cell;\n  vertical-align: bottom;\n  position: relative;\n}\n.katex .vlist > span {\n  display: block;\n  height: 0;\n  position: relative;\n}\n.katex .vlist > span > span {\n  display: inline-block;\n}\n.katex .vlist > span > .pstrut {\n  overflow: hidden;\n  width: 0;\n}\n.katex .vlist-t2 {\n  margin-right: -2px;\n}\n.katex .vlist-s {\n  display: table-cell;\n  vertical-align: bottom;\n  font-size: 1px;\n  width: 2px;\n  min-width: 2px;\n}\n.katex .vbox {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  align-items: baseline;\n}\n.katex .hbox {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%;\n}\n.katex .thinbox {\n  display: inline-flex;\n  flex-direction: row;\n  width: 0;\n  max-width: 0;\n}\n.katex .msupsub {\n  text-align: left;\n}\n.katex .mfrac > span > span {\n  text-align: center;\n}\n.katex .mfrac .frac-line {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\n.katex .mfrac .frac-line,\n.katex .overline .overline-line,\n.katex .underline .underline-line,\n.katex .hline,\n.katex .hdashline,\n.katex .rule {\n  min-height: 1px;\n}\n.katex .mspace {\n  display: inline-block;\n}\n.katex .llap,\n.katex .rlap,\n.katex .clap {\n  width: 0;\n  position: relative;\n}\n.katex .llap > .inner,\n.katex .rlap > .inner,\n.katex .clap > .inner {\n  position: absolute;\n}\n.katex .llap > .fix,\n.katex .rlap > .fix,\n.katex .clap > .fix {\n  display: inline-block;\n}\n.katex .llap > .inner {\n  right: 0;\n}\n.katex .rlap > .inner,\n.katex .clap > .inner {\n  left: 0;\n}\n.katex .clap > .inner > span {\n  margin-left: -50%;\n  margin-right: 50%;\n}\n.katex .rule {\n  display: inline-block;\n  border: solid 0;\n  position: relative;\n}\n.katex .overline .overline-line,\n.katex .underline .underline-line,\n.katex .hline {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\n.katex .hdashline {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: dashed;\n}\n.katex .sqrt > .root {\n  margin-left: 0.27777778em;\n  margin-right: -0.55555556em;\n}\n.katex .sizing.reset-size1.size1,\n.katex .fontsize-ensurer.reset-size1.size1 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size1.size2,\n.katex .fontsize-ensurer.reset-size1.size2 {\n  font-size: 1.2em;\n}\n.katex .sizing.reset-size1.size3,\n.katex .fontsize-ensurer.reset-size1.size3 {\n  font-size: 1.4em;\n}\n.katex .sizing.reset-size1.size4,\n.katex .fontsize-ensurer.reset-size1.size4 {\n  font-size: 1.6em;\n}\n.katex .sizing.reset-size1.size5,\n.katex .fontsize-ensurer.reset-size1.size5 {\n  font-size: 1.8em;\n}\n.katex .sizing.reset-size1.size6,\n.katex .fontsize-ensurer.reset-size1.size6 {\n  font-size: 2em;\n}\n.katex .sizing.reset-size1.size7,\n.katex .fontsize-ensurer.reset-size1.size7 {\n  font-size: 2.4em;\n}\n.katex .sizing.reset-size1.size8,\n.katex .fontsize-ensurer.reset-size1.size8 {\n  font-size: 2.88em;\n}\n.katex .sizing.reset-size1.size9,\n.katex .fontsize-ensurer.reset-size1.size9 {\n  font-size: 3.456em;\n}\n.katex .sizing.reset-size1.size10,\n.katex .fontsize-ensurer.reset-size1.size10 {\n  font-size: 4.148em;\n}\n.katex .sizing.reset-size1.size11,\n.katex .fontsize-ensurer.reset-size1.size11 {\n  font-size: 4.976em;\n}\n.katex .sizing.reset-size2.size1,\n.katex .fontsize-ensurer.reset-size2.size1 {\n  font-size: 0.83333333em;\n}\n.katex .sizing.reset-size2.size2,\n.katex .fontsize-ensurer.reset-size2.size2 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size2.size3,\n.katex .fontsize-ensurer.reset-size2.size3 {\n  font-size: 1.16666667em;\n}\n.katex .sizing.reset-size2.size4,\n.katex .fontsize-ensurer.reset-size2.size4 {\n  font-size: 1.33333333em;\n}\n.katex .sizing.reset-size2.size5,\n.katex .fontsize-ensurer.reset-size2.size5 {\n  font-size: 1.5em;\n}\n.katex .sizing.reset-size2.size6,\n.katex .fontsize-ensurer.reset-size2.size6 {\n  font-size: 1.66666667em;\n}\n.katex .sizing.reset-size2.size7,\n.katex .fontsize-ensurer.reset-size2.size7 {\n  font-size: 2em;\n}\n.katex .sizing.reset-size2.size8,\n.katex .fontsize-ensurer.reset-size2.size8 {\n  font-size: 2.4em;\n}\n.katex .sizing.reset-size2.size9,\n.katex .fontsize-ensurer.reset-size2.size9 {\n  font-size: 2.88em;\n}\n.katex .sizing.reset-size2.size10,\n.katex .fontsize-ensurer.reset-size2.size10 {\n  font-size: 3.45666667em;\n}\n.katex .sizing.reset-size2.size11,\n.katex .fontsize-ensurer.reset-size2.size11 {\n  font-size: 4.14666667em;\n}\n.katex .sizing.reset-size3.size1,\n.katex .fontsize-ensurer.reset-size3.size1 {\n  font-size: 0.71428571em;\n}\n.katex .sizing.reset-size3.size2,\n.katex .fontsize-ensurer.reset-size3.size2 {\n  font-size: 0.85714286em;\n}\n.katex .sizing.reset-size3.size3,\n.katex .fontsize-ensurer.reset-size3.size3 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size3.size4,\n.katex .fontsize-ensurer.reset-size3.size4 {\n  font-size: 1.14285714em;\n}\n.katex .sizing.reset-size3.size5,\n.katex .fontsize-ensurer.reset-size3.size5 {\n  font-size: 1.28571429em;\n}\n.katex .sizing.reset-size3.size6,\n.katex .fontsize-ensurer.reset-size3.size6 {\n  font-size: 1.42857143em;\n}\n.katex .sizing.reset-size3.size7,\n.katex .fontsize-ensurer.reset-size3.size7 {\n  font-size: 1.71428571em;\n}\n.katex .sizing.reset-size3.size8,\n.katex .fontsize-ensurer.reset-size3.size8 {\n  font-size: 2.05714286em;\n}\n.katex .sizing.reset-size3.size9,\n.katex .fontsize-ensurer.reset-size3.size9 {\n  font-size: 2.46857143em;\n}\n.katex .sizing.reset-size3.size10,\n.katex .fontsize-ensurer.reset-size3.size10 {\n  font-size: 2.96285714em;\n}\n.katex .sizing.reset-size3.size11,\n.katex .fontsize-ensurer.reset-size3.size11 {\n  font-size: 3.55428571em;\n}\n.katex .sizing.reset-size4.size1,\n.katex .fontsize-ensurer.reset-size4.size1 {\n  font-size: 0.625em;\n}\n.katex .sizing.reset-size4.size2,\n.katex .fontsize-ensurer.reset-size4.size2 {\n  font-size: 0.75em;\n}\n.katex .sizing.reset-size4.size3,\n.katex .fontsize-ensurer.reset-size4.size3 {\n  font-size: 0.875em;\n}\n.katex .sizing.reset-size4.size4,\n.katex .fontsize-ensurer.reset-size4.size4 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size4.size5,\n.katex .fontsize-ensurer.reset-size4.size5 {\n  font-size: 1.125em;\n}\n.katex .sizing.reset-size4.size6,\n.katex .fontsize-ensurer.reset-size4.size6 {\n  font-size: 1.25em;\n}\n.katex .sizing.reset-size4.size7,\n.katex .fontsize-ensurer.reset-size4.size7 {\n  font-size: 1.5em;\n}\n.katex .sizing.reset-size4.size8,\n.katex .fontsize-ensurer.reset-size4.size8 {\n  font-size: 1.8em;\n}\n.katex .sizing.reset-size4.size9,\n.katex .fontsize-ensurer.reset-size4.size9 {\n  font-size: 2.16em;\n}\n.katex .sizing.reset-size4.size10,\n.katex .fontsize-ensurer.reset-size4.size10 {\n  font-size: 2.5925em;\n}\n.katex .sizing.reset-size4.size11,\n.katex .fontsize-ensurer.reset-size4.size11 {\n  font-size: 3.11em;\n}\n.katex .sizing.reset-size5.size1,\n.katex .fontsize-ensurer.reset-size5.size1 {\n  font-size: 0.55555556em;\n}\n.katex .sizing.reset-size5.size2,\n.katex .fontsize-ensurer.reset-size5.size2 {\n  font-size: 0.66666667em;\n}\n.katex .sizing.reset-size5.size3,\n.katex .fontsize-ensurer.reset-size5.size3 {\n  font-size: 0.77777778em;\n}\n.katex .sizing.reset-size5.size4,\n.katex .fontsize-ensurer.reset-size5.size4 {\n  font-size: 0.88888889em;\n}\n.katex .sizing.reset-size5.size5,\n.katex .fontsize-ensurer.reset-size5.size5 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size5.size6,\n.katex .fontsize-ensurer.reset-size5.size6 {\n  font-size: 1.11111111em;\n}\n.katex .sizing.reset-size5.size7,\n.katex .fontsize-ensurer.reset-size5.size7 {\n  font-size: 1.33333333em;\n}\n.katex .sizing.reset-size5.size8,\n.katex .fontsize-ensurer.reset-size5.size8 {\n  font-size: 1.6em;\n}\n.katex .sizing.reset-size5.size9,\n.katex .fontsize-ensurer.reset-size5.size9 {\n  font-size: 1.92em;\n}\n.katex .sizing.reset-size5.size10,\n.katex .fontsize-ensurer.reset-size5.size10 {\n  font-size: 2.30444444em;\n}\n.katex .sizing.reset-size5.size11,\n.katex .fontsize-ensurer.reset-size5.size11 {\n  font-size: 2.76444444em;\n}\n.katex .sizing.reset-size6.size1,\n.katex .fontsize-ensurer.reset-size6.size1 {\n  font-size: 0.5em;\n}\n.katex .sizing.reset-size6.size2,\n.katex .fontsize-ensurer.reset-size6.size2 {\n  font-size: 0.6em;\n}\n.katex .sizing.reset-size6.size3,\n.katex .fontsize-ensurer.reset-size6.size3 {\n  font-size: 0.7em;\n}\n.katex .sizing.reset-size6.size4,\n.katex .fontsize-ensurer.reset-size6.size4 {\n  font-size: 0.8em;\n}\n.katex .sizing.reset-size6.size5,\n.katex .fontsize-ensurer.reset-size6.size5 {\n  font-size: 0.9em;\n}\n.katex .sizing.reset-size6.size6,\n.katex .fontsize-ensurer.reset-size6.size6 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size6.size7,\n.katex .fontsize-ensurer.reset-size6.size7 {\n  font-size: 1.2em;\n}\n.katex .sizing.reset-size6.size8,\n.katex .fontsize-ensurer.reset-size6.size8 {\n  font-size: 1.44em;\n}\n.katex .sizing.reset-size6.size9,\n.katex .fontsize-ensurer.reset-size6.size9 {\n  font-size: 1.728em;\n}\n.katex .sizing.reset-size6.size10,\n.katex .fontsize-ensurer.reset-size6.size10 {\n  font-size: 2.074em;\n}\n.katex .sizing.reset-size6.size11,\n.katex .fontsize-ensurer.reset-size6.size11 {\n  font-size: 2.488em;\n}\n.katex .sizing.reset-size7.size1,\n.katex .fontsize-ensurer.reset-size7.size1 {\n  font-size: 0.41666667em;\n}\n.katex .sizing.reset-size7.size2,\n.katex .fontsize-ensurer.reset-size7.size2 {\n  font-size: 0.5em;\n}\n.katex .sizing.reset-size7.size3,\n.katex .fontsize-ensurer.reset-size7.size3 {\n  font-size: 0.58333333em;\n}\n.katex .sizing.reset-size7.size4,\n.katex .fontsize-ensurer.reset-size7.size4 {\n  font-size: 0.66666667em;\n}\n.katex .sizing.reset-size7.size5,\n.katex .fontsize-ensurer.reset-size7.size5 {\n  font-size: 0.75em;\n}\n.katex .sizing.reset-size7.size6,\n.katex .fontsize-ensurer.reset-size7.size6 {\n  font-size: 0.83333333em;\n}\n.katex .sizing.reset-size7.size7,\n.katex .fontsize-ensurer.reset-size7.size7 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size7.size8,\n.katex .fontsize-ensurer.reset-size7.size8 {\n  font-size: 1.2em;\n}\n.katex .sizing.reset-size7.size9,\n.katex .fontsize-ensurer.reset-size7.size9 {\n  font-size: 1.44em;\n}\n.katex .sizing.reset-size7.size10,\n.katex .fontsize-ensurer.reset-size7.size10 {\n  font-size: 1.72833333em;\n}\n.katex .sizing.reset-size7.size11,\n.katex .fontsize-ensurer.reset-size7.size11 {\n  font-size: 2.07333333em;\n}\n.katex .sizing.reset-size8.size1,\n.katex .fontsize-ensurer.reset-size8.size1 {\n  font-size: 0.34722222em;\n}\n.katex .sizing.reset-size8.size2,\n.katex .fontsize-ensurer.reset-size8.size2 {\n  font-size: 0.41666667em;\n}\n.katex .sizing.reset-size8.size3,\n.katex .fontsize-ensurer.reset-size8.size3 {\n  font-size: 0.48611111em;\n}\n.katex .sizing.reset-size8.size4,\n.katex .fontsize-ensurer.reset-size8.size4 {\n  font-size: 0.55555556em;\n}\n.katex .sizing.reset-size8.size5,\n.katex .fontsize-ensurer.reset-size8.size5 {\n  font-size: 0.625em;\n}\n.katex .sizing.reset-size8.size6,\n.katex .fontsize-ensurer.reset-size8.size6 {\n  font-size: 0.69444444em;\n}\n.katex .sizing.reset-size8.size7,\n.katex .fontsize-ensurer.reset-size8.size7 {\n  font-size: 0.83333333em;\n}\n.katex .sizing.reset-size8.size8,\n.katex .fontsize-ensurer.reset-size8.size8 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size8.size9,\n.katex .fontsize-ensurer.reset-size8.size9 {\n  font-size: 1.2em;\n}\n.katex .sizing.reset-size8.size10,\n.katex .fontsize-ensurer.reset-size8.size10 {\n  font-size: 1.44027778em;\n}\n.katex .sizing.reset-size8.size11,\n.katex .fontsize-ensurer.reset-size8.size11 {\n  font-size: 1.72777778em;\n}\n.katex .sizing.reset-size9.size1,\n.katex .fontsize-ensurer.reset-size9.size1 {\n  font-size: 0.28935185em;\n}\n.katex .sizing.reset-size9.size2,\n.katex .fontsize-ensurer.reset-size9.size2 {\n  font-size: 0.34722222em;\n}\n.katex .sizing.reset-size9.size3,\n.katex .fontsize-ensurer.reset-size9.size3 {\n  font-size: 0.40509259em;\n}\n.katex .sizing.reset-size9.size4,\n.katex .fontsize-ensurer.reset-size9.size4 {\n  font-size: 0.46296296em;\n}\n.katex .sizing.reset-size9.size5,\n.katex .fontsize-ensurer.reset-size9.size5 {\n  font-size: 0.52083333em;\n}\n.katex .sizing.reset-size9.size6,\n.katex .fontsize-ensurer.reset-size9.size6 {\n  font-size: 0.5787037em;\n}\n.katex .sizing.reset-size9.size7,\n.katex .fontsize-ensurer.reset-size9.size7 {\n  font-size: 0.69444444em;\n}\n.katex .sizing.reset-size9.size8,\n.katex .fontsize-ensurer.reset-size9.size8 {\n  font-size: 0.83333333em;\n}\n.katex .sizing.reset-size9.size9,\n.katex .fontsize-ensurer.reset-size9.size9 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size9.size10,\n.katex .fontsize-ensurer.reset-size9.size10 {\n  font-size: 1.20023148em;\n}\n.katex .sizing.reset-size9.size11,\n.katex .fontsize-ensurer.reset-size9.size11 {\n  font-size: 1.43981481em;\n}\n.katex .sizing.reset-size10.size1,\n.katex .fontsize-ensurer.reset-size10.size1 {\n  font-size: 0.24108004em;\n}\n.katex .sizing.reset-size10.size2,\n.katex .fontsize-ensurer.reset-size10.size2 {\n  font-size: 0.28929605em;\n}\n.katex .sizing.reset-size10.size3,\n.katex .fontsize-ensurer.reset-size10.size3 {\n  font-size: 0.33751205em;\n}\n.katex .sizing.reset-size10.size4,\n.katex .fontsize-ensurer.reset-size10.size4 {\n  font-size: 0.38572806em;\n}\n.katex .sizing.reset-size10.size5,\n.katex .fontsize-ensurer.reset-size10.size5 {\n  font-size: 0.43394407em;\n}\n.katex .sizing.reset-size10.size6,\n.katex .fontsize-ensurer.reset-size10.size6 {\n  font-size: 0.48216008em;\n}\n.katex .sizing.reset-size10.size7,\n.katex .fontsize-ensurer.reset-size10.size7 {\n  font-size: 0.57859209em;\n}\n.katex .sizing.reset-size10.size8,\n.katex .fontsize-ensurer.reset-size10.size8 {\n  font-size: 0.69431051em;\n}\n.katex .sizing.reset-size10.size9,\n.katex .fontsize-ensurer.reset-size10.size9 {\n  font-size: 0.83317261em;\n}\n.katex .sizing.reset-size10.size10,\n.katex .fontsize-ensurer.reset-size10.size10 {\n  font-size: 1em;\n}\n.katex .sizing.reset-size10.size11,\n.katex .fontsize-ensurer.reset-size10.size11 {\n  font-size: 1.19961427em;\n}\n.katex .sizing.reset-size11.size1,\n.katex .fontsize-ensurer.reset-size11.size1 {\n  font-size: 0.20096463em;\n}\n.katex .sizing.reset-size11.size2,\n.katex .fontsize-ensurer.reset-size11.size2 {\n  font-size: 0.24115756em;\n}\n.katex .sizing.reset-size11.size3,\n.katex .fontsize-ensurer.reset-size11.size3 {\n  font-size: 0.28135048em;\n}\n.katex .sizing.reset-size11.size4,\n.katex .fontsize-ensurer.reset-size11.size4 {\n  font-size: 0.32154341em;\n}\n.katex .sizing.reset-size11.size5,\n.katex .fontsize-ensurer.reset-size11.size5 {\n  font-size: 0.36173633em;\n}\n.katex .sizing.reset-size11.size6,\n.katex .fontsize-ensurer.reset-size11.size6 {\n  font-size: 0.40192926em;\n}\n.katex .sizing.reset-size11.size7,\n.katex .fontsize-ensurer.reset-size11.size7 {\n  font-size: 0.48231511em;\n}\n.katex .sizing.reset-size11.size8,\n.katex .fontsize-ensurer.reset-size11.size8 {\n  font-size: 0.57877814em;\n}\n.katex .sizing.reset-size11.size9,\n.katex .fontsize-ensurer.reset-size11.size9 {\n  font-size: 0.69453376em;\n}\n.katex .sizing.reset-size11.size10,\n.katex .fontsize-ensurer.reset-size11.size10 {\n  font-size: 0.83360129em;\n}\n.katex .sizing.reset-size11.size11,\n.katex .fontsize-ensurer.reset-size11.size11 {\n  font-size: 1em;\n}\n.katex .delimsizing.size1 {\n  font-family: KaTeX_Size1;\n}\n.katex .delimsizing.size2 {\n  font-family: KaTeX_Size2;\n}\n.katex .delimsizing.size3 {\n  font-family: KaTeX_Size3;\n}\n.katex .delimsizing.size4 {\n  font-family: KaTeX_Size4;\n}\n.katex .delimsizing.mult .delim-size1 > span {\n  font-family: KaTeX_Size1;\n}\n.katex .delimsizing.mult .delim-size4 > span {\n  font-family: KaTeX_Size4;\n}\n.katex .nulldelimiter {\n  display: inline-block;\n  width: 0.12em;\n}\n.katex .delimcenter {\n  position: relative;\n}\n.katex .op-symbol {\n  position: relative;\n}\n.katex .op-symbol.small-op {\n  font-family: KaTeX_Size1;\n}\n.katex .op-symbol.large-op {\n  font-family: KaTeX_Size2;\n}\n.katex .op-limits > .vlist-t {\n  text-align: center;\n}\n.katex .accent > .vlist-t {\n  text-align: center;\n}\n.katex .accent .accent-body {\n  position: relative;\n}\n.katex .accent .accent-body:not(.accent-full) {\n  width: 0;\n}\n.katex .overlay {\n  display: block;\n}\n.katex .mtable .vertical-separator {\n  display: inline-block;\n  min-width: 1px;\n}\n.katex .mtable .arraycolsep {\n  display: inline-block;\n}\n.katex .mtable .col-align-c > .vlist-t {\n  text-align: center;\n}\n.katex .mtable .col-align-l > .vlist-t {\n  text-align: left;\n}\n.katex .mtable .col-align-r > .vlist-t {\n  text-align: right;\n}\n.katex .svg-align {\n  text-align: left;\n}\n.katex svg {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: inherit;\n  fill: currentColor;\n  stroke: currentColor;\n  fill-rule: nonzero;\n  fill-opacity: 1;\n  stroke-width: 1;\n  stroke-linecap: butt;\n  stroke-linejoin: miter;\n  stroke-miterlimit: 4;\n  stroke-dasharray: none;\n  stroke-dashoffset: 0;\n  stroke-opacity: 1;\n}\n.katex svg path {\n  stroke: none;\n}\n.katex img {\n  border-style: none;\n  min-width: 0;\n  min-height: 0;\n  max-width: none;\n  max-height: none;\n}\n.katex .stretchy {\n  width: 100%;\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n.katex .stretchy::before,\n.katex .stretchy::after {\n  content: \"\";\n}\n.katex .hide-tail {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.katex .halfarrow-left {\n  position: absolute;\n  left: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\n.katex .halfarrow-right {\n  position: absolute;\n  right: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\n.katex .brace-left {\n  position: absolute;\n  left: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\n.katex .brace-center {\n  position: absolute;\n  left: 25%;\n  width: 50%;\n  overflow: hidden;\n}\n.katex .brace-right {\n  position: absolute;\n  right: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\n.katex .x-arrow-pad {\n  padding: 0 0.5em;\n}\n.katex .x-arrow,\n.katex .mover,\n.katex .munder {\n  text-align: center;\n}\n.katex .boxpad {\n  padding: 0 0.3em 0 0.3em;\n}\n.katex .fbox,\n.katex .fcolorbox {\n  box-sizing: border-box;\n  border: 0.04em solid;\n}\n.katex .cancel-pad {\n  padding: 0 0.2em 0 0.2em;\n}\n.katex .cancel-lap {\n  margin-left: -0.2em;\n  margin-right: -0.2em;\n}\n.katex .sout {\n  border-bottom-style: solid;\n  border-bottom-width: 0.08em;\n}\n.katex-display {\n  display: block;\n  margin: 1em 0;\n  text-align: center;\n}\n.katex-display > .katex {\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n}\n.katex-display > .katex > .katex-html {\n  display: block;\n  position: relative;\n}\n.katex-display > .katex > .katex-html > .tag {\n  position: absolute;\n  right: 0;\n}\n.katex-display.leqno > .katex > .katex-html > .tag {\n  left: 0;\n  right: auto;\n}\n.katex-display.fleqn > .katex {\n  text-align: left;\n  padding-left: 2em;\n}\n\n\n";
exports.default = _default;