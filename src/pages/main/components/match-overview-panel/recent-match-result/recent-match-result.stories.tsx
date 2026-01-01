import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse, delay } from "msw";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { getRecentMatchesApi } from "@/apis/teams";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";
import RecentMatchResult from "./recent-match-result";

const meta: Meta<typeof RecentMatchResult> = {
    title: "pages/main/match-overview-panel/recent-match-result",
    component: RecentMatchResult,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => {
            useEffect(() => {
                return () => {
                    useMatchOverviewPanelStore.setState(initState);
                };
            }, []);
            return (
                <BrowserRouter>
                    <div style={{ width: "min(700px, 90vw)" }}>
                        <Story />
                    </div>
                </BrowserRouter>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof RecentMatchResult>;

export const 기본: Story = {
    render: () => <RecentMatchResult />,
};

export const 로딩중: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getRecentMatchesApi.path}`, async () => {
                    await delay("infinite");
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
    render: () => <RecentMatchResult />,
};

export const 경기_정보_없음: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getRecentMatchesApi.path}`, () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
    render: () => <RecentMatchResult />,
};
