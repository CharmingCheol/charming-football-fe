import { colors } from "@/styles";
import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
    <Global
        styles={css`
            * {
                padding: 0;
                margin: 0;
            }

            body {
                background-color: ${colors.black[900]};
            }

            a {
                text-decoration: none;
            }
        `}
    />
);
