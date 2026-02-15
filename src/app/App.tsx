import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./error-boundary";
import router from "./router";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorProvider>
                <RouterProvider router={router} />
            </ErrorProvider>
        </QueryClientProvider>
    );
};

export default App;
