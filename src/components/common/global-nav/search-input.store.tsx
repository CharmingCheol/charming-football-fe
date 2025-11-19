import { getSearchAllApi } from "@/apis/search";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    query: string;
    suggestionKeywords: SearchSuggestion[];
    focusedKeywordIndex: number;
    inputFocused: boolean;
}

export const searchInputState: State = {
    query: "",
    suggestionKeywords: [],
    focusedKeywordIndex: -1,
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
                set({ suggestionKeywords, focusedKeywordIndex: 0 });
            },
            goToNextKeywordIndex: () => {
                const { suggestionKeywords, focusedKeywordIndex } = get();
                const nextIndex = suggestionKeywords.length <= focusedKeywordIndex + 1 ? 0 : focusedKeywordIndex + 1;
                set({ focusedKeywordIndex: nextIndex });
            },
            goBackKeywordIndex: () => {
                const { suggestionKeywords, focusedKeywordIndex } = get();
                const prevIndex = focusedKeywordIndex - 1 < 0 ? suggestionKeywords.length - 1 : focusedKeywordIndex - 1;
                set({ focusedKeywordIndex: prevIndex });
            },
            selectKeywordByIndex: (focusedKeywordIndex: number) => {
                set({ focusedKeywordIndex });
            },
            focusInInput: () => {
                set({ inputFocused: true });
            },
            focusOutInput: () => {
                set({ inputFocused: false });
            },
            clear: () => {
                set({ query: "", suggestionKeywords: [], focusedKeywordIndex: -1, inputFocused: false });
            },
        },
    }))
);

export default useSearchInputStore;
