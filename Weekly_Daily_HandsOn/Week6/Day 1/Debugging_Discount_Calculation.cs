using System;
using System.Collections.Generic;
using System.Text;

namespace Dot_NET_Console_Application
{
    internal class Debugging_Discount_Calculation
    {
        static void Main()
        {
            Console.Write("Enter Product Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Price: ");
            double price = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter Discount (%): ");
            double discount = Convert.ToDouble(Console.ReadLine());

            // Correct formula
            double finalPrice = price - (price * discount / 100);

            Console.WriteLine($"\nProduct: {name}");
            Console.WriteLine($"Final Price: {finalPrice}");
        }
    }
}
