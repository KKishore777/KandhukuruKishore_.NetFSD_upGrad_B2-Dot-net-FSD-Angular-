using ContactManagementCodeAnalysis.Models;

namespace ContactManagementCodeAnalysis.Interfaces
{
    public interface IContactService
    {
        void AddContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
        List<Contact> GetAllContacts();
        Contact? GetContactById(int id);
    }
}
