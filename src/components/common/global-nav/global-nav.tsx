import Image from "next/image";
import Link from "next/link";

import styles from "./global-nav.module.scss";

import classNames from "classnames/bind";
import SearchInput from "./search-input/search-input";

const cx = classNames.bind(styles);

export default function GlobalNav() {
    return (
        <header className={cx("global-nav")}>
            <section className={cx("nav-section")}>
                <figure>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="로고" width={80} height={80} layout="responsive" />
                    </Link>
                </figure>
                <nav>
                    <Link href="/matches">일정</Link>
                    <Link href="/tables">순위</Link>
                </nav>
            </section>
            <section className={cx("input-section")}>
                <SearchInput />
            </section>
        </header>
    );
}
