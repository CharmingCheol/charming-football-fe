import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";
import MatchOverviewPanel from "./match-overview-panel";
import useMatchOverviewPanelStore, { initState } from "./match-overview-panel.store";

const meta: Meta<typeof MatchOverviewPanel> = {
    title: "pages/main/match-overview-panel",
    component: MatchOverviewPanel,
    decorators: [
        (Story) => {
            useEffect(() => {
                return () => {
                    useMatchOverviewPanelStore.setState(initState);
                };
            }, []);
            return (
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            );
        },
    ],
};

export default meta;

export const Default: StoryObj<typeof MatchOverviewPanel> = {
    render: () => <MatchOverviewPanel />,
};
