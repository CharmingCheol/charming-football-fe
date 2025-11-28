import { getSearchAllApi } from "@/apis/search";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    query: string;
    searchSuggestionList: SearchSuggestion[];
    focusedSearchIndex: number;
    inputFocused: boolean;
}

export const searchInputState: State = {
    query: "",
    searchSuggestionList: [],
    focusedSearchIndex: -1,
    inputFocused: false,
};

const useSearchInputStore = create(
    combine(searchInputState, (set, get) => ({
        actions: {
            setQuery: (query: string) => {
                set({ query });
            },
            querySearchSuggestion: async (query: string) => {
                if (query.trim() === "") {
                    return;
                }
                const searchSuggestionList = await getSearchAllApi.get(query);
                set({ searchSuggestionList, focusedSearchIndex: 0 });
            },
            goToNextSearchIndex: () => {
                const { searchSuggestionList, focusedSearchIndex } = get();
                const nextIndex = searchSuggestionList.length <= focusedSearchIndex + 1 ? 0 : focusedSearchIndex + 1;
                set({ focusedSearchIndex: nextIndex });
            },
            goBackSearchIndex: () => {
                const { searchSuggestionList, focusedSearchIndex } = get();
                const prevIndex = focusedSearchIndex - 1 < 0 ? searchSuggestionList.length - 1 : focusedSearchIndex - 1;
                set({ focusedSearchIndex: prevIndex });
            },
            focusSearchIndex: (focusedSearchIndex: number) => {
                set({ focusedSearchIndex });
            },
            focusInInput: () => {
                set({ inputFocused: true });
            },
            focusOutInput: () => {
                set({ inputFocused: false });
            },
            clear: () => {
                set({ query: "", searchSuggestionList: [], focusedSearchIndex: -1, inputFocused: false });
            },
        },
    }))
);

export default useSearchInputStore;
