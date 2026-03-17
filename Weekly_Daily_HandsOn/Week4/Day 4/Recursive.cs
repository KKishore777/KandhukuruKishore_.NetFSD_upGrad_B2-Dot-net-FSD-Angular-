using System;
using System.Collections.Generic;
using System.Text;

namespace week5
{
    internal class Recursive
    {
        public static int CalculatePower(int baseNum, int exponent)
        {
            // Base case: anything raised to the power of 0 is 1
            if (exponent == 0)
                return 1;
            // Recursive case: base^exponent = base * base^(exponent-1)
            else
                return baseNum * CalculatePower(baseNum, exponent - 1);
        }

        public static void Main(string[] args)
        {
            int baseNum = 2;
            int exponent = 5;
            int result = CalculatePower(baseNum, exponent);
            Console.WriteLine($"{baseNum}^{exponent} = {result}");  // Output: 2^5 = 32
        }
    }
}
