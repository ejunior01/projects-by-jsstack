import ContactsRepository from '../repositories/ContactsRepository.js'

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll()
    response.json(contacts)
  }

  async show(request, response) {
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ "error": "contact not found" })
    }

    response.json(contact)
  }

  store(request, response) {

  }

  update(request, response) {

  }

  async delete(request, response) {
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ "error": "contact not found" })
    }

    await ContactsRepository.delete(id)

    return response.sendStatus(204)
  }
}

export default new ContactController()
