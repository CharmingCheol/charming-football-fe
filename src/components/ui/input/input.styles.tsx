import styled from "@emotion/styled";
import { colors, clampVh, typography } from "@/styles";

export const Input = styled.input({
    width: "100%",
    height: clampVh(44),
    padding: `0 ${clampVh(12)}`,
    border: `1px solid ${colors.gray500}`,
    borderRadius: clampVh(8),
    background: colors.black900,
    outline: "none",
    ...typography.p3,

    "&:focus": {
        border: `1px solid ${colors.gray300}`,
    },
});
