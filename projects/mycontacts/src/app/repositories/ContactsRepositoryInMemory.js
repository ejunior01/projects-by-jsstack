import { v4 as uuidv4 } from 'uuid';

class ContactsRepositoryInMemory {
  contacts = [];

  constructor() {
    this.contacts = [
      {
        id: uuidv4(),
        name: 'Edvan Junior',
        email: 'teste@teste.com.br',
        phone: '1151505879',
        categoryid: uuidv4(),
      },
      {
        id: uuidv4(),
        name: 'Teste Junior',
        email: 'teste@teste.com.br',
        phone: '1151505879',
        categoryid: uuidv4(),
      },
    ];
  }

  findAll() {
    return new Promise((resolve) => {
      resolve(this.contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const contact = this.contacts.find((c) => c.id === id);
      resolve(contact);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const contact = this.contacts.find((c) => c.email === email);
      resolve(contact);
    });
  }

  create({
    name, email, phone, categoryid,
  }) {
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
      categoryid,
    };

    this.contacts.push(newContact);

    return new Promise((resolve) => {
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, categoryid,
  }) {
    const updatedContact = {
      id,
      name,
      email,
      phone,
      categoryid,
    };

    this.contacts = this.contacts.map((contact) => (contact.id === id ? updatedContact : contact));

    return new Promise((resolve) => {
      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

export default new ContactsRepositoryInMemory();
