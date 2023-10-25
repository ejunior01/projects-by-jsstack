import express, { request, response } from 'express';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3000, () => {});
