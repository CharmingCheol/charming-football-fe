import type { Meta, StoryObj } from "@storybook/react-vite";
import SkeletonState from "./skeleton-state/skeleton-state";
import EmptyState from "./empty-state/empty-state";
import ErrorState from "./error-state/error-state";

const meta: Meta = {
    title: "pages/main/match-overview-panel/next-match-info/states",
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

export const 스켈레톤: StoryObj = {
    render: () => <SkeletonState />,
};

export const 빈상태: StoryObj = {
    render: () => <EmptyState />,
};

export const 에러: StoryObj = {
    render: () => <ErrorState onRetry={() => console.log("Retry clicked")} />,
};
