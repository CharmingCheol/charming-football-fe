import useSearchInputStore from "../search-input.store";

import classNames from "classnames/bind";
import styles from "./suggestion-item.module.scss";

const cx = classNames.bind(styles);

interface Props {
    suggestion: SearchSuggestion;
    index: number;
    query: string;
}

const SuggestionItem = ({ suggestion, index, query }: Props) => {
    const { selectedIndex, changeSelectedIndex } = useSearchInputStore();

    const isSelected = index === selectedIndex;

    const handleClick = () => {
        //
    };

    const handleMouseEnter = () => {
        changeSelectedIndex(index);
    };

    return (
        <li
            className={cx("suggestion-item", { selected: isSelected })}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            <div className={cx("suggestion-content")}>
                <span className={cx("name")}>
                    <HighlightedText text={suggestion.name} highlight={query} />
                </span>
                <span className={cx("type")}>
                    <TypeLabel type={suggestion.type} />
                </span>
            </div>
        </li>
    );
};

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
                    <mark key={index} className={cx("highlight")}>
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </span>
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

    return <span>{getTypeLabel(type)}</span>;
};

export default SuggestionItem;
