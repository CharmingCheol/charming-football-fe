"use client";

import React, { createContext, useContext, useReducer } from "react";

interface State {
    query: string;
    isOpen: boolean;
    selectedIndex: number;
}

type SearchInputAction =
    | { type: "SET_QUERY"; payload: string }
    | { type: "SET_IS_OPEN"; payload: boolean }
    | { type: "SET_SELECTED_INDEX"; payload: number }
    | { type: "SELECT_SUGGESTION"; payload: SearchSuggestion }
    | { type: "RESET" };

const initialState: State = {
    query: "",
    isOpen: false,
    selectedIndex: -1,
};

const reducer = (state: State, action: SearchInputAction): State => {
    switch (action.type) {
        case "SET_QUERY":
            return { ...state, query: action.payload };
        case "SET_IS_OPEN":
            return { ...state, isOpen: action.payload };
        case "SET_SELECTED_INDEX":
            return { ...state, selectedIndex: action.payload };
        case "SELECT_SUGGESTION":
            return {
                ...state,
                query: action.payload.name,
                isOpen: false,
                selectedIndex: -1,
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

interface SearchInputContextType {
    state: State;
    dispatch: React.Dispatch<SearchInputAction>;
}

const SearchInputContext = createContext<SearchInputContextType | undefined>(undefined);

export const useSearchInputContext = () => {
    const context = useContext(SearchInputContext);
    if (!context) {
        throw new Error("useSearchInputContext must be used within SearchInputProvider");
    }
    return context;
};

export const SearchInputProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <SearchInputContext.Provider value={{ state, dispatch }}>{children}</SearchInputContext.Provider>;
};
