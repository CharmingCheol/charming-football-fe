"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Input from "@/components/ui/input/input";
import styles from "./search-input.module.scss";
import useDebounce from "@/hooks/useDebounce";

interface SearchSuggestion {
    id: string;
    name: string;
    type: "team" | "player" | "league";
}

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

// 하이라이트 텍스트 컴포넌트
const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark key={index} className={styles.highlight}>
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </span>
    );
};

export default function SearchInput() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);

    const debouncedQuery = useDebounce(query, 300);

    // 검색어에 따른 제안 필터링 (디바운싱 적용)
    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            setSuggestions([]);
            setIsOpen(false);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        // 실제 API 호출을 시뮬레이션
        const timer = setTimeout(() => {
            const filtered = mockSuggestions.filter((item) =>
                item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            setSuggestions(filtered);
            setIsOpen(filtered.length > 0);
            setSelectedIndex(-1);
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, [debouncedQuery]);

    // 키보드 네비게이션
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
                    break;
                case "Enter":
                    e.preventDefault();
                    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                        handleSuggestionClick(suggestions[selectedIndex]);
                    }
                    break;
                case "Escape":
                    setIsOpen(false);
                    inputRef.current?.blur();
                    break;
            }
        },
        [isOpen, suggestions, selectedIndex]
    );

    // 제안 클릭 처리
    const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
        setQuery(suggestion.name);
        setIsOpen(false);
        // 여기서 실제 검색 로직을 실행할 수 있습니다
        console.log("선택된 항목:", suggestion);
    }, []);

    // 외부 클릭 시 제안 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.searchContainer}>
            <Input
                ref={inputRef}
                placeholder="팀이나 선수 이름을 입력해 주세요."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => suggestions.length > 0 && setIsOpen(true)}
            />

            {isOpen && (
                <div ref={suggestionsRef} className={styles.suggestions}>
                    {isLoading ? (
                        <div className={styles.loadingItem}>
                            <div className={styles.spinner}></div>
                            <span>검색 중...</span>
                        </div>
                    ) : suggestions.length > 0 ? (
                        suggestions.map((suggestion, index) => (
                            <div
                                key={suggestion.id}
                                className={`${styles.suggestionItem} ${index === selectedIndex ? styles.selected : ""}`}
                                onClick={() => handleSuggestionClick(suggestion)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <div className={styles.suggestionContent}>
                                    <span className={styles.suggestionName}>
                                        <HighlightedText text={suggestion.name} highlight={query} />
                                    </span>
                                    <span className={styles.suggestionType}>
                                        {suggestion.type === "team"
                                            ? "팀"
                                            : suggestion.type === "player"
                                              ? "선수"
                                              : "리그"}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>검색 결과가 없습니다.</div>
                    )}
                </div>
            )}
        </div>
    );
}
