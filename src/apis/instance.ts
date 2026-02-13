import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { NetworkHttpError, ServerHttpError, UnknownHttpError } from "@/constants/errors";

function createAxiosInstance(): AxiosInstance {
    const defaultConfig: AxiosRequestConfig = {
        baseURL: import.meta.env.VITE_API_BASE_URL || "",
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    };

    const instance = axios.create(defaultConfig);
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (!axios.isAxiosError(error)) {
                return Promise.reject(new UnknownHttpError(error));
            }
            if (!error.response) {
                return Promise.reject(new NetworkHttpError(error));
            }
            const { status, data } = error.response;
            switch (status) {
                case 500: {
                    return Promise.reject(new ServerHttpError(error));
                }
                default: {
                    return Promise.reject(new UnknownHttpError(error, data?.message));
                }
            }
        }
    );

    return instance;
}

export const apiClient = createAxiosInstance();
