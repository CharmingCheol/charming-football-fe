import styled from "@emotion/styled";
import { colors, calcVh, typography } from "@/styles";

export const GlobalNavContainer = styled.header({
    display: "flex",
    justifyContent: "space-between",
    padding: `${calcVh(12)} ${calcVh(20)}`,
    borderBottom: `1px solid ${colors.gray900}`,
});

export const NavSection = styled.section({
    display: "flex",
    alignItems: "center",
});

export const LogoFigure = styled.figure({
    width: calcVh(80),
    height: calcVh(80),

    "& img": {
        width: "100%",
        height: "100%",
    },
});

export const NavList = styled.nav({
    marginLeft: calcVh(16),

    "& a": {
        ...typography.h4,
        textDecoration: "none",

        "&:not(:last-child)": {
            marginRight: calcVh(20),
        },
    },
});

export const InputSection = styled.section({
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: calcVh(480),
});
