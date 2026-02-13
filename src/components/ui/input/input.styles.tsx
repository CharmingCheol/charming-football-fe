import styled from "@emotion/styled";
import { colors, calcVh, typography } from "@/styles";

export const Input = styled.input({
    width: "100%",
    height: calcVh(44),
    padding: `0 ${calcVh(12)}`,
    border: `1px solid ${colors.gray500}`,
    borderRadius: calcVh(8),
    background: colors.black900,
    outline: "none",
    ...typography.p3,

    "&:focus": {
        border: `1px solid ${colors.gray300}`,
    },
});
