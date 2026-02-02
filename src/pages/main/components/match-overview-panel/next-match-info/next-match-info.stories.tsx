import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { MANCHESTER_UNITED } from "@/constants/team";
import Builder from "@/test/builder";
import NextMatchInfo from "./next-match-info";
import SkeletonUI from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";
import ErrorState from "./error-state/error-state";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";

const meta: Meta = {
    title: "pages/main/match-overview-panel/next-match-info",
    component: NextMatchInfo,
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
                <MemoryRouter>
                    <div style={{ width: "min(700px, 90vw)" }}>
                        <Story />
                    </div>
                </MemoryRouter>
            );
        },
    ],
};

export default meta;

export const 로딩중: StoryObj = {
    render: () => <SkeletonUI />,
};

export const 데이터_로딩_성공: StoryObj = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: "2026-02-02T13:00:00+00:00",
                            venue: { name: "Old Trafford", city: "Manchester" },
                            status: { short: "NS" },
                        },
                        league: { name: "Premier League" },
                        goals: { home: null, away: null },
                        teams: {
                            home: {
                                id: MANCHESTER_UNITED,
                                name: "Manchester United",
                                logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                            },
                            away: {
                                id: 40,
                                name: "Liverpool",
                                logo: "https://media.api-sports.io/football/teams/40.png",
                            },
                        },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return <Story />;
        },
    ],
    render: () => <NextMatchInfo />,
};

export const 데이터_없음: StoryObj = {
    render: () => <EmptyState />,
};

export const API_에러: StoryObj = {
    render: () => <ErrorState />,
};
