using System;
using System.Collections.Generic;
using System.Text;

namespace Dot_NET_Console_Application
{
    internal class Concurrent_Report_Generation
    {
        static async Task GenerateSalesReport()
        {
            Console.WriteLine("Sales Report Started...");
            await Task.Delay(3000);
            Console.WriteLine("Sales Report Completed");
        }

        static async Task GenerateInventoryReport()
        {
            Console.WriteLine("Inventory Report Started...");
            await Task.Delay(2000);
            Console.WriteLine("Inventory Report Completed");
        }

        static async Task GenerateCustomerReport()
        {
            Console.WriteLine("Customer Report Started...");
            await Task.Delay(2500);
            Console.WriteLine("Customer Report Completed");
        }

        static async Task Main(string[] args)
        {
            Task t1 = GenerateSalesReport();
            Task t2 = GenerateInventoryReport();
            Task t3 = GenerateCustomerReport();

            await Task.WhenAll(t1, t2, t3);

            Console.WriteLine("\nAll Reports Generated Successfully!");
        }
    }
}
