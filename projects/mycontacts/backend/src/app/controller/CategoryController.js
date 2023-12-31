import CategoriesRepository from '../repositories/CategoriesRepository';

class CategoryController {
  static async index(request, response) {
    const { orderBy } = request.params;
    const categories = await CategoriesRepository.findAll(orderBy);
    response.json(categories);
  }

  static async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    return response.json(category);
  }

  static async store(request, response) {
    const { name } = request.body;
    if (!name) return response.status(400).json({ error: 'name is requered' });

    const categoryExist = await CategoriesRepository.findByName(name);

    if (categoryExist) {
      return response
        .status(400)
        .json({ error: 'This name is already in use' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  static async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const categoryExist = await CategoriesRepository.findById(id);

    if (!categoryExist) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) return response.status(400).json({ error: 'name is requered' });

    const categoryExistName = await CategoriesRepository.findByName(name);

    if (categoryExistName) {
      return response
        .status(400)
        .json({ error: 'This name is already in use' });
    }

    const category = await CategoriesRepository.update(id, { name });

    return response.json(category);
  }

  static async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    return response.sendStatus(204);
  }
}

export default new CategoryController();
