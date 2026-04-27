using ContactManagementWebAPI.Interfaces;
using ContactManagementWebAPI.Models;

namespace ContactManagementWebAPI.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> _contacts = new();

        public List<Contact> GetAll() => _contacts;

        public Contact? GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public Contact Add(Contact contact)
        {
            if (contact == null)
                throw new ArgumentNullException(nameof(contact));

            _contacts.Add(contact);
            return contact;
        }

        public bool Update(int id, Contact contact)
        {
            var existing = GetById(id);
            if (existing == null) return false;

            existing.Name = contact.Name;
            existing.Email = contact.Email;
            existing.Phone = contact.Phone;

            return true;
        }

        public bool Delete(int id)
        {
            var contact = GetById(id);
            if (contact == null) return false;

            _contacts.Remove(contact);
            return true;
        }
    }
}
