using System;
using System.Collections.Generic;
using System.Text;

namespace Task1
{
    internal class Student_Grade_Evaluator
    {
        static void Main()
        {
            Console.Write("Enter Your Name :");

            var name=Console.ReadLine();

            Console.Write("Enter your Marks :");

            var m = Console.ReadLine();

            short marks = Convert.ToInt16(m);

            if (marks ==35  )
            {
                Console.WriteLine($"Name :{name}\nYour Grade Is : D");
            }
            else if(marks >35 && marks <= 60)
            {
                Console.WriteLine($"Name :{name}\nYour Grade Is : C");
            }
            else if(marks > 60 && marks <= 85)
            {
                Console.WriteLine($"Name :{name}\nYour Grade Is : B");
            }
            else if(marks > 85 && marks <= 100)
            {
                Console.WriteLine($"Name :{name}\nYour Grade Is : A");
            }
            else if(marks >= 0 && marks <= 34)
            {
                Console.WriteLine($"Name :{name} \nYour Failed...");
            }
            else
            {
                Console.WriteLine("Invaild Details");
            }

         }
    }
}
