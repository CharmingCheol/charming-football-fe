import { getRecentMatchesApi } from "@/apis/teams";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    recentMatches: { data: RecentMatchData[]; isLoading: boolean };
}

export const initState: State = {
    recentMatches: { data: [], isLoading: true },
};

const useMatchOverviewPanelStore = create(
    combine(initState, (set) => ({
        actions: {
            fetchRecentMatches: async () => {
                try {
                    const recentMatches = await getRecentMatchesApi.get(541);
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
