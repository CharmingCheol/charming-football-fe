import { useEffect, useRef } from "react";

import * as Styles from "./search-suggestion-list.styles";
import SearchSuggestion from "./search-suggestion/search-suggestion";
import useSearchInputStore from "../search-input.store";

const SearchSuggestionList = ({ query }: { query: string }) => {
    const searchSuggestionList = useSearchInputStore((state) => state.searchSuggestionList);
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
        <Styles.SearchSuggestionList ref={suggestionsRef}>
            {searchSuggestionList.map((searchSuggestion, index) => (
                <SearchSuggestion
                    key={searchSuggestion.id}
                    searchSuggestion={searchSuggestion}
                    index={index}
                    query={query}
                />
            ))}
        </Styles.SearchSuggestionList>
    );
};

export default SearchSuggestionList;
