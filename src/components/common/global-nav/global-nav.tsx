import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

import SearchInput from "./search-input/search-input";
import * as Styles from "./global-nav.styles";

export default function GlobalNav() {
    return (
        <Styles.GlobalNavContainer>
            <section className="nav-section">
                <figure>
                    <Link to="/">
                        <img src={logo} alt="로고" />
                    </Link>
                </figure>
                <nav>
                    <Link to="/matches">일정</Link>
                    <Link to="/tables">순위</Link>
                </nav>
            </section>
            <section className="input-section">
                <SearchInput />
            </section>
        </Styles.GlobalNavContainer>
    );
}
