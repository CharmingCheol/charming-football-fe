import { apiFootballClient } from "./instance";

interface ApiFootballResponse<T> {
    response: T[];
}

export const getNextMatchApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<NextMatchData | null> => {
        const response = await apiFootballClient.get<ApiFootballResponse<NextMatchData>>(getNextMatchApi.path, {
            params: { team: teamId, next: 1 },
        });
        return response.data.response[0] ?? null;
    },
};

export const getRecentMatchesApi = {
    path: "fixtures",
    get: async (teamId: number): Promise<RecentMatchData[]> => {
        const response = await apiFootballClient.get<ApiFootballResponse<RecentMatchData>>(getRecentMatchesApi.path, {
            params: { team: teamId, last: 5 },
        });
        return response.data.response;
    },
};
