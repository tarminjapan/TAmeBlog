"use strict";(self.webpackChunkt_ame_blog=self.webpackChunkt_ame_blog||[]).push([[5951],{221:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>m});var n=a(2788),t=a(4848),i=a(8453);const l={title:"AtCoder ABC325 D - Printing Machine \u89e3\u8aac",date:new Date("2025-04-03T00:00:00.000Z"),authors:["tame"],tags:["AtCoder","ABC325","D","PriorityQueue"]},r="D - Printing Machine",c={authorsImageUrls:[void 0]},m=[{value:"\u65b9\u91dd",id:"\u65b9\u91dd",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u554f\u984c\u30da\u30fc\u30b8:"})," ",(0,t.jsx)(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_d",children:"https://atcoder.jp/contests/abc325/tasks/abc325_d"})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63d0\u51fa\u30b3\u30fc\u30c9:"})," ",(0,t.jsx)(e.a,{href:"https://atcoder.jp/contests/abc325/submissions/64449431",children:"https://atcoder.jp/contests/abc325/submissions/64449431"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u65b9\u91dd",children:"\u65b9\u91dd"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["2\u3064\u306ePriorityQueue\uff08\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\uff09 ",(0,t.jsx)(e.code,{children:"Pqueue1"})," \u3068 ",(0,t.jsx)(e.code,{children:"Pqueue2"})," \u3092\u7528\u3044\u3066\u3001\u5546\u54c1\u306e\u6d41\u308c\u3068\u5370\u5b57\u6a5f\u306e\u72b6\u614b\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["1\u3064\u76ee\u306ePriorityQueue ",(0,t.jsx)(e.code,{children:"Pqueue1"})," \u306b\u306f\u3001\u307e\u3060\u5370\u5b57\u6a5f\u306b\u5230\u9054\u3057\u3066\u3044\u306a\u3044\u5546\u54c1\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002\n\xa0 - \u512a\u5148\u5ea6\u306f\u3001\u5546\u54c1\u304c\u5370\u5b57\u6a5f\u306b\u5165\u308b\u6642\u523b ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"T"}),(0,t.jsx)(e.mi,{children:"i"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"T_i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," \uff08\u5024\u304c\u5c0f\u3055\u3044\u65b9\u304c\u512a\u5148\u5ea6\u9ad8\uff09\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["2\u3064\u76ee\u306ePriorityQueue ",(0,t.jsx)(e.code,{children:"Pqueue2"})," \u306b\u306f\u3001\u5370\u5b57\u6a5f\u306e\u6709\u52b9\u7bc4\u56f2\u5185\u306b\u3042\u308b\uff08\u5370\u5b57\u5f85\u3061\u306e\uff09\u5546\u54c1\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u512a\u5148\u5ea6\u306f\u3001\u305d\u306e\u5546\u54c1\u304c\u5370\u5b57\u6a5f\u304b\u3089\u6392\u51fa\u3055\u308c\u308b\u3079\u304d\u6642\u523b ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"T"}),(0,t.jsx)(e.mi,{children:"i"})]}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"D"}),(0,t.jsx)(e.mi,{children:"i"})]})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"T_i + D_i"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})]})]})," \uff08\u5024\u304c\u5c0f\u3055\u3044\u65b9\u304c\u512a\u5148\u5ea6\u9ad8\uff09\u3068\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5370\u5b57\u53ef\u80fd\u671f\u9593\u304c\u77ed\u3044\uff08\uff1d\u65e9\u304f\u6392\u51fa\u3055\u308c\u308b\u3079\u304d\uff09\u5546\u54c1\u304b\u3089\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u73fe\u5728\u306e\u6642\u523b\u3092 ",(0,t.jsx)(e.code,{children:"t"})," \u3068\u3057\u3001 ",(0,t.jsx)(e.code,{children:"Pqueue1"})," \u3068 ",(0,t.jsx)(e.code,{children:"Pqueue2"})," \u306e\u4e21\u65b9\u304c\u7a7a\u306b\u306a\u308b\u307e\u3067\u3001\u4ee5\u4e0b\u306e\u51e6\u7406\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},2788:s=>{s.exports=JSON.parse('{"permalink":"/TAmeBlog/blog/2025/04/03/2025/04/abs325_d","source":"@site/blog/2025/04/2025-04-03-abs325_d.md","title":"AtCoder ABC325 D - Printing Machine \u89e3\u8aac","description":"\u554f\u984c\u30da\u30fc\u30b8//atcoder.jp/contests/abc325/tasks/abc325d","date":"2025-04-03T00:00:00.000Z","tags":[{"inline":true,"label":"AtCoder","permalink":"/TAmeBlog/blog/tags/at-coder"},{"inline":true,"label":"ABC325","permalink":"/TAmeBlog/blog/tags/abc-325"},{"inline":true,"label":"D","permalink":"/TAmeBlog/blog/tags/d"},{"inline":true,"label":"PriorityQueue","permalink":"/TAmeBlog/blog/tags/priority-queue"}],"readingTime":7.075,"hasTruncateMarker":true,"authors":[{"name":"TAmemiya","title":"Small fry IT technician","imageURL":"https://github.com/tarminjapan.png","key":"tame","page":null}],"frontMatter":{"title":"AtCoder ABC325 D - Printing Machine \u89e3\u8aac","date":"2025-04-03T00:00:00.000Z","authors":["tame"],"tags":["AtCoder","ABC325","D","PriorityQueue"]},"unlisted":false,"prevItem":{"title":"AtCoder ABC339 D - Synchronized Players \u89e3\u8aac","permalink":"/TAmeBlog/blog/2025/04/04/2025/04/abs339_d"},"nextItem":{"title":"AtCoder ABC274 D - Robot Arms 2 \u89e3\u8aac","permalink":"/TAmeBlog/blog/2025/04/02/2025/04/abs274_d"}}')},8453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>r});var n=a(6540);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);