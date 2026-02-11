import { useQuery } from "@tanstack/react-query";
import { getNextMatchApi, getRecentMatchesApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";

export const useNextMatch = (teamId = MANCHESTER_UNITED) => {
    return useQuery({
        queryKey: ["fixtures", "getNextMatchApi", teamId],
        queryFn: async () => {
            const { response } = await getNextMatchApi.get(teamId);
            return response[0] ?? null;
        },
    });
};

export const useRecentMatches = (teamId = MANCHESTER_UNITED) => {
    return useQuery({
        queryKey: ["fixtures", "getRecentMatchesApi", teamId],
        queryFn: async () => {
            const { response } = await getRecentMatchesApi.get(teamId);
            return response;
        },
    });
};
