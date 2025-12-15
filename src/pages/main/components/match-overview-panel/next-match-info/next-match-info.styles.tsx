import styled from "@emotion/styled";
import { calcRem, colors, typography } from "@/styles";

export const Container = styled.article({
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    gap: calcRem(4),
    padding: calcRem(16),
    backgroundColor: colors.black900,
    borderRadius: calcRem(16),
    "@media (max-width: 480px)": {
        flexWrap: "wrap",
    },
});

export const TeamCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcRem(16),
    flex: 1,
    minWidth: 0,
    padding: `${calcRem(32)} ${calcRem(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcRem(12),
    boxSizing: "border-box",
    "@media (max-width: 480px)": {
        flex: "0 0 calc(50% - 0.125rem)",
    },
});

export const TeamLogo = styled.img({
    width: calcRem(120),
    height: calcRem(120),
    objectFit: "contain",
    "@media (max-width: 768px)": {
        width: calcRem(60),
        height: calcRem(60),
    },
});

export const TeamName = styled.h2({
    ...typography.h6,
    width: "100%",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 768px)": {
        ...typography.h7,
    },
});

export const MatchInfoCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcRem(12),
    flex: 1,
    minWidth: 0,
    padding: `${calcRem(32)} ${calcRem(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcRem(12),
    "@media (max-width: 768px)": {
        flex: 2,
    },
    "@media (max-width: 480px)": {
        order: -1,
        flex: "1 1 100%",
    },
});

export const MatchStatus = styled.span<{ isLive?: boolean }>(({ isLive }) => ({
    ...typography.h9,
    padding: `${calcRem(6)} ${calcRem(12)}`,
    borderRadius: calcRem(4),
    backgroundColor: isLive ? `${colors.red400}` : colors.black600,
}));

export const MatchTime = styled.span({
    ...typography.h7,
    whiteSpace: "nowrap",
});

export const LeagueName = styled.span({
    ...typography.h9,
    color: colors.gray200,
});

export const Divider = styled.div({
    width: "100%",
    height: 1,
    backgroundColor: colors.black500,
    margin: `${calcRem(8)} 0`,
});

export const VenueInfo = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: calcRem(4),
});

export const City = styled.span({
    ...typography.h9,
    color: colors.gray200,
});

export const Stadium = styled.span({
    ...typography.p4,
    color: colors.gray400,
});
