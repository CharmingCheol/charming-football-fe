import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { clampVh, colors } from "@/styles";

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
    borderRadius: clampVh(4),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
};

export const Header = styled.div({
    ...skeletonBase,
    width: clampVh(180),
    height: clampVh(16),
});

export const SkeletonItem = styled.li({
    display: "grid",
    gridTemplateColumns: `${clampVh(48)} ${clampVh(32)} ${clampVh(28)} 1fr auto ${clampVh(60)}`,
    alignItems: "center",
    gap: clampVh(12),
    padding: `${clampVh(12)} ${clampVh(20)}`,
    borderBottom: `1px solid ${colors.black600}`,
    "&:last-child": {
        borderBottom: "none",
    },
    "@media (max-width: 768px)": {
        gridTemplateColumns: `${clampVh(40)} ${clampVh(28)} ${clampVh(24)} 1fr auto ${clampVh(50)}`,
        gap: clampVh(8),
        padding: `${clampVh(10)} ${clampVh(12)}`,
    },
});

export const MatchDate = styled.div({
    ...skeletonBase,
    width: clampVh(40),
    height: clampVh(16),
});

export const VenueType = styled.div({
    ...skeletonBase,
    width: clampVh(20),
    height: clampVh(14),
    margin: "0 auto",
});

export const TeamLogo = styled.div({
    ...skeletonBase,
    width: clampVh(24),
    height: clampVh(24),
    borderRadius: "50%",
    "@media (max-width: 768px)": {
        width: clampVh(20),
        height: clampVh(20),
    },
});

export const TeamName = styled.div({
    ...skeletonBase,
    width: "60%",
    height: clampVh(16),
});

export const ResultIndicator = styled.div({
    ...skeletonBase,
    width: clampVh(10),
    height: clampVh(10),
    borderRadius: "50%",
});

export const Score = styled.div({
    ...skeletonBase,
    width: clampVh(50),
    height: clampVh(16),
    marginLeft: "auto",
});
