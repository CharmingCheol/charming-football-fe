import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import SearchInput from "./search-input/search-input";
import SuggestionKeywordList from "./suggestion-keyword-list/suggestion-keyword-list";
import useSearchInputStore from "./search-input.store";
import * as S from "./global-nav.styles";

const GlobalNav = () => {
    const searchSuggestionList = useSearchInputStore((state) => state.searchSuggestionList);
    const inputFocused = useSearchInputStore((state) => state.inputFocused);
    const query = useSearchInputStore((state) => state.query);

    return (
        <S.GlobalNavContainer>
            <S.NavSection>
                <S.LogoFigure>
                    <Link to="/">
                        <img src={logo} alt="로고" />
                    </Link>
                </S.LogoFigure>
                <S.NavList>
                    <Link to="/matches">일정</Link>
                    <Link to="/tables">순위</Link>
                </S.NavList>
            </S.NavSection>
            <S.InputSection>
                <SearchInput />
                {searchSuggestionList.length > 0 && inputFocused && <SuggestionKeywordList query={query} />}
            </S.InputSection>
        </S.GlobalNavContainer>
    );
};

export default GlobalNav;
