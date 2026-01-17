import styled from "@emotion/styled";
import { colors, clampVh, typography } from "@/styles";

export const GlobalNavContainer = styled.header({
    display: "flex",
    justifyContent: "space-between",
    padding: `${clampVh(12)} ${clampVh(20)}`,
    borderBottom: `1px solid ${colors.gray900}`,
});

export const NavSection = styled.section({
    display: "flex",
    alignItems: "center",
});

export const LogoFigure = styled.figure({
    width: clampVh(80),
    height: clampVh(80),

    "& img": {
        width: "100%",
        height: "100%",
    },
});

export const NavList = styled.nav({
    marginLeft: clampVh(16),

    "& a": {
        ...typography.h4,
        textDecoration: "none",

        "&:not(:last-child)": {
            marginRight: clampVh(20),
        },
    },
});

export const InputSection = styled.section({
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: clampVh(480),
});
