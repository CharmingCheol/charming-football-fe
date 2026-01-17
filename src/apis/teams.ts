import { apiFootballClient } from "./instance";

interface Response<T> {
    response: T[];
}

export const getNextMatchApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<ApiFootballFixture | null> => {
        const response = await apiFootballClient.get<Response<ApiFootballFixture>>(getNextMatchApi.path, {
            params: { team: teamId, next: 1 },
        });
        return response.data.response[0] ?? null;
    },
};

export const getRecentMatchesApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<ApiFootballFixture[]> => {
        const response = await apiFootballClient.get<Response<ApiFootballFixture>>(getRecentMatchesApi.path, {
            params: { team: teamId, last: 5 },
        });
        return response.data.response;
    },
};
