using ContactManagementCodeAnalysis.Interfaces;
using ContactManagementCodeAnalysis.Models;
using ContactManagementCodeAnalysis.Services;

IContactService service = new ContactService();

try
{
    service.AddContact(new Contact
    {
        Id = 1,
        Name = "Ajay",
        Email = "ajay@gmail.com",
        Phone = "9876543210"
    });

    service.AddContact(new Contact
    {
        Id = 2,
        Name = "Kumar",
        Email = "kumar@gmail.com",
        Phone = "1234567890"
    });

    Console.WriteLine("All Contacts:");
    foreach (var contact in service.GetAllContacts())
    {
        Console.WriteLine($"{contact.Id} - {contact.Name} - {contact.Email}");
    }

    Console.WriteLine("\nUpdating Contact...");
    service.UpdateContact(new Contact
    {
        Id = 1,
        Name = "Ajay Updated",
        Email = "ajay_new@gmail.com",
        Phone = "9999999999"
    });

    Console.WriteLine("\nAfter Update:");
    foreach (var contact in service.GetAllContacts())
    {
        Console.WriteLine($"{contact.Id} - {contact.Name}");
    }

    Console.WriteLine("\nDeleting Contact...");
    service.DeleteContact(2);

    Console.WriteLine("\nAfter Delete:");
    foreach (var contact in service.GetAllContacts())
    {
        Console.WriteLine($"{contact.Id} - {contact.Name}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}