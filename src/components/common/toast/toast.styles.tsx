import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { calcRem, colors } from "@/styles";

export const ToastContainer = styled.div`
    position: fixed;
    top: ${calcRem(120)};
    right: ${calcRem(20)};
    z-index: 9999;
    display: flex;
    flex-direction: column;
`;

export const ToastItem = styled.div`
    background: ${colors.red500};
    color: ${colors.gray100};
    padding: ${calcRem(8)} ${calcRem(12)};
    border-radius: ${calcRem(8)};
    min-width: ${calcRem(300)};
    display: flex;
    align-items: center;
    margin-bottom: ${calcRem(12)};
    animation: ${keyframes`
        from {
            transform: translateX(${calcRem(400)});
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    `} 0.3s ease-out;
`;
