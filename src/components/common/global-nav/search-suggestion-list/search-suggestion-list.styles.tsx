import styled from "@emotion/styled";
import { calcVh, colors } from "@/styles";

export const SearchSuggestionList = styled.ul({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: colors.gray100,
    borderRadius: calcVh(8),
    maxHeight: calcVh(300),
    marginTop: calcVh(8),
});
