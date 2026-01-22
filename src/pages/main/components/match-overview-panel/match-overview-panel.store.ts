import { create } from "zustand";
import { combine } from "zustand/middleware";
import { getNextMatchApi, getRecentMatchesApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";

type Status = "request" | "success" | "failure";

interface State {
    nextMatch: { data: ApiFootballFixture | null; status: Status };
    recentMatches: { data: ApiFootballFixture[]; status: Status };
}

export const initState: State = {
    nextMatch: { data: null, status: "request" },
    recentMatches: { data: [], status: "request" },
};

const useMatchOverviewPanelStore = create(
    combine(initState, (set) => ({
        actions: {
            fetchNextMatch: async () => {
                set({ nextMatch: { data: null, status: "request" } });
                try {
                    const nextMatch = await getNextMatchApi.get(MANCHESTER_UNITED);
                    set({ nextMatch: { data: nextMatch.response[0] ?? null, status: "success" } });
                } catch (error) {
                    set({ nextMatch: { data: null, status: "failure" } });
                    throw error;
                }
            },
            fetchRecentMatches: async () => {
                set({ recentMatches: { data: [], status: "request" } });
                try {
                    const recentMatches = await getRecentMatchesApi.get(MANCHESTER_UNITED);
                    set({ recentMatches: { data: recentMatches.response, status: "success" } });
                } catch (error) {
                    set({ recentMatches: { data: [], status: "failure" } });
                    throw error;
                }
            },
        },
    }))
);

export default useMatchOverviewPanelStore;
