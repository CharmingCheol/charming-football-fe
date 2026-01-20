import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const Container = styled.article({
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    gap: clampVh(4),
    backgroundColor: colors.black900,
    borderRadius: clampVh(16),
    "@media (max-width: 768px)": {
        flexWrap: "wrap",
    },
});

export const TeamCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(16),
    flex: 1,
    minWidth: 0,
    padding: `${clampVh(32)} ${clampVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: clampVh(12),
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
        flex: "0 0 calc(50% - 0.125rem)",
    },
});

export const TeamLogo = styled.img({
    width: clampVh(120),
    height: clampVh(120),
    objectFit: "contain",
    "@media (max-width: 768px)": {
        width: clampVh(60),
        height: clampVh(60),
    },
});

export const TeamName = styled.span({
    ...typography.h6,
    width: "100%",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
    "@media (max-width: 768px)": {
        ...typography.h7,
    },
});

export const MatchInfoCard = styled.div({
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

export const LeagueName = styled.span({
    ...typography.p4,
    color: colors.gray200,
});

export const Divider = styled.div({
    width: "100%",
    height: 1,
    backgroundColor: colors.black500,
    margin: `${clampVh(8)} 0`,
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
