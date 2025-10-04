import styled from "@emotion/styled";
import { colors, calcVh, typography } from "@/styles";

export const GlobalNavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${calcVh(12)} ${calcVh(20)};
    border-bottom: 1px solid ${colors.gray[900]};

    section {
        display: flex;
        align-items: center;

        &.nav-section {
            figure {
                width: ${calcVh(80)};
                height: ${calcVh(80)};

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            nav {
                margin-left: ${calcVh(16)};

                a {
                    ${typography.h4}
                    text-decoration: none;

                    &:not(:last-child) {
                        margin-right: ${calcVh(20)};
                    }
                }
            }
        }

        &.input-section {
            width: ${calcVh(480)};
        }
    }
`;
