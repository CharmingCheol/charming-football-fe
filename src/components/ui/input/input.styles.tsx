import styled from "@emotion/styled";
import { colors, calcRem, typography } from "@/styles";

export const Input = styled.input({
    width: "100%",
    height: calcRem(44),
    padding: `0 ${calcRem(12)}`,
    border: `1px solid ${colors.gray500}`,
    borderRadius: calcRem(8),
    background: colors.black900,
    outline: "none",
    ...typography.p3,

    "&:focus": {
        border: `1px solid ${colors.gray300}`,
    },
});
