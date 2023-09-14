const http = require("http")
const routes = require("./routes")
const { URL } = require("node:url")

const server = http.createServer((request, response) => {
    console.log(`Request method ${request.method} | Endpoint ${request.url}`)

    const parserdUrl = new URL(`http://localhost:3000${request.url}`) 
    
    const route = routes.find((routeObj) => routeObj.endpoint == parserdUrl.pathname && routeObj.method == request.method)

    if (route) {
        request.query = Object.fromEntries(parserdUrl.searchParams)
        route.handler(request, response)
    } else {
        response.writeHead(404, { "Content-Type": "text\html" })
        response.end(`Cannot ${request.method} ${parserdUrl.pathname}`)
    }

})

server.listen(3000, () => { console.log("Server started at http:\\localhost:3000") })