import { apiClient } from "./instance";

export const getSearchAllApi = {
    path: "/api/search/all",
    get: async (query: string): Promise<SearchSuggestion[]> => {
        const response = await apiClient.get(`${getSearchAllApi.path}`, {
            params: { query },
        });
        return response.data;
    },
};
