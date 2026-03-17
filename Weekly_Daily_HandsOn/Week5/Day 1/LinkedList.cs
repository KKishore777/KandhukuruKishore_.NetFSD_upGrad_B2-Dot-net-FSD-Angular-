using System;

public class Node
{
    public int EmpId { get; set; }
    public string Name { get; set; }
    public Node Next { get; set; }

    public Node(int empId, string name)
    {
        EmpId = empId;
        Name = name;
        Next = null;
    }
}

public class EmployeeList
{
    public Node Head { get; set; }

    public EmployeeList()
    {
        Head = null;
    }

    public void InsertAtBeginning(int empId, string name)
    {
        Node newNode = new Node(empId, name);
        newNode.Next = Head;
        Head = newNode;
    }

    public void InsertAtEnd(int empId, string name)
    {
        Node newNode = new Node(empId, name);
        if (Head == null)
        {
            Head = newNode;
            return;
        }
        Node current = Head;
        while (current.Next != null)
        {
            current = current.Next;
        }
        current.Next = newNode;
    }

    public void DeleteById(int empId)
    {
        if (Head == null) return;
        if (Head.EmpId == empId)
        {
            Head = Head.Next;
            return;
        }
        Node current = Head;
        while (current.Next != null)
        {
            if (current.Next.EmpId == empId)
            {
                current.Next = current.Next.Next;
                return;
            }
            current = current.Next;
        }
    }

    public void DisplayEmployees()
    {
        Node current = Head;
        while (current != null)
        {
            Console.Write($"{current.EmpId} - {current.Name} ");
            current = current.Next;
        }
        Console.WriteLine();
    }
}

class Programes
{
    static void Main()
    {
        EmployeeList empList = new EmployeeList();
        empList.InsertAtEnd(101, "John");
        empList.InsertAtEnd(102, "Sara");
        empList.InsertAtEnd(103, "Mike");
        empList.DeleteById(102);
        Console.WriteLine("Employee List After Deletion:");
        empList.DisplayEmployees();  // Output: 101 - John 103 - Mike
    }
}