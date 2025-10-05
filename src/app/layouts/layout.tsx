import GlobalNav from "@/components/common/global-nav/global-nav";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./layout.styles";

const Layout = () => {
    return (
        <>
            <GlobalStyles />
            <GlobalNav />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
