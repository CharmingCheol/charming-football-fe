import styled from "@emotion/styled";
import { colors, calcRem, typography } from "@/styles";

export const GlobalNavContainer = styled.header({
    display: "flex",
    justifyContent: "space-between",
    padding: `${calcRem(12)} ${calcRem(20)}`,
    borderBottom: `1px solid ${colors.gray900}`,
});

export const NavSection = styled.section({
    display: "flex",
    alignItems: "center",
});

export const LogoFigure = styled.figure({
    width: calcRem(80),
    height: calcRem(80),

    "& img": {
        width: "100%",
        height: "100%",
    },
});

export const NavList = styled.nav({
    marginLeft: calcRem(16),

    "& a": {
        ...typography.h4,
        textDecoration: "none",

        "&:not(:last-child)": {
            marginRight: calcRem(20),
        },
    },
});

export const InputSection = styled.section({
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: calcRem(480),
});
