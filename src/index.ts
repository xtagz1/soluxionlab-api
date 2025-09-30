// src/index.ts
import express, { Express, Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma'

const app: Express = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json()); // Enable JSON body parsing

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript + Prisma Server');
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});