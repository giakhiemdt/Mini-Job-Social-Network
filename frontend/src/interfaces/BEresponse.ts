export interface BEResponse<T> {
    statusCode: number;
    isSuccess: boolean;
    message: string;
    result: T;
}