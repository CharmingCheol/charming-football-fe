import { getSearchAllApi } from "@/apis/search";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    query: string;
    suggestionKeywords: SearchSuggestion[];
    selectedKeywordIndex: number;
    inputFocused: boolean;
}

export const searchInputState: State = {
    query: "",
    suggestionKeywords: [],
    selectedKeywordIndex: -1,
    inputFocused: false,
};

const useSearchInputStore = create(
    combine(searchInputState, (set, get) => ({
        actions: {
            setQuery: (query: string) => {
                set({ query });
            },
            querySuggestionKeywords: async (query: string) => {
                if (query.trim() === "") {
                    return;
                }
                const suggestionKeywords = await getSearchAllApi.get(query);
                set({ suggestionKeywords, selectedKeywordIndex: 0 });
            },
            goToNextKeywordIndex: () => {
                const { suggestionKeywords, selectedKeywordIndex } = get();
                const nextIndex = suggestionKeywords.length <= selectedKeywordIndex + 1 ? 0 : selectedKeywordIndex + 1;
                set({ selectedKeywordIndex: nextIndex });
            },
            goBackKeywordIndex: () => {
                const { suggestionKeywords, selectedKeywordIndex } = get();
                const prevIndex =
                    selectedKeywordIndex - 1 < 0 ? suggestionKeywords.length - 1 : selectedKeywordIndex - 1;
                set({ selectedKeywordIndex: prevIndex });
            },
            selectKeywordByIndex: (selectedKeywordIndex: number) => {
                set({ selectedKeywordIndex });
            },
            focusInInput: () => {
                set({ inputFocused: true });
            },
            focusOutInput: () => {
                set({ inputFocused: false });
            },
            clear: () => {
                set({ query: "", suggestionKeywords: [], selectedKeywordIndex: -1, inputFocused: false });
            },
        },
    }))
);

export default useSearchInputStore;
