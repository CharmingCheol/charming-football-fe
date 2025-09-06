import { Link } from "react-router-dom";

import styles from "./global-nav.module.scss";

import classNames from "classnames/bind";
import SearchInput from "./search-input/search-input";

const cx = classNames.bind(styles);

export default function GlobalNav() {
    return (
        <header className={cx("global-nav")}>
            <section className={cx("nav-section")}>
                <figure>
                    <Link to="/">
                        <img src="/images/logo.png" alt="로고" />
                    </Link>
                </figure>
                <nav>
                    <Link to="/matches">일정</Link>
                    <Link to="/tables">순위</Link>
                </nav>
            </section>
            <section className={cx("input-section")}>
                <SearchInput />
            </section>
        </header>
    );
}
