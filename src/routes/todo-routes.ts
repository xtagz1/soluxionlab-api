import { Router } from "express";
import { TodoController } from "../controller/todo.controller";

const router = Router()

router.post(
    '/',
    TodoController.create
)

router.get(
    '/',
    TodoController.fetch
)

router.get(
    '/search',
    TodoController.fetch
)

export default router