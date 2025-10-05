import { colors } from "@/styles";
import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
    <Global
        styles={css({
            "*": {
                padding: 0,
                margin: 0,
            },

            body: {
                backgroundColor: colors.black[900],
            },

            a: {
                textDecoration: "none",
            },
        })}
    />
);
