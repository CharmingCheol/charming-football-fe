import { getSearchAllApi } from "@/apis/search";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    query: string;
    searchResultList: SearchResult[];
    focusedSearchIndex: number;
    inputFocused: boolean;
}

export const searchInputState: State = {
    query: "",
    searchResultList: [],
    focusedSearchIndex: -1,
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
                const searchResultList = await getSearchAllApi.get(query);
                set({ searchResultList, focusedSearchIndex: 0 });
            },
            goToNextKeywordIndex: () => {
                const { searchResultList, focusedSearchIndex } = get();
                const nextIndex = searchResultList.length <= focusedSearchIndex + 1 ? 0 : focusedSearchIndex + 1;
                set({ focusedSearchIndex: nextIndex });
            },
            goBackKeywordIndex: () => {
                const { searchResultList, focusedSearchIndex } = get();
                const prevIndex = focusedSearchIndex - 1 < 0 ? searchResultList.length - 1 : focusedSearchIndex - 1;
                set({ focusedSearchIndex: prevIndex });
            },
            selectKeywordByIndex: (focusedSearchIndex: number) => {
                set({ focusedSearchIndex });
            },
            focusInInput: () => {
                set({ inputFocused: true });
            },
            focusOutInput: () => {
                set({ inputFocused: false });
            },
            clear: () => {
                set({ query: "", searchResultList: [], focusedSearchIndex: -1, inputFocused: false });
            },
        },
    }))
);

export default useSearchInputStore;
