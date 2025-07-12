import Image from "next/image";
import Link from "next/link";

import Input from "@/components/ui/input/input";

import classNames from "classnames/bind";
import styles from "./global-nav.module.scss";

const cx = classNames.bind(styles);

export default function GlobalNav() {
    return (
        <header className={cx("global-nav")}>
            <section className={cx("nav-section")}>
                <Link href="/">
                    <figure>
                        <Image src="/images/logo.png" alt="로고" width={80} height={80} layout="responsive" />
                    </figure>
                </Link>
                <nav>
                    <Link href="/matches">일정</Link>
                    <Link href="/tables">순위</Link>
                </nav>
            </section>
            <section className={cx("input-section")}>
                <Input placeholder="팀이나 선수 이름을 입력해 주세요." />
            </section>
        </header>
    );
}
