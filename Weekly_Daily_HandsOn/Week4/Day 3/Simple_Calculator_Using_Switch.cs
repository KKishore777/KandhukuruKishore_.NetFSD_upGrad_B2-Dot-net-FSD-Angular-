using System;
using System.Collections.Generic;
using System.Text;

namespace Task1
{
    internal class Simple_Calculator_Using_Switch
    {
        static void Main()
        {
            Console.WriteLine("Enter Numbers");
            Console.Write("Enter First Number  :");
            var f = Console.ReadLine();
            Console.Write("Enter Second Number :");
            var FirstNumber = Convert.ToInt64(f);
            var s = Console.ReadLine();
            var secondNumber = Convert.ToInt64(s);

            Console.WriteLine("Please Select Operation...");
            Console.WriteLine("For Addition       (+)  Enter 1");
            Console.WriteLine("For Subtraction    (-)  Enter 2");
            Console.WriteLine("For Multiplication (*)  Enter 3");
            Console.WriteLine("For Division       (/)  Enter 4");
            Console.Write("Enter Option Number to Perform Operation : ");
            var select = Console.ReadLine();
            var start = Convert.ToSByte(select);

            switch (start)
            {
                case 1:
                    var Total = FirstNumber + secondNumber;
                    Console.WriteLine($"First  Number : {FirstNumber}\nSecond Number : {secondNumber}\nTotal         : {FirstNumber} + {secondNumber} = {Total}");
                    break;
                case 2:
                    var Total1 = FirstNumber - secondNumber;
                    Console.WriteLine($"First  Number : {FirstNumber}\nSecond Number : {secondNumber}\nTotal         : {FirstNumber} - {secondNumber} = {Total1}");
                    break;
                case 3:
                    var Total3 = FirstNumber * secondNumber;
                    Console.WriteLine($"First  Number : {FirstNumber}\nSecond Number : {secondNumber}\nTotal         : {FirstNumber} * {secondNumber} = {Total3}");
                    break;
                case 4:
                    var Total4 = FirstNumber / secondNumber;
                    Console.WriteLine($"First  Number : {FirstNumber}\nSecond Number : {secondNumber}\nTotal         : {FirstNumber} / {secondNumber} = {Total4}");
                    break;
                default:
                    Console.WriteLine("Invalid Operation...");
                    break;

            }



        }
    }
}
