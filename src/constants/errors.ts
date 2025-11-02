export class HttpError extends Error {
    public error: unknown;

    constructor(message: string, error: unknown) {
        super(message);
        this.error = error;
    }
}

export class ServerHttpError extends HttpError {
    constructor(error: unknown) {
        super("서버에 문제가 발생했습니다", error);
    }
}

export class NetworkHttpError extends HttpError {
    constructor(error: unknown) {
        super("네트워크 연결을 확인해주세요", error);
    }
}

export class UnknownHttpError extends HttpError {
    constructor(error: unknown, message?: string) {
        super(message || "예상치 못한 오류가 발생했습니다", error);
    }
}
