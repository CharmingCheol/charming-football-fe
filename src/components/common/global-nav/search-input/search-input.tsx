"use client";

import { useEffect, useRef, useCallback, useState } from "react";

import Input from "@/components/ui/input/input";
import useDebounce from "@/hooks/useDebounce";

import SuggestionItem from "./suggestion-item/suggestion-item";
import { SearchInputProvider, useSearchInputContext } from "./search-input-context";

import classNames from "classnames/bind";
import styles from "./search-input.module.scss";

const cx = classNames.bind(styles);

// 예시 데이터 (실제로는 API에서 가져올 수 있습니다)
const mockSuggestions: SearchSuggestion[] = [
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

const SearchInputContent = () => {
    const { state, dispatch } = useSearchInputContext();
    const { query, isOpen, selectedIndex } = state;

    const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);

    const debouncedQuery = useDebounce(query, 500);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    dispatch({
                        type: "SET_SELECTED_INDEX",
                        payload: selectedIndex < suggestions.length - 1 ? selectedIndex + 1 : selectedIndex,
                    });
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    dispatch({
                        type: "SET_SELECTED_INDEX",
                        payload: selectedIndex > 0 ? selectedIndex - 1 : -1,
                    });
                    break;
                case "Enter":
                    e.preventDefault();
                    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                        dispatch({ type: "SELECT_SUGGESTION", payload: suggestions[selectedIndex] });
                        console.log("선택된 항목:", suggestions[selectedIndex]);
                    }
                    break;
                case "Escape":
                    dispatch({ type: "SET_IS_OPEN", payload: false });
                    inputRef.current?.blur();
                    break;
            }
        },
        [isOpen, suggestions, selectedIndex, dispatch]
    );

    const handleFocus = useCallback(() => {
        if (suggestions.length > 0) {
            dispatch({ type: "SET_IS_OPEN", payload: true });
        }
    }, [suggestions.length, dispatch]);

    // 검색어에 따른 제안 필터링 (디바운싱 적용)
    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            setSuggestions([]);
            dispatch({ type: "SET_IS_OPEN", payload: false });
            return;
        }

        // 실제 API 호출을 시뮬레이션
        const suggestions = mockSuggestions.filter((item) =>
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setSuggestions(suggestions);
        dispatch({ type: "SET_IS_OPEN", payload: suggestions.length > 0 });
        dispatch({ type: "SET_SELECTED_INDEX", payload: -1 });
    }, [debouncedQuery, dispatch]);

    // 외부 클릭 시 제안 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                dispatch({ type: "SET_IS_OPEN", payload: false });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dispatch]);

    return (
        <div className={cx("search-input-wrapper")}>
            <Input
                ref={inputRef}
                placeholder="팀, 선수, 리그 이름을 입력해 주세요."
                value={query}
                onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
            />
            {isOpen && (
                <div ref={suggestionsRef} className={cx("suggestions")}>
                    {suggestions.map((suggestion, index) => (
                        <SuggestionItem key={suggestion.id} suggestion={suggestion} index={index} query={query} />
                    ))}
                </div>
            )}
        </div>
    );
};

const SearchInput = () => {
    return (
        <SearchInputProvider>
            <SearchInputContent />
        </SearchInputProvider>
    );
};

export default SearchInput;
