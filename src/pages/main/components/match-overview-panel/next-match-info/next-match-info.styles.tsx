import styled from "@emotion/styled";
import { clampVh, colors } from "@/styles";

export const Container = styled.article({
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: clampVh(4),
    backgroundColor: colors.black900,
    borderRadius: clampVh(16),
});

export const TeamCardsWrapper = styled.div({
    display: "flex",
    gap: clampVh(4),
});
