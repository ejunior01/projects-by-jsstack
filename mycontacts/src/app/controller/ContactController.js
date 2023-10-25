import ContactsRepository from '../repositories/ContactsRepository.js';

class ContactController {
  async index(request, response) {
    const { orderBy } = request.params;
    const contacts = await ContactsRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) return response.status(400).json({ error: 'name is requered' });
    if (!email) return response.status(400).json({ error: 'email is requered' });
    if (!phone) return response.status(400).json({ error: 'phone is requered' });

    const contactExist = await ContactsRepository.findByEmail(email);

    if (contactExist) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use' });
    }

    const contanct = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contanct);
  }

  async update(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;
    const { id } = request.params;

    const contactExist = await ContactsRepository.findById(id);

    if (!contactExist) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!name) return response.status(400).json({ error: 'name is requered' });
    if (!email) return response.status(400).json({ error: 'email is requered' });
    if (!phone) return response.status(400).json({ error: 'phone is requered' });

    const contactExistEmail = await ContactsRepository.findByEmail(email);

    if (contactExistEmail) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use' });
    }

    const contanct = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contanct);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepository.delete(id);

    return response.sendStatus(204);
  }
}

export default new ContactController();
