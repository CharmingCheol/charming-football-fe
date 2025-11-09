import { getSearchAllApi } from "@/apis/search";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    suggestionKeywords: SearchSuggestion[];
    selectedKeywordIndex: number;
    focusedInput: boolean;
}

export const searchInputState: State = {
    suggestionKeywords: [],
    selectedKeywordIndex: -1,
    focusedInput: false,
};

const useSearchInputStore = create(
    combine(searchInputState, (set) => ({
        actions: {
            querySuggestionKeywords: async (query: string) => {
                const suggestionKeywords = await getSearchAllApi.get(query);
                set({ suggestionKeywords, selectedKeywordIndex: -1 });
            },
            selectKeywordByIndex: (selectedKeywordIndex: number) => {
                set({ selectedKeywordIndex });
            },
            focusInInput: () => {
                set({ focusedInput: true });
            },
            focusOutInput: () => {
                set({ focusedInput: false });
            },
            clear: () => {
                set({ suggestionKeywords: [], selectedKeywordIndex: -1, focusedInput: false });
            },
        },
    }))
);

export default useSearchInputStore;
