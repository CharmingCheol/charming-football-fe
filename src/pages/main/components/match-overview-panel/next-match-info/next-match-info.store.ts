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
    combine(nextMatchState, (set, get) => ({
        actions: {
            fetchNextMatch: async () => {
                const nextMatch = await getNextMatchApi.get(541);
                set({ nextMatch, isLoading: false });
            },
        },
        computed: {
            getFormattedTime: () => {
                const { nextMatch } = get();
                if (!nextMatch) return "";
                const date = new Date(nextMatch.fixture.date);
                const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const dayOfWeek = days[date.getDay()];
                const hours = date.getHours().toString().padStart(2, "0");
                const minutes = date.getMinutes().toString().padStart(2, "0");
                return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hours}:${minutes}`;
            },
            getFormattedLeagueName: () => {
                const { nextMatch } = get();
                if (!nextMatch) return "";
                return nextMatch.league.name.split(" ").join("\n");
            },
        },
    }))
);

export default useNextMatchStore;
