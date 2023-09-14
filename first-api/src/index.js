const http = require("http")
const routes = require("./routes")
const { URL } = require("node:url")

const server = http.createServer((request, response) => {
    console.log(`Request method ${request.method} | Endpoint ${request.url}`)

    const parserdUrl = new URL(`http://localhost:3000${request.url}`)

    let { pathname } = parserdUrl
    let id = null

    const splitEndpoint = pathname.split("/").filter(Boolean)

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`
        id = splitEndpoint[1]
    }

    const route = routes.find((routeObj) => routeObj.endpoint == pathname && routeObj.method == request.method)

    if (route) {
        request.query = Object.fromEntries(parserdUrl.searchParams)
        request.params = { id }
        route.handler(request, response)
    } else {
        response.writeHead(404, { "Content-Type": "text\html" })
        response.end(`Cannot ${request.method} ${parserdUrl.pathname}`)
    }

})

server.listen(3000, () => { console.log("Server started at http:\\localhost:3000") })