using System;
using System.Collections.Generic;
using System.Text;

namespace Dot_NET_Console_Application
{
    internal class Asynchronous_Order_Processing
    {
        static async Task VerifyPaymentAsync()
        {
            Console.WriteLine("Verifying Payment...");
            await Task.Delay(2000);
            Console.WriteLine("Payment Verified");
        }

        static async Task CheckInventoryAsync()
        {
            Console.WriteLine("Checking Inventory...");
            await Task.Delay(2000);
            Console.WriteLine("Inventory Available");
        }

        static async Task ConfirmOrderAsync()
        {
            Console.WriteLine("Confirming Order...");
            await Task.Delay(2000);
            Console.WriteLine("Order Confirmed");
        }

        static async Task ProcessOrderAsync()
        {
            await VerifyPaymentAsync();
            await CheckInventoryAsync();
            await ConfirmOrderAsync();
        }

        static async Task Main(string[] args)
        {
            Console.WriteLine("Order Processing Started...\n");

            await ProcessOrderAsync();

            Console.WriteLine("\nOrder Completed Successfully!");
        }
    }
}
