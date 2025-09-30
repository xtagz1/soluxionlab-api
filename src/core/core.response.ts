export default class ApiResponse<T> {
    success: boolean;
    message: string | null;
    data: Object;

    constructor(
        success: boolean,
        message: string | null = null,
        data: T | null = null
    ) {
        this.success = success;
        this.message = message;
        this.data = {
            result: data as T,
        };
    }
}