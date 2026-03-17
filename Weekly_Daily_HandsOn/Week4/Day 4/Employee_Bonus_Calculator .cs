using System;
using System.Collections.Generic;
using System.Text;

namespace Task1
{
    internal class Employee_Bonus_Calculator
    {

        static void Main()
        {
            Console.Write("Enter Your Name       : ");
            var name = Console.ReadLine();
            Console.Write("Enter Your Salary     : ");
            var sal = Console.ReadLine();
            double salary = Convert.ToInt64(sal);
            Console.Write("Enter Your Experience : ");
            var ex = Console.ReadLine();
            byte experience = Convert.ToByte(ex);

            if (experience <= 2)
            {
                double total = salary / 100 * 5;
                Console.WriteLine($"Name   : {name}\nsalary : {salary}\nBonus  : {total}\ntotal  :{salary} + {total} = {total+salary}");

            }
            else if (experience > 2 && experience <= 5)
            {
                double total1 = salary / 100 * 10;
                Console.WriteLine($"Name   : {name}\nsalary : {salary}\nBonus  : {total1}\ntotal  :{salary} + {total1} = {total1 + salary}");

            }
            else
            {   if (experience > 5)
                {
                    double total2 = salary / 100 * 15;
                    Console.WriteLine($"Name   : {name}\nsalary : {salary}\nBonus  : {total2}\ntotal  :{salary} + {total2} = {total2 + salary}");
                }
            }


        }

    }
}
