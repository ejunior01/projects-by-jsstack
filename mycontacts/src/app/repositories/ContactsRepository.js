import { v4 as uuidv4 } from 'uuid';

let contacts = [{
  id: uuidv4(),
  name: 'Edvan Junior',
  email: 'teste@teste.com.br',
  telefone: '1151505879',
  category_id: uuidv4()
},
{
  id: uuidv4(),
  name: 'Teste Junior',
  email: 'teste@teste.com.br',
  telefone: '1151505879',
  category_id: uuidv4()
}]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }

  findById(id) {
    return new Promise((resolve) => {
      let contact = contacts.find((contact)=> contact.id === id)
      resolve(contact)
    })
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact)=> contact.id !== id)
      resolve()
    })
  }
}

export default new ContactsRepository()
