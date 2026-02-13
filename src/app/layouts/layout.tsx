import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./layout.styles";

const Layout = () => {
    return (
        <>
            <GlobalStyles />
            <Outlet />
        </>
    );
};

export default Layout;
