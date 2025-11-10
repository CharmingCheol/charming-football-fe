"use client";

import { useEffect, useRef, useCallback, useState } from "react";

import Input from "@/components/ui/input/input";
import useDebounce from "@/hooks/useDebounce";

import { SuggestionKeywordList } from "./suggestion-keyword-list/suggestion-keyword-list";
import useSearchInputStore from "./search-input.store";

const SearchInput = () => {
    const suggestionKeywords = useSearchInputStore((state) => state.suggestionKeywords);
    const selectedKeywordIndex = useSearchInputStore((state) => state.selectedKeywordIndex);
    const focusedInput = useSearchInputStore((state) => state.focusedInput);
    const actions = useSearchInputStore((state) => state.actions);

    const [query, setQuery] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const debouncedQuery = useDebounce(query, 500);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            e.preventDefault();
            switch (e.key) {
                case "ArrowDown": {
                    actions.selectKeywordByIndex(
                        suggestionKeywords.length <= selectedKeywordIndex + 1 ? 0 : selectedKeywordIndex + 1
                    );
                    break;
                }
                case "ArrowUp": {
                    actions.selectKeywordByIndex(
                        selectedKeywordIndex - 1 < 0 ? suggestionKeywords.length - 1 : selectedKeywordIndex - 1
                    );
                    break;
                }
                case "Enter": {
                    if (selectedKeywordIndex >= 0) {
                        //
                    }
                    break;
                }
                case "Escape": {
                    actions.focusOutInput();
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                actions.focusOutInput();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [actions]);

    return (
        <>
            <Input
                ref={inputRef}
                placeholder="팀, 선수, 리그 이름을 입력해 주세요."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => actions.focusInInput()}
            />
            {suggestionKeywords.length > 0 && focusedInput && <SuggestionKeywordList query={query} />}
        </>
    );
};

export default SearchInput;
