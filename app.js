import express, {  json } from 'express'; // require -> commonJS
import { moviesRouter } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';

const PORT = process.env.PORT ?? 1234;
const app = express();
app.disable('x-powered-by'); // deshabilitar el header X-Powered-By: Express
app.use(json());//en caso de que el body contenga algo se valida y transforma en json
app.use(corsMiddleware());


app.use("/movies",moviesRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
