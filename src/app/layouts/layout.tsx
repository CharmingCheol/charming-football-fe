import GlobalNav from "@/components/common/global-nav/global-nav";
import { Outlet } from "react-router-dom";

import "./layout.scss";

const Layout = () => {
    return (
        <>
            <GlobalNav />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
