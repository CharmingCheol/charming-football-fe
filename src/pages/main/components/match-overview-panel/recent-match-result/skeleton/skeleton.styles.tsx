import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { calcRem, colors } from "@/styles";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

const skeletonBase = {
    background: `linear-gradient(90deg, ${colors.black600} 25%, ${colors.black500} 50%, ${colors.black600} 75%)`,
    backgroundSize: "200% 100%",
    borderRadius: calcRem(4),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
};

export const Header = styled.div({
    ...skeletonBase,
    width: calcRem(180),
    height: calcRem(16),
});

export const SkeletonItem = styled.li({
    display: "grid",
    gridTemplateColumns: `${calcRem(48)} ${calcRem(32)} ${calcRem(28)} 1fr auto ${calcRem(60)}`,
    alignItems: "center",
    gap: calcRem(12),
    padding: `${calcRem(12)} ${calcRem(20)}`,
    borderBottom: `1px solid ${colors.black600}`,
    "&:last-child": {
        borderBottom: "none",
    },
    "@media (max-width: 768px)": {
        gridTemplateColumns: `${calcRem(40)} ${calcRem(28)} ${calcRem(24)} 1fr auto ${calcRem(50)}`,
        gap: calcRem(8),
        padding: `${calcRem(10)} ${calcRem(12)}`,
    },
});

export const MatchDate = styled.div({
    ...skeletonBase,
    width: calcRem(40),
    height: calcRem(16),
});

export const VenueType = styled.div({
    ...skeletonBase,
    width: calcRem(20),
    height: calcRem(14),
    margin: "0 auto",
});

export const TeamLogo = styled.div({
    ...skeletonBase,
    width: calcRem(24),
    height: calcRem(24),
    borderRadius: "50%",
    "@media (max-width: 768px)": {
        width: calcRem(20),
        height: calcRem(20),
    },
});

export const TeamName = styled.div({
    ...skeletonBase,
    width: "60%",
    height: calcRem(16),
});

export const ResultIndicator = styled.div({
    ...skeletonBase,
    width: calcRem(10),
    height: calcRem(10),
    borderRadius: "50%",
});

export const Score = styled.div({
    ...skeletonBase,
    width: calcRem(50),
    height: calcRem(16),
    marginLeft: "auto",
});
