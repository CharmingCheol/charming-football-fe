import { create } from "zustand";
import { combine } from "zustand/middleware";
import { getNextMatchApi, getRecentMatchesApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";

interface State {
    nextMatch: { data: NextMatchData | null; isLoading: boolean };
    recentMatches: { data: RecentMatchData[]; isLoading: boolean };
}

export const initState: State = {
    nextMatch: { data: null, isLoading: true },
    recentMatches: { data: [], isLoading: true },
};

const useMatchOverviewPanelStore = create(
    combine(initState, (set) => ({
        actions: {
            fetchNextMatch: async () => {
                try {
                    const nextMatch = await getNextMatchApi.get(MANCHESTER_UNITED);
                    set({ nextMatch: { data: nextMatch, isLoading: false } });
                } catch (error) {
                    set({ nextMatch: { data: null, isLoading: false } });
                    throw error;
                }
            },
            fetchRecentMatches: async () => {
                try {
                    const recentMatches = await getRecentMatchesApi.get(MANCHESTER_UNITED);
                    set({ recentMatches: { data: recentMatches, isLoading: false } });
                } catch (error) {
                    set({ recentMatches: { data: [], isLoading: false } });
                    throw error;
                }
            },
        },
    }))
);

export default useMatchOverviewPanelStore;
