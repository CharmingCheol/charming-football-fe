import styled from "@emotion/styled";
import { clampVh } from "@/styles";

export const Container = styled.section({
    display: "flex",
    gap: clampVh(16),
    padding: clampVh(24),
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
