"use client";

import { useEffect, useRef, useCallback } from "react";
import Input from "@/components/ui/input/input";
import useDebounce from "@/hooks/useDebounce";
import useSearchInputStore from "../search-input.store";

const SearchInput = () => {
    const query = useSearchInputStore((state) => state.query);
    const focusedSearchIndex = useSearchInputStore((state) => state.focusedSearchIndex);
    const actions = useSearchInputStore((state) => state.actions);

    const inputRef = useRef<HTMLInputElement>(null);

    const debouncedQuery = useDebounce(query, 500);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown": {
                    e.preventDefault();
                    actions.goToNextSearchIndex();
                    break;
                }
                case "ArrowUp": {
                    e.preventDefault();
                    actions.goBackSearchIndex();
                    break;
                }
                case "Enter": {
                    if (focusedSearchIndex >= 0) {
                        //
                    }
                    break;
                }
                case "Escape": {
                    e.preventDefault();
                    actions.focusOutInput();
                    inputRef.current?.blur();
                    break;
                }
            }
        },
        [actions, focusedSearchIndex]
    );

    useEffect(() => {
        actions.querySearchSuggestion(debouncedQuery);
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
        <Input
            ref={inputRef}
            placeholder="팀, 선수, 리그 이름을 입력해 주세요."
            value={query}
            onChange={(e) => actions.setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => actions.focusInInput()}
        />
    );
};

export default SearchInput;
