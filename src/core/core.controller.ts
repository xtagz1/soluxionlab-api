import ApiResponse from "./core.response";
import { Response } from 'express'

export class CoreController {
    public static handleError(res: Response): void {
        res.status(500).json(new ApiResponse(false, 'Internal Server Error!'))
    }
}