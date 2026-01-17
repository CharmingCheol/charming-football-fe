import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const SearchSuggestion = styled.li<{ focused: boolean }>((props) => ({
    padding: `${clampVh(12)} ${clampVh(16)}`,
    cursor: "pointer",
    borderBottom: `1px solid ${colors.gray200}`,
    borderRadius: clampVh(8),
    backgroundColor: props.focused ? colors.gray200 : "transparent",

    "&:last-child": {
        borderBottom: "none",
    },

    "& .content": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

export const HighlightedText = styled.span({
    ...typography.p4,
    color: colors.black900,
});

export const TypeLabel = styled.span({
    ...typography.p4,
    backgroundColor: colors.gray400,
    padding: `${clampVh(4)} ${clampVh(12)}`,
    borderRadius: clampVh(12),
});
