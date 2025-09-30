import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma'
import routes from './routes/index'
import { TodoController } from './controller/todo.controller';


const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json()); // Enable JSON body parsing

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript + Prisma Server');
});

app.get('/search', TodoController.fetch)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});