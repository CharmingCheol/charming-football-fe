import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { calcVh, colors } from "@/styles";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

export const Container = styled.article({
    display: "flex",
    gap: calcVh(4),
    padding: calcVh(16),
    backgroundColor: colors.black900,
    borderRadius: calcVh(16),
});

export const TeamCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcVh(16),
    flex: 1,
    padding: `${calcVh(32)} ${calcVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcVh(12),
});

export const TeamLogo = styled.img({
    width: calcVh(160),
    height: calcVh(160),
    objectFit: "contain",
});

export const TeamName = styled.h2({
    fontSize: calcVh(28),
    fontWeight: 800,
    color: colors.gray100,
    textAlign: "center",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
});

export const MatchInfoCard = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcVh(12),
    flex: 0.8,
    padding: `${calcVh(32)} ${calcVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: calcVh(12),
});

export const MatchTime = styled.span({
    fontSize: calcVh(36),
    fontWeight: 300,
    color: colors.gray100,
    letterSpacing: "0.02em",
});

export const LeagueName = styled.span({
    fontSize: calcVh(16),
    fontWeight: 600,
    color: colors.gray200,
    textAlign: "center",
    lineHeight: 1.4,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
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
    fontSize: calcVh(14),
    fontWeight: 500,
    color: colors.gray200,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
});

export const Stadium = styled.span({
    fontSize: calcVh(14),
    fontWeight: 400,
    color: colors.gray400,
    textAlign: "center",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
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
    fontSize: calcVh(20),
    fontWeight: 700,
    color: colors.gray100,
    textAlign: "center",
    margin: 0,
});

export const EmptyStateDescription = styled.p({
    fontSize: calcVh(14),
    fontWeight: 400,
    color: colors.gray400,
    textAlign: "center",
    margin: 0,
    lineHeight: 1.5,
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
