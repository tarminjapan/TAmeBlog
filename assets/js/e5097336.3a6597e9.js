"use strict";(self.webpackChunkt_ame_blog=self.webpackChunkt_ame_blog||[]).push([[9921],{8453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var t=a(6540);const n={},r=t.createContext(n);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:s},e.children)}},9447:e=>{e.exports=JSON.parse('{"permalink":"/TAmeBlog/blog/2025/04/11/2025/04/abc261_e","source":"@site/blog/2025/04/2025-04-11-abc261_e.md","title":"AtCoder ABC261 E - Many Operations \u89e3\u8aac","description":"\u554f\u984c\u30da\u30fc\u30b8:","date":"2025-04-11T00:00:00.000Z","tags":[{"inline":true,"label":"AtCoder","permalink":"/TAmeBlog/blog/tags/at-coder"},{"inline":true,"label":"ABC261","permalink":"/TAmeBlog/blog/tags/abc-261"},{"inline":true,"label":"E","permalink":"/TAmeBlog/blog/tags/e"},{"inline":true,"label":"\u30d3\u30c3\u30c8\u6f14\u7b97","permalink":"/TAmeBlog/blog/tags/\u30d3\u30c3\u30c8\u6f14\u7b97"}],"readingTime":4.175,"hasTruncateMarker":true,"authors":[{"name":"TAmemiya","title":"Small fry IT technician","imageURL":"https://github.com/tarminjapan.png","key":"tame","page":null}],"frontMatter":{"title":"AtCoder ABC261 E - Many Operations \u89e3\u8aac","date":"2025-04-11T00:00:00.000Z","authors":["tame"],"tags":["AtCoder","ABC261","E","\u30d3\u30c3\u30c8\u6f14\u7b97"]},"unlisted":false,"nextItem":{"title":"AtCoder ABC273 E - Notebook \u89e3\u8aac","permalink":"/TAmeBlog/blog/2025/04/09/2025/04/abc273_e"}}')},9534:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>m});var t=a(9447),n=a(4848),r=a(8453);const l={title:"AtCoder ABC261 E - Many Operations \u89e3\u8aac",date:new Date("2025-04-11T00:00:00.000Z"),authors:["tame"],tags:["AtCoder","ABC261","E","\u30d3\u30c3\u30c8\u6f14\u7b97"]},i="E - Notebook",c={authorsImageUrls:[void 0]},m=[{value:"\u65b9\u91dd",id:"\u65b9\u91dd",level:2}];function o(e){const s={a:"a",annotation:"annotation",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u554f\u984c\u30da\u30fc\u30b8:"})," ",(0,n.jsx)(s.a,{href:"https://atcoder.jp/contests/abc261/tasks/abc261_e",children:"https://atcoder.jp/contests/abc261/tasks/abc261_e"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u63d0\u51fa\u30b3\u30fc\u30c9:"})," ",(0,n.jsx)(s.a,{href:"https://atcoder.jp/contests/abc261/submissions/64703668",children:"https://atcoder.jp/contests/abc261/submissions/64703668"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u65b9\u91dd",children:"\u65b9\u91dd"}),"\n",(0,n.jsxs)(s.p,{children:["\u5404\u30b9\u30c6\u30c3\u30d7 ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"i"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u3067\u3001\u521d\u671f\u5024 ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"C"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u306b\u5bfe\u3057\u3066\u64cd\u4f5c ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mo,{children:"\u2026"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"i"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"1, 2, \\dots, i"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:"2"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"minner",children:"\u2026"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u3092\u9069\u7528\u3057\u305f\u7d50\u679c\u3092\u52b9\u7387\u7684\u306b\u6c42\u3081\u308b\u65b9\u6cd5\u3092\u8003\u3048\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);