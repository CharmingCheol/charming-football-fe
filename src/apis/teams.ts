import { apiClient } from "./instance";

export const getNextMatchApi = {
    path: "api/teams/:teamId/matches/next",
    get: async (teamId: number): Promise<NextMatchData | null> => {
        const path = getNextMatchApi.path.replace(":teamId", teamId.toString());
        const response = await apiClient.get(path);
        return response.data;
    },
};
