"use strict";(self.webpackChunkt_ame_blog=self.webpackChunkt_ame_blog||[]).push([[307],{5504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(4848),a=t(8453);const s={},r="C - Max Eve",l={id:"Atcoder Begginer Contest/200s/272/abc272c_01",title:"C - Max Eve",description:"URL",source:"@site/docs/Atcoder Begginer Contest/200s/272/abc272c_01.md",sourceDirName:"Atcoder Begginer Contest/200s/272",slug:"/Atcoder Begginer Contest/200s/272/abc272c_01",permalink:"/TAmeBlog/docs/Atcoder Begginer Contest/200s/272/abc272c_01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"D - Count Interval",permalink:"/TAmeBlog/docs/Atcoder Begginer Contest/200s/233/abc233d_01"},next:{title:"D - All Assign Point Add",permalink:"/TAmeBlog/docs/Atcoder Begginer Contest/200s/278/abc278d_01"}},c={},o=[];function d(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"c---max-eve",children:"C - Max Eve"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://atcoder.jp/contests/abc272/tasks/abc272_c",children:"URL"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6570\u5217 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mi,{children:"A"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"A"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"A"})]})})]})," \u306e\u5404\u8981\u7d20\u3092\u5947\u6570\u3068\u5076\u6570\u306e\u96c6\u5408\u306b\u5206\u3051\u308b\u3002\u305d\u308c\u305e\u308c\u306e\u96c6\u5408\u304b\u3089\u6700\u5927\u3068\u305d\u306e\u6b21\u306b\u5927\u304d\u30442\u500b\u306e\u5408\u8a08\u3092\u6c42\u3081\u308b\u3002\u5947\u6570\u96c6\u5408\u5074\u306e2\u3064\u306e\u6570\u306e\u5408\u8a08\u3068\u5076\u6570\u96c6\u5408\u5074\u306e2\u3064\u306e\u6570\u306e\u5408\u8a08\u306e\u3046\u3061\u5927\u304d\u3044\u65b9\u3092\u51fa\u529b\u3059\u308b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://atcoder.jp/contests/abc272/submissions/52422133",children:"\u63d0\u51fa\u7d50\u679c"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="C#"',children:"using System.ComponentModel;\nusing System.Text;\n\npublic class Program\n{\n    public static void Main()\n    {\n        DisableAutoFlush();\n        Solve.Run();\n        Flush();\n    }\n\n    public static class Solve\n    {\n        public static void Run()\n        {\n            var iN = ReadLineInt();\n            var iA = ReadLineInts();\n\n            var listOdd = new List<int>(); // \u5947\u6570\n            var listEven = new List<int>(); // \u5076\u6570\n\n            foreach (var a in iA)\n                if (a % 2 == 0)\n                    listEven.Add(a);\n                else\n                    listOdd.Add(a);\n\n            listEven.Sort();\n            listOdd.Sort();\n\n            var max = -1;\n\n            if (2 <= listOdd.Count)\n                max = Math.Max(max, listOdd[^1] + listOdd[^2]);\n\n            if (2 <= listEven.Count)\n                max = Math.Max(max, listEven[^1] + listEven[^2]);\n\n            Console.WriteLine(max);\n        }\n\n        // ----------------------------------------------------------------------------------------------------\n        // --- Readline\n        // ----------------------------------------------------------------------------------------------------\n        public static double ReadLineDouble() => double.Parse(ReadLineString());\n        public static double[] ReadLineDoubles() => ReadLineStrings().Select(double.Parse).ToArray();\n        public static double[] ReadLinesDoubles(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDouble()).ToArray();\n        public static double[][] ReadLinesDoubleMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDoubles()).ToArray();\n        public static decimal ReadLineDecimal() => decimal.Parse(ReadLineString());\n        public static decimal[] ReadLineDecimals() => ReadLineStrings().Select(decimal.Parse).ToArray();\n        public static decimal[] ReadLinesDecimals(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDecimal()).ToArray();\n        public static decimal[][] ReadLinesDecimalMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDecimals()).ToArray();\n        public static int ReadLineInt() => int.Parse(ReadLineString());\n        public static int[] ReadLineInts() => ReadLineStrings().Select(int.Parse).ToArray();\n        public static int[] ReadLinesInts(int height) => Enumerable.Range(0, height).Select(_ => ReadLineInt()).ToArray();\n        public static int[][] ReadLinesIntMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineInts()).ToArray();\n        public static long ReadLineLong() => long.Parse(ReadLineString());\n        public static long[] ReadLineLongs() => ReadLineStrings().Select(long.Parse).ToArray();\n        public static long[] ReadLinesLongs(int height) => Enumerable.Range(0, height).Select(_ => ReadLineLong()).ToArray();\n        public static long[][] ReadLinesLongMatrix(long height) => Enumerable.Range(0, (int)height).Select(_ => ReadLineLongs()).ToArray();\n        public static string ReadLineString() => Console.ReadLine().TrimStart().TrimEnd();\n        public static string[] ReadLineStrings() => Console.ReadLine().TrimStart().TrimEnd().Split();\n        public static string[] ReadLinesStrings(int height) => Enumerable.Range(0, height).Select(_ => ReadLineString()).ToArray();\n        public static string[][] ReadLinesStringMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineStrings()).ToArray();\n        public static char[][] ReadLinesCharMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineString().ToCharArray()).ToArray();\n\n        // ----------------------------------------------------------------------------------------------------\n        // --- Math\n        // ----------------------------------------------------------------------------------------------------\n\n        /// <summary>\n        /// Returns a specified number raised to the specified power.\n        /// </summary>\n        /// <returns>The number x raised to the power y.</returns>\n        public static long Pow(long x, int y)\n        {\n            var pow = 1L;\n\n            for (int i = 0; i < y; i++)\n                pow *= x;\n\n            return pow;\n        }\n\n        /// <summary>\n        /// \u5272\u308a\u7b97\u3059\u308b\u3002\uff08\u5207\u308a\u4e0a\u3052\uff09\n        /// </summary>\n        public static long Ceiling(long bloken, long divided) => bloken % divided == 0L ? bloken / divided : bloken / divided + 1L;\n\n        /// <summary>\n        /// \u5272\u308a\u7b97\u3059\u308b\u3002\uff08\u5207\u308a\u4e0a\u3052\uff09\n        /// </summary>\n        public static int Ceiling(int bloken, int divided) => (int)Ceiling((long)bloken, divided);\n    }\n\n    public static void DisableAutoFlush()\n    { Console.SetOut(new StreamWriter(Console.OpenStandardOutput()) { AutoFlush = false }); }\n\n    public static void Flush()\n    { Console.Out.Flush(); }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);