using System;
using System.Collections.Generic;
using System.Text;

namespace Task1
{
    internal class NumberAnalysisUsingLoops
    {
        static void Main()
        {
            Console.Write("Enter Number : ");
            int num = Convert.ToInt32 (Console.ReadLine());

            var even = 0;
            var odd = 0;
            var sum = 0;

            for (int i = 1; i <= num; i++)
            {
                if (i % 2 == 0)
                {
                    even++;
                }
                else               
                {
                    odd++;
                }
                sum = sum + i;
            }
            Console.WriteLine($"Even Count : {even}");
            Console.WriteLine($"Odd Count  : {odd}");
            Console.WriteLine($"Total Sum  : {sum}");

        }
    }
}
