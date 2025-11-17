import { RouterProvider } from "react-router-dom";
import Toast from "@/components/common/toast/toast";
import { ErrorProvider } from "./error-boundary";
import router from "./router";

const App = () => {
    return (
        <ErrorProvider>
            <RouterProvider router={router} />
            <Toast />
        </ErrorProvider>
    );
};

export default App;
