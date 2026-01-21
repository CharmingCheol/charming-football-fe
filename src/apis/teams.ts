import { apiFootballClient } from "./instance";

interface Response<T> {
    response: T;
}

export const getNextMatchApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<Response<[ApiFootballFixture]>> => {
        const response = await apiFootballClient.get(getNextMatchApi.path, {
            params: { team: teamId, next: 1 },
        });
        return response.data;
    },
};

export const getRecentMatchesApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<Response<ApiFootballFixture[]>> => {
        const response = await apiFootballClient.get(getRecentMatchesApi.path, {
            params: { team: teamId, last: 5 },
        });
        return response.data;
    },
};
