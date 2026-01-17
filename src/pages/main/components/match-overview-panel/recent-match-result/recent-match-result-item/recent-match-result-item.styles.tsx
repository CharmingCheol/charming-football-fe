import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const MatchItem = styled.li({
    display: "grid",
    gridTemplateColumns: `${clampVh(48)} ${clampVh(32)} ${clampVh(28)} 1fr auto ${clampVh(60)}`,
    flex: 1,
    alignItems: "center",
    gap: clampVh(12),
    padding: `${clampVh(12)} ${clampVh(20)}`,
    borderBottom: `1px solid ${colors.black600}`,
    "&:last-child": {
        borderBottom: "none",
    },
    "&:hover": {
        backgroundColor: colors.black600,
        cursor: "pointer",
    },
    "@media (max-width: 768px)": {
        gridTemplateColumns: `${clampVh(40)} ${clampVh(28)} ${clampVh(24)} 1fr auto ${clampVh(50)}`,
        gap: clampVh(8),
        padding: `${clampVh(10)} ${clampVh(12)}`,
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
    width: clampVh(24),
    height: clampVh(24),
    objectFit: "contain",
    "@media (max-width: 768px)": {
        width: clampVh(20),
        height: clampVh(20),
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
    width: clampVh(10),
    height: clampVh(10),
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
