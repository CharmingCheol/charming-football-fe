import styled from "@emotion/styled";
import { calcVh } from "@/styles";

export const SuggestionKeywordList = styled.ul({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "white",
    border: "1px solid #e1e5e9",
    borderRadius: calcVh(8),
    boxShadow: `0 ${calcVh(4)} ${calcVh(12)} rgba(0, 0, 0, 0.15)`,
    maxHeight: calcVh(300),
    marginTop: calcVh(8),
});
