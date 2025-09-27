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
    const { suggestionList, selectedIndex, fetchSuggestionList, resetSuggestionList, changeSelectedIndex } =
        useSearchInputStore();

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
                    changeSelectedIndex(selectedIndex < suggestionList.length - 1 ? selectedIndex + 1 : selectedIndex);
                    break;
                }
                case "ArrowUp": {
                    e.preventDefault();
                    changeSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : -1);
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (selectedIndex >= 0) {
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
        [selectedIndex, suggestionList, changeSelectedIndex]
    );

    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            resetSuggestionList();
            return;
        }
        fetchSuggestionList(debouncedQuery);
    }, [debouncedQuery, resetSuggestionList, fetchSuggestionList]);

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
            {suggestionList.length > 0 && focusInput && (
                <ul ref={suggestionsRef} className={cx("suggestions")}>
                    {suggestionList.map((suggestion, index) => (
                        <SuggestionItem key={suggestion.id} suggestion={suggestion} index={index} query={query} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
