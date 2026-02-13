import { apiClient } from "./instance";

export const getSearchAllApi = {
    path: "api/search/all",
    get: async (query: string): Promise<SearchResult[]> => {
        const response = await apiClient.get(`${getSearchAllApi.path}`, {
            params: { query },
        });
        return response.data;
    },
};
