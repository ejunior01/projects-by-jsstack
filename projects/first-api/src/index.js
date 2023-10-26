const http = require('http');
const { URL } = require('node:url');
const routes = require('./routes');
const bodyParser = require('./helpers/bodyParser');

const server = http.createServer((request, response) => {
  response.send = function (statusCode, body) {
    response.writeHead(statusCode, { 'Content-Type': 'applicationjson' });
    response.end(JSON.stringify(body));
  };

  const parserdUrl = new URL(`http://localhost:3000${request.url}`);

  let { pathname } = parserdUrl;
  let resource = null;
  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    [resource, id] = splitEndpoint;
  }

  const route = routes.find(
    (routeObj) => routeObj.endpoint === pathname && routeObj.method === request.method,
  );

  if (route) {
    request.query = Object.fromEntries(parserdUrl.searchParams);
    request.params = { id };

    if (['PUT', 'POST', 'PATH'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.send(404, `Cannot ${request.method} ${parserdUrl.pathname}`);
  }
});

/* eslint no-console: "off" */
server.listen(3000, () => {
  console.log('Server started at http:\\localhost:3000');
});
