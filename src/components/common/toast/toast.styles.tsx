import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { clampVh, colors } from "@/styles";

export const ToastContainer = styled.div`
    position: fixed;
    top: ${clampVh(120)};
    right: ${clampVh(20)};
    z-index: 9999;
    display: flex;
    flex-direction: column;
`;

export const ToastItem = styled.div`
    background: ${colors.red500};
    color: ${colors.gray100};
    padding: ${clampVh(8)} ${clampVh(12)};
    border-radius: ${clampVh(8)};
    min-width: ${clampVh(300)};
    display: flex;
    align-items: center;
    margin-bottom: ${clampVh(12)};
    animation: ${keyframes`
        from {
            transform: translateX(${clampVh(400)});
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    `} 0.3s ease-out;
`;
