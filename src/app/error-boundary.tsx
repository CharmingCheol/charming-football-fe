import type { ReactNode } from "react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HttpError } from "@/constants/errors";
import { useToastStore } from "@/components/common/toast/toast.store";

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const handleRejection = (event: PromiseRejectionEvent) => {
            if (import.meta.env.PROD) {
                event.preventDefault();
                // Sentry? Datadog?
            }

            const error = event.reason;
            if (error instanceof HttpError) {
                useToastStore.getState().add(error.message);
                return;
            }
            if (error instanceof Error) {
                useToastStore.getState().add("예상치 못한 오류가 발생했습니다");
                return;
            }
        };

        window.addEventListener("unhandledrejection", handleRejection);
        return () => window.removeEventListener("unhandledrejection", handleRejection);
    }, []);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={() => {
                if (import.meta.env.PROD) {
                    // Sentry? Datadog?
                }
            }}
        >
            {children}
        </ErrorBoundary>
    );
};

const ErrorFallback = () => {
    return <div>ErrorFallback</div>;
};
