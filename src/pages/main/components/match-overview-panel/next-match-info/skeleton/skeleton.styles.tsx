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
    borderRadius: calcRem(8),
};

export const TeamLogo = styled.div({
    ...skeletonBase,
    width: calcRem(160),
    height: calcRem(160),
    borderRadius: "50%",
    animation: `${shimmer} 1.5s infinite ease-in-out`,
    "@media (max-width: 768px)": {
        width: calcRem(60),
        height: calcRem(60),
    },
});

export const TeamName = styled.div({
    ...skeletonBase,
    width: calcRem(120),
    height: calcRem(34),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const MatchTime = styled.div({
    ...skeletonBase,
    width: calcRem(180),
    height: calcRem(48),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const LeagueName = styled.div({
    ...skeletonBase,
    width: calcRem(120),
    height: calcRem(44),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});

export const Venue = styled.div({
    ...skeletonBase,
    width: calcRem(100),
    height: calcRem(18),
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});
