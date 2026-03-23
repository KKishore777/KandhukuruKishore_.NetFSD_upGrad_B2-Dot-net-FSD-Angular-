using System;
using System.Collections.Generic;
using System.Text;

namespace Dot_NET_Console_Application
{
    internal class Application_Tracing
    {
        static void Main(string[] args)
        {
            // Create log file
            Trace.Listeners.Add(new TextWriterTraceListener("log.txt"));
            Trace.AutoFlush = true;

            Trace.WriteLine("Order Processing Started");

            ValidateOrder();
            ProcessPayment();
            UpdateInventory();
            GenerateInvoice();

            Trace.WriteLine("Order Processing Completed");

            Console.WriteLine("Check log.txt for trace output.");
        }

        static void ValidateOrder()
        {
            Trace.TraceInformation("Validating Order...");
        }

        static void ProcessPayment()
        {
            Trace.TraceInformation("Processing Payment...");
        }

        static void UpdateInventory()
        {
            Trace.TraceInformation("Updating Inventory...");
        }

        static void GenerateInvoice()
        {
            Trace.TraceInformation("Generating Invoice...");
        }
    }
}
