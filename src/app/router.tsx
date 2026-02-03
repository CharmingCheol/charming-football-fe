import { createBrowserRouter } from "react-router-dom";
import MainPage from "@/pages/main";
import Layout from "./layouts/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{ path: "/", element: <MainPage /> }],
    },
]);

export default router;
