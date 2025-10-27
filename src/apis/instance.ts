import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

function createAxiosInstance(): AxiosInstance {
    const defaultConfig: AxiosRequestConfig = {
        baseURL: import.meta.env.VITE_API_BASE_URL || "",
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    };

    const instance = axios.create(defaultConfig);

    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance;
}

export const apiClient = createAxiosInstance();
