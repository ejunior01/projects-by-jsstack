const users = require("../mocks/users")

module.exports = {
    listUsers(request, response) {
        const { order } = request.query

        const sordtedUser = users.sort((a, b) => {
            if (order === "desc") {
                return a.id < b.id ? 1 : -1
            }
            return a.id > b.id ? 1 : -1
        })


        response.writeHead(200, { "Content-Type": "application\json" })
        response.end(JSON.stringify(sordtedUser))
    },
    getUserById(request, response) {

        const { id } = request.params

        const user = users.find((userObj) => userObj.id === Number(id))

        if (user) {
            response.writeHead(200, { "Content-Type": "application\json" })
            response.end(JSON.stringify(user))
        } else {
            response.writeHead(400, { "Content-Type": "application\json" })
            response.end(JSON.stringify({ error: "User not found" }))
        }


    }
}