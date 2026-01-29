import type { Meta } from "@storybook/react-vite";
import { useEffect } from "react";
import { http, HttpResponse } from "msw";
import { MemoryRouter } from "react-router-dom";
import { MANCHESTER_UNITED } from "@/constants/team";
import { getNextMatchApi } from "@/apis/teams";
import Builder from "@/test/builder";
import NextMatchInfo from "./next-match-info";
import SkeletonUI from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";
import ErrorState from "./error-state/error-state";

const meta: Meta<typeof NextMatchInfo> = {
    title: "pages/main/match-overview-panel/next-match-info",
    component: NextMatchInfo,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => {
            useEffect(() => {
                useMatchOverviewPanelStore.setState(initState);
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

export const 로딩중 = {
    render: () => <SkeletonUI />,
};

export const 데이터_로딩_성공 = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<ApiFootballFixture>()
                                .fixture({
                                    date: new Date().toString(),
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "NS" },
                                })
                                .league({ name: "Premier League" })
                                .goals({ home: null, away: null })
                                .teams({
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
                                })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};

export const 데이터_없음 = {
    render: () => <EmptyState />,
};

export const API_에러 = {
    render: () => <ErrorState />,
};
