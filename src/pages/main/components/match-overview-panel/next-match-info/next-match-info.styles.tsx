import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { calcVh, colors, typography } from "@/styles";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

export const Container = styled.article({
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    gap: calcVh(4),
    padding: calcVh(16),
    backgroundColor: colors.black900,
    borderRadius: calcVh(16),
    "@media (max-width: 480px)": {
        flexWrap: "wrap",
    },
});

export const TeamCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcVh(16),
    flex: 1,
    minWidth: 0,
    padding: `${calcVh(32)} ${calcVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcVh(12),
    boxSizing: "border-box",
    "@media (max-width: 480px)": {
        flex: "0 0 calc(50% - 0.125rem)",
    },
});

export const TeamLogo = styled.img({
    width: calcVh(120),
    height: calcVh(120),
    objectFit: "contain",
    "@media (max-width: 768px)": {
        width: calcVh(60),
        height: calcVh(60),
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
    gap: calcVh(12),
    flex: 1,
    minWidth: 0,
    padding: `${calcVh(32)} ${calcVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcVh(12),
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
    padding: `${calcVh(6)} ${calcVh(12)}`,
    borderRadius: calcVh(4),
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
    margin: `${calcVh(8)} 0`,
});

export const VenueInfo = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: calcVh(4),
});

export const City = styled.span({
    ...typography.h9,
    color: colors.gray200,
});

export const Stadium = styled.span({
    ...typography.p4,
    color: colors.gray400,
});

// Empty State UI
export const EmptyStateContainer = styled.article({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcVh(16),
    padding: `${calcVh(48)} ${calcVh(24)}`,
    backgroundColor: colors.black900,
    borderRadius: calcVh(16),
    minHeight: calcVh(280),
    border: `1px solid ${colors.black600}`,
});

export const EmptyStateTitle = styled.h3({
    ...typography.h7,
    margin: 0,
});

export const EmptyStateDescription = styled.p({
    ...typography.p4,
    color: colors.gray400,
    margin: 0,
});

// Skeleton UI
const skeletonBase = {
    background: `linear-gradient(90deg, ${colors.black600} 25%, ${colors.black500} 50%, ${colors.black600} 75%)`,
    backgroundSize: "200% 100%",
    borderRadius: calcVh(8),
};

export const SkeletonTeamLogo = styled.div({
    ...skeletonBase,
    width: calcVh(160),
    height: calcVh(160),
    borderRadius: "50%",
    animation: `${shimmer} 1.5s infinite ease-in-out`,
    "@media (max-width: 768px)": {
        width: calcVh(60),
        height: calcVh(60),
    },
});

export const SkeletonTeamName = styled.div({
    ...skeletonBase,
    width: calcVh(140),
    height: calcVh(34),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const SkeletonMatchTime = styled.div({
    ...skeletonBase,
    width: calcVh(180),
    height: calcVh(48),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const SkeletonLeagueName = styled.div({
    ...skeletonBase,
    width: calcVh(120),
    height: calcVh(44),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const SkeletonVenue = styled.div({
    ...skeletonBase,
    width: calcVh(100),
    height: calcVh(18),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});
