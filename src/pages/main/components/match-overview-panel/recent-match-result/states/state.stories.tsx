import type { Meta, StoryObj } from "@storybook/react-vite";
import SkeletonState from "./skeleton-state/skeleton-state";
import ErrorState from "./error-state/error-state";

const meta: Meta = {
    title: "pages/main/match-overview-panel/recent-match-result/states",
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => {
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
};

export default meta;

export const Skeleton: StoryObj = {
    render: () => <SkeletonState />,
};

export const Error: StoryObj = {
    render: () => <ErrorState onRetry={() => console.log("Retry clicked")} />,
};
