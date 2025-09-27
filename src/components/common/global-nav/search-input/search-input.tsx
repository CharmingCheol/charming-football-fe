"use client";

import { useEffect, useRef, useCallback, useState } from "react";

import Input from "@/components/ui/input/input";
import useDebounce from "@/hooks/useDebounce";

import SuggestionItem from "./suggestion-item/suggestion-item";
import useSearchInputStore from "./search-input.store";

import classNames from "classnames/bind";
import styles from "./search-input.module.scss";

const cx = classNames.bind(styles);

const SearchInput = () => {
    const suggestionKeywords = useSearchInputStore((state) => state.suggestionKeywords);
    const selectedKeywordIndex = useSearchInputStore((state) => state.selectedKeywordIndex);
    const actions = useSearchInputStore((state) => state.actions);

    const [query, setQuery] = useState<string>("");
    const [focusInput, setFocusInput] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLUListElement>(null);

    const debouncedQuery = useDebounce(query, 500);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown": {
                    e.preventDefault();
                    actions.selectKeywordByIndex(
                        selectedKeywordIndex < suggestionKeywords.length - 1
                            ? selectedKeywordIndex + 1
                            : selectedKeywordIndex
                    );
                    break;
                }
                case "ArrowUp": {
                    e.preventDefault();
                    actions.selectKeywordByIndex(selectedKeywordIndex > 0 ? selectedKeywordIndex - 1 : -1);
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (selectedKeywordIndex >= 0) {
                        //
                    }
                    break;
                }
                case "Escape": {
                    setFocusInput(false);
                    inputRef.current?.blur();
                    break;
                }
            }
        },
        [actions, selectedKeywordIndex, suggestionKeywords.length]
    );

    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            actions.clear();
            return;
        }
        actions.querySuggestionKeywords(debouncedQuery);
    }, [actions, debouncedQuery]);

    // 외부 클릭 시 제안 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setFocusInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cx("search-input-wrapper")}>
            <Input
                ref={inputRef}
                placeholder="팀, 선수, 리그 이름을 입력해 주세요."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocusInput(true)}
            />
            {suggestionKeywords.length > 0 && focusInput && (
                <ul ref={suggestionsRef} className={cx("suggestions")}>
                    {suggestionKeywords.map((suggestion, index) => (
                        <SuggestionItem key={suggestion.id} suggestion={suggestion} index={index} query={query} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
