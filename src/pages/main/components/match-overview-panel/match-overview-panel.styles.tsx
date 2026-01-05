import styled from "@emotion/styled";
import { calcRem } from "@/styles";

export const Container = styled.section({
    display: "flex",
    gap: calcRem(16),
    padding: calcRem(24),
});

export const NextMatchInfoWrapper = styled.article`
    flex: 5;
`;

export const RecentMatchResultWrapper = styled.article`
    flex: 3;
`;

export const Div3 = styled.article`
    flex: 2;
`;
