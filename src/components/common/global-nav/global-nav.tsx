import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import SearchInput from "./search-input/search-input";
import * as S from "./global-nav.styles";

const GlobalNav = () => {
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
            </S.InputSection>
        </S.GlobalNavContainer>
    );
};

export default GlobalNav;
