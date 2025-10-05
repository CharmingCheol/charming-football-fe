import styled from "@emotion/styled";
import { colors, calcVh, typography } from "@/styles";

export const GlobalNavContainer = styled.header({
    display: "flex",
    justifyContent: "space-between",
    padding: `${calcVh(12)} ${calcVh(20)}`,
    borderBottom: `1px solid ${colors.gray[900]}`,

    "& section": {
        display: "flex",
        alignItems: "center",

        "&.nav-section": {
            "& figure": {
                width: calcVh(80),
                height: calcVh(80),

                "& img": {
                    width: "100%",
                    height: "100%",
                },
            },

            "& nav": {
                marginLeft: calcVh(16),

                "& a": {
                    ...typography.h4,
                    textDecoration: "none",

                    "&:not(:last-child)": {
                        marginRight: calcVh(20),
                    },
                },
            },
        },

        "&.input-section": {
            width: calcVh(480),
        },
    },
});
