import prisma from "../core/core.prisma";
import { CoreController } from "../core/core.controller";
import ApiResponse from "../core/core.response";
import { Request, Response } from "express";


const todo = prisma.todo

export class TodoController extends CoreController {

    public static async create(req: Request, res: Response): Promise<void> {
        try {
            // const { title } = req.body;
            // const todo = await todo.create({
            //     title:title
            // })
            // console.log(todos)
            // res.status(200).json(
            //     new ApiResponse(true, 'Created todo', todo)
            // );
            return
        } catch {
            return TodoController.handleError(res);
        }
    }

    public static async fetch(req: Request, res: Response): Promise<any> {
        try {
            const todos = await todo.findMany({})
            console.log(todos)

            return res.status(200).json(
                new ApiResponse(true, 'Fetched todos', todos)
            );

        } catch {
            return TodoController.handleError(res);
        }
    }
}