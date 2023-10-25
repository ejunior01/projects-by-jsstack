import { v4 as uuidv4 } from 'uuid';

let contacts = [
  {
    id: uuidv4(),
    name: 'Edvan Junior',
    email: 'teste@teste.com.br',
    phone: '1151505879',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Teste Junior',
    email: 'teste@teste.com.br',
    phone: '1151505879',
    category_id: uuidv4(),
  },
];

class ContactsRepositoryInMemory {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.id === id);
      resolve(contact);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.email === email);
      resolve(contact);
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
      category_id,
    };

    contacts.push(newContact);

    return new Promise((resolve) => {
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    const updatedContact = {
      id,
      name,
      email,
      phone,
      category_id,
    };

    contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

    return new Promise((resolve) => {
      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

export default new ContactsRepository();
