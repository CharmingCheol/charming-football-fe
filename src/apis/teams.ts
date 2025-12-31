import { apiClient } from "./instance";

export const getNextMatchApi = {
    path: "api/teams/:teamId/matches/next",
    get: async (teamId: number): Promise<NextMatchData | null> => {
        const path = getNextMatchApi.path.replace(":teamId", teamId.toString());
        const response = await apiClient.get(path);
        return response.data;
    },
};

export const getRecentMatchesApi = {
    path: "api/teams/:teamId/matches/recent",
    get: async (teamId: number): Promise<RecentMatchData[]> => {
        const path = getRecentMatchesApi.path.replace(":teamId", teamId.toString());
        const response = await apiClient.get(path, {
            params: { last: 5 },
        });
        return response.data;
    },
};
