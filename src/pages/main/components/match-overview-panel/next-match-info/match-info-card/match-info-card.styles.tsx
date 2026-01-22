import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(12),
    flex: 2,
    minWidth: 0,
    padding: `${clampVh(32)} ${clampVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: clampVh(12),

    "@media (max-width: 768px)": {
        order: -1,
        flex: "1 1 100%",
    },
});

export const MatchStatus = styled.span<{ isLive?: boolean }>(({ isLive }) => ({
    ...typography.h9,
    padding: `${clampVh(6)} ${clampVh(12)}`,
    borderRadius: clampVh(4),
    backgroundColor: isLive ? `${colors.red400}` : colors.black600,
}));

export const MatchTime = styled.span({
    ...typography.h7,
    whiteSpace: "nowrap",
});

export const ElapsedTime = styled.span({
    ...typography.h8,
    color: colors.red400,
    fontWeight: 700,
});

export const ScoreWrapper = styled.div({
    display: "flex",
    alignItems: "center",
    gap: clampVh(16),
});

export const Score = styled.span({
    ...typography.h1,
    fontWeight: 700,
    fontSize: clampVh(48),
    lineHeight: 1,
});

export const ScoreDivider = styled.span({
    ...typography.h3,
    color: colors.gray400,
});

export const LeagueName = styled.span({
    ...typography.p4,
    color: colors.gray200,
});

export const VenueInfo = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: clampVh(4),
});

export const City = styled.span({
    ...typography.h9,
    color: colors.gray200,
});

export const Stadium = styled.span({
    ...typography.p4,
    color: colors.gray400,
});
