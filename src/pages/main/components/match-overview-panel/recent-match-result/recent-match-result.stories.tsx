import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse } from "msw";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { getRecentMatchesApi } from "@/apis/teams";
import Builder from "@/test/builder";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";
import RecentMatchResult from "./recent-match-result";
import Skeleton from "./skeleton/skeleton";
import ErrorState from "./error-state/error-state";
import { MANCHESTER_UNITED } from "@/constants/team";

const meta: Meta<typeof RecentMatchResult> = {
    title: "pages/main/match-overview-panel/recent-match-result",
    component: RecentMatchResult,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => {
            useEffect(() => {
                useMatchOverviewPanelStore.setState(initState);
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
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getRecentMatchesApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<RecentMatchFixture>()
                                .fixture({ date: "2025-01-15T20:00:00+00:00", id: 1 })
                                .teams({
                                    home: {
                                        id: 40,
                                        name: "Liverpool",
                                        logo: "https://media.api-sports.io/football/teams/40.png",
                                    },
                                    away: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                                    },
                                })
                                .goals({ home: 1, away: 2 })
                                .build(),
                            Builder<RecentMatchFixture>()
                                .fixture({ date: "2025-01-20T15:00:00+00:00", id: 2 })
                                .teams({
                                    home: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                                    },
                                    away: {
                                        id: 50,
                                        name: "Manchester City",
                                        logo: "https://media.api-sports.io/football/teams/50.png",
                                    },
                                })
                                .goals({ home: 0, away: 2 })
                                .build(),
                            Builder<RecentMatchFixture>()
                                .fixture({ date: "2025-01-27T17:30:00+00:00", id: 3 })
                                .teams({
                                    home: {
                                        id: 49,
                                        name: "Chelsea",
                                        logo: "https://media.api-sports.io/football/teams/49.png",
                                    },
                                    away: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                                    },
                                })
                                .goals({ home: 0, away: 2 })
                                .build(),
                            Builder<RecentMatchFixture>()
                                .fixture({ date: "2025-02-01T15:00:00+00:00", id: 4 })
                                .teams({
                                    home: {
                                        id: 39,
                                        name: "Wolves",
                                        logo: "https://media.api-sports.io/football/teams/39.png",
                                    },
                                    away: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                                    },
                                })
                                .goals({ home: 2, away: 5 })
                                .build(),
                            Builder<RecentMatchFixture>()
                                .fixture({ date: "2025-02-13T20:00:00+00:00", id: 5 })
                                .teams({
                                    home: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
                                    },
                                    away: {
                                        id: 42,
                                        name: "Arsenal",
                                        logo: "https://media.api-sports.io/football/teams/42.png",
                                    },
                                })
                                .goals({ home: 3, away: 3 })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => <RecentMatchResult />,
};

export const 로딩중: Story = {
    render: () => <Skeleton />,
};

export const API_에러 = {
    render: () => <ErrorState />,
};
