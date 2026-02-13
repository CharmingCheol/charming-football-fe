import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { NetworkHttpError, ServerHttpError, UnknownHttpError } from "@/constants/errors";

function createApiFootballClient(): AxiosInstance {
    const defaultConfig: AxiosRequestConfig = {
        baseURL: "https://v3.football.api-sports.io",
        timeout: 10000,
        headers: {
            "x-apisports-key": import.meta.env.VITE_API_FOOTBALL_KEY || "",
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

export const apiFootballClient = createApiFootballClient();
