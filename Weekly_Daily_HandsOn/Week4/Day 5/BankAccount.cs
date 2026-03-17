using System;
using System.Collections.Generic;
using System.Text;

namespace week5
{
    class cal
    {

        private double balance;

        public cal()
        {
            balance = 0;
        }

        public void Deposit(double amount)
        {
            if (amount > 0)
                balance += amount;
            else
                Console.WriteLine("Invalid deposit amount.");
        }

        public bool Withdraw(double amount)
        {
            if (amount > 0 && balance >= amount)
            {
                balance -= amount;
                return true;
            }
            else
            {
                Console.WriteLine("Insufficient balance or invalid amount.");
                return false;
            }
        }

        public double GetBalance()
        {
            return balance;
        }
    }

    internal class BankAccount
    {
        public static void Main(string[] args)
        {
            cal account = new cal();
            account.Deposit(1000);
            account.Withdraw(300);
            Console.WriteLine($"Current Balance = {account.GetBalance()}");  // Output: Current Balance = 700
        }
    }
    
}

