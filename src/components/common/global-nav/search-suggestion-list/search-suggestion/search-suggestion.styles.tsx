import styled from "@emotion/styled";
import { calcRem, colors, typography } from "@/styles";

export const SearchSuggestion = styled.li<{ focused: boolean }>((props) => ({
    padding: `${calcRem(12)} ${calcRem(16)}`,
    cursor: "pointer",
    borderBottom: `1px solid ${colors.gray200}`,
    borderRadius: calcRem(8),
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
    padding: `${calcRem(4)} ${calcRem(12)}`,
    borderRadius: calcRem(12),
});
