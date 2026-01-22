import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const Container = styled.article({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(16),
    backgroundColor: colors.black900,
    borderRadius: clampVh(16),
    minHeight: clampVh(274),
    border: `1px solid ${colors.black600}`,
});

export const Title = styled.h3({
    ...typography.h7,
    margin: 0,
    color: colors.red200,
});

export const Description = styled.p({
    ...typography.p4,
    color: colors.gray400,
    margin: 0,
});

export const RetryButton = styled.button({
    ...typography.h9,
    marginTop: clampVh(8),
    padding: `${clampVh(10)} ${clampVh(20)}`,
    backgroundColor: colors.black700,
    color: colors.gray200,
    border: `1px solid ${colors.black600}`,
    borderRadius: clampVh(8),
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
        backgroundColor: colors.black600,
        borderColor: colors.black500,
    },

    "&:active": {
        transform: "scale(0.98)",
    },
});
