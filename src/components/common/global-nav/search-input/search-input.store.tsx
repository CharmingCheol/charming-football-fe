import { create } from "zustand";
import { combine } from "zustand/middleware";

interface State {
    suggestionKeywords: SearchSuggestion[];
    selectedKeywordIndex: number;
    focusedInput: boolean;
}

const initialState: State = {
    suggestionKeywords: [],
    selectedKeywordIndex: -1,
    focusedInput: false,
};

// 예시 데이터 (실제로는 API에서 가져올 수 있습니다)
const mockSuggestionKeywords: SearchSuggestion[] = [
    { id: "1", name: "맨체스터 유나이티드", type: "team" },
    { id: "2", name: "리버풀", type: "team" },
    { id: "3", name: "손흥민", type: "player" },
    { id: "4", name: "김민재", type: "player" },
    { id: "5", name: "첼시", type: "team" },
    { id: "6", name: "아스널", type: "team" },
    { id: "7", name: "케인", type: "player" },
    { id: "8", name: "살라", type: "player" },
    { id: "9", name: "맨체스터 시티", type: "team" },
    { id: "10", name: "토트넘", type: "team" },
];

const useSearchInputStore = create(
    combine(initialState, (set) => ({
        actions: {
            querySuggestionKeywords: (query: string) => {
                set({
                    suggestionKeywords: mockSuggestionKeywords.filter((keyword) => keyword.name.includes(query)),
                    selectedKeywordIndex: -1,
                });
            },
            selectKeywordByIndex: (selectedKeywordIndex: number) => {
                set({ selectedKeywordIndex });
            },
            clear: () => {
                set({ suggestionKeywords: [], selectedKeywordIndex: -1 });
            },
        },
    }))
);

export default useSearchInputStore;
