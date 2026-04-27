using ContactManagementCodeAnalysis.Interfaces;
using ContactManagementCodeAnalysis.Models;

namespace ContactManagementCodeAnalysis.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> _contacts = new();

        public void AddContact(Contact contact)
        {
            ValidateContact(contact);

            if (_contacts.Any(c => c.Id == contact.Id))
                throw new ArgumentException("Contact already exists.");

            _contacts.Add(contact);
        }

        public void UpdateContact(Contact contact)
        {
            ValidateContact(contact);

            var existing = GetContactById(contact.Id);
            if (existing == null)
                throw new KeyNotFoundException("Contact not found.");

            existing.Name = contact.Name;
            existing.Email = contact.Email;
            existing.Phone = contact.Phone;
        }

        public void DeleteContact(int id)
        {
            var contact = GetContactById(id);
            if (contact == null)
                throw new KeyNotFoundException("Contact not found.");

            _contacts.Remove(contact);
        }

        public List<Contact> GetAllContacts()
        {
            return _contacts.ToList();
        }

        public Contact? GetContactById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        private static void ValidateContact(Contact contact)
        {
            if (contact == null)
                throw new ArgumentNullException(nameof(contact));

            if (string.IsNullOrWhiteSpace(contact.Name))
                throw new ArgumentException("Name is required");

            if (string.IsNullOrWhiteSpace(contact.Email))
                throw new ArgumentException("Email is required");
        }
    }
}
