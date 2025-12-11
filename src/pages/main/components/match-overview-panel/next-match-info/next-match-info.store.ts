import { getNextMatchApi } from "@/apis/teams";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    nextMatch: NextMatchData | null;
    isLoading: boolean;
}

export const nextMatchState: State = {
    nextMatch: null,
    isLoading: true,
};

const useNextMatchStore = create(
    combine(nextMatchState, (set) => ({
        actions: {
            fetchNextMatch: async () => {
                const nextMatch = await getNextMatchApi.get(541);
                set({ nextMatch, isLoading: false });
            },
        },
    }))
);

export default useNextMatchStore;
