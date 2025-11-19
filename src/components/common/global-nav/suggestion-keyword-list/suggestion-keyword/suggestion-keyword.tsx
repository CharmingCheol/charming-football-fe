import * as Styles from "./suggestion-keyword.styles";
import useSearchInputStore from "../../search-input.store";
import { useMemo } from "react";

interface Props {
    suggestion: SearchSuggestion;
    index: number;
    query: string;
}

const SuggestionKeyword = ({ suggestion, index, query }: Props) => {
    const actions = useSearchInputStore((state) => state.actions);
    const selectedKeywordIndex = useSearchInputStore((state) => state.selectedKeywordIndex);
    const selected = useMemo(() => selectedKeywordIndex === index, [selectedKeywordIndex, index]);

    const handleClick = () => {
        //
    };

    const handleMouseEnter = () => {
        actions.selectKeywordByIndex(index);
    };

    return (
        <Styles.SuggestionKeyword selected={selected} onClick={handleClick} onMouseEnter={handleMouseEnter}>
            <div className="content">
                <HighlightedText text={suggestion.name} highlight={query} />
                <TypeLabel type={suggestion.type} />
            </div>
        </Styles.SuggestionKeyword>
    );
};

const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight.trim()) {
        return <Styles.HighlightedText>{text}</Styles.HighlightedText>;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
        <Styles.HighlightedText>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark key={index} className="highlight">
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </Styles.HighlightedText>
    );
};

const TypeLabel = ({ type }: { type: string }) => {
    const getTypeLabel = (type: string) => {
        switch (type) {
            case "team":
                return "팀";
            case "player":
                return "선수";
            case "league":
                return "리그";
            default:
                return "";
        }
    };

    return <Styles.TypeLabel>{getTypeLabel(type)}</Styles.TypeLabel>;
};

export default SuggestionKeyword;
