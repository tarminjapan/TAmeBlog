---
slug: abc336c
title: AtCoder ABC 336 C - Even Digits
authors: [tame]
tags: [atcoder, abc]
---

Nから良い整数は以下の手順で変換できる。

1. Nから1を引く
2. 5進数に変換する
3. 各桁の数字を2倍にする。

|N|N-1|5進数|良い整数|
|-:|-:|-:|-:|
|1|0|0|0|
|2|1|1|2|
|3|2|2|4|
|4|3|3|6|
|5|4|4|8|
|6|5|10|20|
|7|6|11|22|
|8|7|12|24|
|9|8|13|26|
|10|9|14|28|

[提出結果](https://atcoder.jp/contests/abc336/submissions/52198162)

```csharp title="C#"
using System.Text;

public class Program
{
    public static void Main()
    {
        DisableAutoFlush();
        Solve.Run();
        Flush();
    }

    public static class Solve
    {
        public static void Run()
        {
            var iN = ReadLineLong();

            var penta = ConvertBase(iN - 1, 5).ToCharArray();

            for (int i = 0; i < penta.Length; i++)
                penta[i] = (int.Parse(penta[i].ToString()) * 2).ToString()[0];

            Console.WriteLine(new string(penta));
        }

        /// <summary>
        /// 10進数からn進数に変換する。
        /// </summary>
        public static string ConvertBase(long dec, long n)
        {
            if (dec == 0L) return "0";

            var stack = new Stack<long>();
            while (0 < dec)
            {
                var mod = dec % n;
                stack.Push(mod);
                dec /= n;
            }

            return string.Join("", stack);
        }

        // ----------------------------------------------------------------------------------------------------
        // --- Readline
        // ----------------------------------------------------------------------------------------------------
        public static double ReadLineDouble() => double.Parse(ReadLineString());
        public static double[] ReadLineDoubles() => ReadLineStrings().Select(double.Parse).ToArray();
        public static double[] ReadLinesDoubles(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDouble()).ToArray();
        public static double[][] ReadLinesDoubleMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDoubles()).ToArray();
        public static decimal ReadLineDecimal() => decimal.Parse(ReadLineString());
        public static decimal[] ReadLineDecimals() => ReadLineStrings().Select(decimal.Parse).ToArray();
        public static decimal[] ReadLinesDecimals(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDecimal()).ToArray();
        public static decimal[][] ReadLinesDecimalMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineDecimals()).ToArray();
        public static int ReadLineInt() => int.Parse(ReadLineString());
        public static int[] ReadLineInts() => ReadLineStrings().Select(int.Parse).ToArray();
        public static int[] ReadLinesInts(int height) => Enumerable.Range(0, height).Select(_ => ReadLineInt()).ToArray();
        public static int[][] ReadLinesIntMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineInts()).ToArray();
        public static long ReadLineLong() => long.Parse(ReadLineString());
        public static long[] ReadLineLongs() => ReadLineStrings().Select(long.Parse).ToArray();
        public static long[] ReadLinesLongs(int height) => Enumerable.Range(0, height).Select(_ => ReadLineLong()).ToArray();
        public static long[][] ReadLinesLongMatrix(long height) => Enumerable.Range(0, (int)height).Select(_ => ReadLineLongs()).ToArray();
        public static string ReadLineString() => Console.ReadLine().TrimStart().TrimEnd();
        public static string[] ReadLineStrings() => Console.ReadLine().TrimStart().TrimEnd().Split();
        public static string[] ReadLinesStrings(int height) => Enumerable.Range(0, height).Select(_ => ReadLineString()).ToArray();
        public static string[][] ReadLinesStringMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineStrings()).ToArray();
        public static char[][] ReadLinesCharMatrix(int height) => Enumerable.Range(0, height).Select(_ => ReadLineString().ToCharArray()).ToArray();

        // ----------------------------------------------------------------------------------------------------
        // --- Math
        // ----------------------------------------------------------------------------------------------------

        /// <summary>
        /// Returns a specified number raised to the specified power.
        /// </summary>
        /// <returns>The number x raised to the power y.</returns>
        public static long Pow(long x, int y)
        {
            var pow = 1L;

            for (int i = 0; i < y; i++)
                pow *= x;

            return pow;
        }

        /// <summary>
        /// 割り算する。（切り上げ）
        /// </summary>
        public static long Ceiling(long bloken, long divided) => bloken % divided == 0L ? bloken / divided : bloken / divided + 1L;

        /// <summary>
        /// 割り算する。（切り上げ）
        /// </summary>
        public static int Ceiling(int bloken, int divided) => (int)Ceiling((long)bloken, divided);
    }

    public static void DisableAutoFlush()
    { Console.SetOut(new StreamWriter(Console.OpenStandardOutput()) { AutoFlush = false }); }

    public static void Flush()
    { Console.Out.Flush(); }
}
```
