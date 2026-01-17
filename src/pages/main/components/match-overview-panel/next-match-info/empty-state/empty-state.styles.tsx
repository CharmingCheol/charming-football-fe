import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const Container = styled.article({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(16),
    backgroundColor: colors.black900,
    borderRadius: clampVh(16),
    minHeight: clampVh(274),
    border: `1px solid ${colors.black600}`,
});

export const Title = styled.h3({
    ...typography.h7,
    margin: 0,
});

export const Description = styled.p({
    ...typography.p4,
    color: colors.gray400,
    margin: 0,
});
