using System;
using System.Collections.Generic;
using System.Text;

namespace Dot_NET_Console_Application
{
    internal class Asynchronous_File_Logger
    {
        static async Task WriteLogAsync(string message)
        {
            Console.WriteLine($"Start Writing: {message}");

            // Simulate file writing delay
            await Task.Delay(2000);

            Console.WriteLine($"Completed Writing: {message}");
        }

        static async Task Main(string[] args)
        {
            Console.WriteLine("Logging Started...\n");

            Task log1 = WriteLogAsync("User logged in");
            Task log2 = WriteLogAsync("File uploaded");
            Task log3 = WriteLogAsync("Error occurred");

            await Task.WhenAll(log1, log2, log3);

            Console.WriteLine("\nAll logs written successfully.");
        }
    }
}
