const users = require("../mocks/users")

module.exports = {
    listUsers(request, response) {
        const { order } = request.query

        const sordtedUser = users.sort((a, b) => {
            if (order.toLocaleLowerCase() === "desc") {
                return a.id < b.id ? 1 : -1
            }
            return a.id > b.id ? 1 : -1
        })


        response.writeHead(200, { "Content-Type": "application\json" })
        response.end(JSON.stringify(sordtedUser))
    }
}