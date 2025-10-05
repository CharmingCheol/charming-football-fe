import styled from "@emotion/styled";
import { calcVh } from "@/styles";

export const SuggestionKeywordList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: ${calcVh(8)};
    box-shadow: 0 ${calcVh(4)} ${calcVh(12)} rgba(0, 0, 0, 0.15);
    z-index: 1000;
    max-height: ${calcVh(300)};
    overflow-y: auto;
    margin-top: ${calcVh(8)};
`;
