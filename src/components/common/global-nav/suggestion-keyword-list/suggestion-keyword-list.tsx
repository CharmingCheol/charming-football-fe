import { useEffect, useRef } from "react";

import * as Styles from "./suggestion-keyword-list.styles";
import SuggestionKeyword from "./suggestion-keyword/suggestion-keyword";
import useSearchInputStore from "../search-input.store";

const SuggestionKeywordList = ({ query }: { query: string }) => {
    const searchResultList = useSearchInputStore((state) => state.searchResultList);
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
            {searchResultList.map((searchResult, index) => (
                <SuggestionKeyword key={searchResult.id} searchResult={searchResult} index={index} query={query} />
            ))}
        </Styles.SuggestionKeywordList>
    );
};

export default SuggestionKeywordList;
