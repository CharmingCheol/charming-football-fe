import styled from "@emotion/styled";
import { calcRem, colors, typography } from "@/styles";

export const MatchItem = styled.li({
    display: "grid",
    gridTemplateColumns: `${calcRem(48)} ${calcRem(32)} ${calcRem(28)} 1fr auto ${calcRem(60)}`,
    alignItems: "center",
    gap: calcRem(12),
    padding: `${calcRem(12)} ${calcRem(20)}`,
    borderBottom: `1px solid ${colors.black600}`,
    "&:last-child": {
        borderBottom: "none",
    },
    "&:hover": {
        backgroundColor: colors.black600,
        cursor: "pointer",
    },
    "@media (max-width: 768px)": {
        gridTemplateColumns: `${calcRem(40)} ${calcRem(28)} ${calcRem(24)} 1fr auto ${calcRem(50)}`,
        gap: calcRem(8),
        padding: `${calcRem(10)} ${calcRem(12)}`,
    },
});

export const MatchDate = styled.span({
    ...typography.p4,
    color: colors.gray400,
});

export const VenueType = styled.span({
    ...typography.p5,
    color: colors.gray400,
    textAlign: "center",
});

export const TeamLogo = styled.img({
    width: calcRem(24),
    height: calcRem(24),
    objectFit: "contain",
    "@media (max-width: 768px)": {
        width: calcRem(20),
        height: calcRem(20),
    },
});

export const TeamName = styled.span({
    ...typography.p4,
    color: colors.gray100,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const ResultIndicator = styled.span<{ result?: "win" | "draw" | "loss" | null }>(({ result }) => ({
    width: calcRem(10),
    height: calcRem(10),
    borderRadius: "50%",
    backgroundColor:
        result === "win"
            ? "#22c55e"
            : result === "draw"
            ? "#eab308"
            : result === "loss"
            ? colors.red400
            : "transparent",
}));

export const Score = styled.span<{ isHighlight?: boolean }>(({ isHighlight }) => ({
    ...typography.p4,
    color: isHighlight ? colors.gray100 : colors.gray400,
    textAlign: "right",
    whiteSpace: "nowrap",
}));
