import styled from "@emotion/styled";
import { calcRem, colors } from "@/styles";

export const SearchSuggestionList = styled.ul({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: colors.gray100,
    borderRadius: calcRem(8),
    maxHeight: calcRem(300),
    marginTop: calcRem(8),
});
