import styled from "@emotion/styled";
import { calcVh, colors, typography } from "@/styles";

export const SuggestionKeyword = styled.li({
    padding: `${calcVh(12)} ${calcVh(16)}`,
    cursor: "pointer",
    borderBottom: `1px solid ${colors.gray[200]}`,

    "&:last-child": {
        borderBottom: "none",
    },

    "&:hover, &.selected": {
        backgroundColor: colors.gray[100],
    },

    "& .content": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export const HighlightedText = styled.span({
    ...typography.p4,
    color: colors.black[900],
});

export const TypeLabel = styled.span({
    ...typography.p4,
    backgroundColor: colors.gray[400],
    padding: `${calcVh(4)} ${calcVh(12)}`,
    borderRadius: calcVh(12),
});
