import { useEffect, useRef } from "react";

import SuggestionKeyword from "./suggestion-keyword/suggestion-keyword";
import useSearchInputStore from "../search-input.store";

import classNames from "classnames/bind";
import styles from "./suggestion-keyword-list.module.scss";

const cx = classNames.bind(styles);

export const SuggestionKeywordList = ({ query }: { query: string }) => {
    const suggestionKeywords = useSearchInputStore((state) => state.suggestionKeywords);
    const actions = useSearchInputStore((state) => state.actions);

    const suggestionsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
                actions.focusOutInput();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [actions]);

    return (
        <ul ref={suggestionsRef} className={cx("suggestions")}>
            {suggestionKeywords.map((suggestion, index) => (
                <SuggestionKeyword key={suggestion.id} suggestion={suggestion} index={index} query={query} />
            ))}
        </ul>
    );
};
