import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const ErrorContent = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(16),
    // 기본 상태 아이템 5개 높이와 동일하게 맞춤 (48px * 5 + border 4px)
    minHeight: clampVh(244),
    padding: `${clampVh(20)}`,
    textAlign: "center",
});

export const ErrorMessage = styled.p({
    ...typography.p4,
    color: colors.gray400,
    margin: 0,
});

export const RetryButton = styled.button({
    ...typography.p5,
    display: "flex",
    alignItems: "center",
    gap: clampVh(6),
    padding: `${clampVh(10)} ${clampVh(20)}`,
    backgroundColor: colors.black500,
    color: colors.gray200,
    border: `1px solid ${colors.black400}`,
    borderRadius: clampVh(8),
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
        backgroundColor: colors.black400,
        borderColor: colors.gray600,
    },

    "&:active": {
        transform: "scale(0.98)",
    },
});

