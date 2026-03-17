using System;
using System.Collections.Generic;
using System.Text;

namespace week5
{
    internal class StusentHihMar
    {
        static void Main()
        {
            Console.Write("Enter the number of students: ");
            int n = Convert.ToInt32(Console.ReadLine());

            int[] marks = new int[n];
            for (int i = 0; i < n; i++)
            {
                Console.Write($"Enter marks for student {i + 1}: ");
                marks[i] = Convert.ToInt32(Console.ReadLine());
            }

            Console.Write("Enter the threshold marks: ");
            int threshold = Convert.ToInt32(Console.ReadLine());

            int totalMarks = marks.Sum();
            double averageMarks = marks.Average();
            int aboveThreshold = marks.Where(mark => mark > threshold).Count();

            var subjectHighest = new Dictionary<string, int>();
            for (int i = 0; i < marks.Length; i++)
            {
                subjectHighest.Add($"Subject {i + 1}", marks[i]);
            }
            int highestScore = marks.Max();

            Console.WriteLine($"Total Marks: {totalMarks}");
            Console.WriteLine($"Average Marks: {averageMarks:F1}");
            Console.WriteLine($"Students above {threshold}: {aboveThreshold}");
            Console.WriteLine($"Highest Score: {highestScore}");
        }
    }
}
