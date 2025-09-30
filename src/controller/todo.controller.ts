import prisma from "../core/core.prisma";
import { CoreController } from "../core/core.controller";
import ApiResponse from "../core/core.response";
import { Request, Response } from "express";


const todo = prisma.todo

export class TodoController extends CoreController {

    public static async create(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, content, image_url, priority, dueDate } = req.body;

            // Validate required fields
            if (!title || title.trim().length === 0) {
                res.status(400).json(
                    new ApiResponse(false, 'Title is required', null)
                );
                return;
            }

            const result = await todo.create({
                data: {
                    title: title.trim(),
                    description: description?.trim() || null,
                    content: content?.trim() || null,
                    image_url: image_url || null,
                    priority: priority || 'MEDIUM',
                    dueDate: dueDate ? new Date(dueDate) : null
                }
            });

            res.status(201).json(
                new ApiResponse(true, 'Created todo successfully', result)
            );
        } catch (error) {
            console.error('Error creating todo:', error);
            return TodoController.handleError(res);
        }
    }

    public static async fetch(req: Request, res: Response): Promise<any> {
        try {
            const { status, priority, limit = 10, offset = 0 } = req.query;

            const whereClause: any = {};

            if (status) {
                whereClause.status = status;
            }

            if (priority) {
                whereClause.priority = priority;
            }

            const todos = await todo.findMany({
                where: whereClause,
                orderBy: {
                    createdAt: 'desc'
                },
                take: parseInt(limit as string),
                skip: parseInt(offset as string)
            });

            const totalCount = await todo.count({ where: whereClause });

            res.status(200).json(
                new ApiResponse(true, 'Fetched todos successfully', {
                    todos,
                    totalCount,
                    limit: parseInt(limit as string),
                    offset: parseInt(offset as string)
                })
            );

        } catch (error) {
            console.error('Error fetching todos:', error);
            return TodoController.handleError(res);
        }
    }
}