import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { calcVh, colors } from "@/styles";

export const ToastContainer = styled.div`
    position: fixed;
    top: ${calcVh(120)};
    right: ${calcVh(20)};
    z-index: 9999;
    display: flex;
    flex-direction: column;
`;

export const ToastItem = styled.div`
    background: ${colors.red500};
    color: ${colors.gray100};
    padding: ${calcVh(8)} ${calcVh(12)};
    border-radius: ${calcVh(8)};
    min-width: ${calcVh(300)};
    display: flex;
    align-items: center;
    margin-bottom: ${calcVh(12)};
    animation: ${keyframes`
        from {
            transform: translateX(${calcVh(400)});
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    `} 0.3s ease-out;
`;
