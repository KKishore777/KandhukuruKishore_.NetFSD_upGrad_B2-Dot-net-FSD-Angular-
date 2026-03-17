using System;
using System.Collections.Generic;
using System.Text;

namespace week5
{
    internal class EcommOrdCalculator
    {
        public void CalculateFinalAmount(double price, int quantity, double discountPercent = 0, double shippingCharge = 50)
        {
            double subtotal = price * quantity;

            // Calculate discount
            double discountAmount = (subtotal * discountPercent) / 100;

            // Apply discount first
            double amountAfterDiscount = subtotal - discountAmount;

            // Add shipping charge
            double finalAmount = amountAfterDiscount + shippingCharge;

            // Display output
            Console.WriteLine("----- Order Summary -----");
            Console.WriteLine("Price per product: " + price);
            Console.WriteLine("Quantity: " + quantity);
            Console.WriteLine("Subtotal: " + subtotal);
            Console.WriteLine("Discount (%): " + discountPercent);
            Console.WriteLine("Discount Amount: " + discountAmount);
            Console.WriteLine("Shipping Charge: " + shippingCharge);
            Console.WriteLine("Final Payable Amount: " + finalAmount);
            Console.WriteLine();
        }
    }

    class Program
    {
        static void Main()
        {
            EcommOrdCalculator obj = new EcommOrdCalculator();

            // Different method calls

            // 1. Without optional parameters (uses default values)
            obj.CalculateFinalAmount(1000, 2);

            // 2. With discount only
            obj.CalculateFinalAmount(1000, 2, 10);

            // 3. With discount and custom shipping
            obj.CalculateFinalAmount(1000, 2, 10, 100);

            // 4. With only shipping (skip discount using named parameter)
            obj.CalculateFinalAmount(1000, 2, shippingCharge: 80);
        }
    }
}
