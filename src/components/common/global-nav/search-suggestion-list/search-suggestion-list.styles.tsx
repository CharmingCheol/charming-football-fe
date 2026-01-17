import styled from "@emotion/styled";
import { clampVh, colors } from "@/styles";

export const SearchSuggestionList = styled.ul({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: colors.gray100,
    borderRadius: clampVh(8),
    maxHeight: clampVh(300),
    marginTop: clampVh(8),
});
