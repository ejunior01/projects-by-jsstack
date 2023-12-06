export default function errorHandler(error, request, response, next) {
  request.sendStatus(500);
}
