import { Router } from "express";
import { TodoController } from "../controller/todo.controller";

const router = Router()

router.get(
    '/search',
    TodoController.fetch
)




export default router