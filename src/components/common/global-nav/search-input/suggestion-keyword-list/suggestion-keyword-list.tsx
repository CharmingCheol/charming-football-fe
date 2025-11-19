import { useEffect, useRef } from "react";

import * as Styles from "./suggestion-keyword-list.styles";
import SuggestionKeyword from "./suggestion-keyword/suggestion-keyword";
import useSearchInputStore from "../../search-input.store.ts";

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
        <Styles.SuggestionKeywordList ref={suggestionsRef}>
            {suggestionKeywords.map((suggestion, index) => (
                <SuggestionKeyword key={suggestion.id} suggestion={suggestion} index={index} query={query} />
            ))}
        </Styles.SuggestionKeywordList>
    );
};
