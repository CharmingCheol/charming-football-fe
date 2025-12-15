import styled from "@emotion/styled";
import { calcRem, colors, typography } from "@/styles";

export const Container = styled.article({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: calcRem(16),
    padding: `${calcRem(48)} ${calcRem(24)}`,
    backgroundColor: colors.black900,
    borderRadius: calcRem(16),
    minHeight: calcRem(280),
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
