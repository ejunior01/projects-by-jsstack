let users = require('../mocks/users');

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sordtedUser = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    return response.send(200, sordtedUser);
  },
  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((userObj) => userObj.id === Number(id));

    if (user) {
      return response.send(200, user);
    }
    return response.send(400, { error: 'User not found' });
  },
  updateUser(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const userExist = users.find((userObj) => userObj.id === Number(id));

    if (!userExist) {
      return response.send(400, { error: 'User not found' });
    }

    users = users.map((user) => {
      if (user.id === Number(id)) {
        return {
          ...user,
          name,
        };
      }
      return user;
    });

    return response.send(200, { created: true });
  },
  deleteUser(request, response) {
    const { id } = request.params;

    const user = users.filter((userObj) => userObj.id !== Number(id));

    if (user) {
      users = users.filter((userObj) => userObj.id !== Number(id));
      return response.send(204, { deleted: true });
    }
    return response.send(400, { error: 'User not found' });
  },
  createUser(request, response) {
    const { body } = request;

    const lastUserId = users[users.length - 1].id;

    const user = {
      id: lastUserId + 1,
      name: body.name,
    };

    users.push(user);

    response.send(200, user);
  },
};
