import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routes from './routes/routes.mjs';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(201).send({ 'msg': 'Hello, World!' });
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});