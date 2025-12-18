import { createBrowserRouter } from "react-router-dom";
import MainPage from "@/pages/main";
import TeamPage from "@/pages/team/team";
import Layout from "./layouts/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/team/:id", element: <TeamPage /> },
        ],
    },
]);

export default router;
