import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import Builder from "@/test/builder";
import { getNextMatchApi } from "@/apis/teams";
import MatchInfoCard from "./match-info-card";

const meta: Meta<typeof MatchInfoCard> = {
    title: "pages/main/match-overview-panel/next-match-info/match-info-card",
    component: MatchInfoCard,
    decorators: [
        (Story) => {
            const queryClient = new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            });
            return (
                <QueryClientProvider client={queryClient}>
                    <Story />
                </QueryClientProvider>
            );
        },
    ],
    parameters: {
        layout: "centered",
    },
};

export default meta;

export const 경기_전: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: "2026-02-02T13:00:00+00:00",
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "NS" },
                                })
                                .league({
                                    name: "UEFA Champions League",
                                })
                                .goals({ home: null, away: null })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};

export const 경기_중: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: "2026-02-02T13:00:00+00:00",
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "LIVE", elapsed: 67 },
                                })
                                .league({
                                    name: "UEFA Champions League",
                                })
                                .goals({ home: 2, away: 1 })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};

export const 날짜_길이_최대_길이: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: new Date("9999-12-31 23:59:59").toString(),
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "NS" },
                                })
                                .league({
                                    name: "UEFA Champions League",
                                })
                                .goals({ home: null, away: null })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};

export const 대회_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: "2026-02-02T13:00:00+00:00",
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "NS" },
                                })
                                .league({
                                    name: "AAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                })
                                .goals({ home: null, away: null })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};

export const 경기장_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: "2026-02-02T13:00:00+00:00",
                                    venue: {
                                        name: "AAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                        city: "Manchester",
                                    },
                                    status: { short: "NS" },
                                })
                                .league({
                                    name: "UEFA Champions League",
                                })
                                .goals({ home: null, away: null })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};

export const 도시_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<NextMatchFixture>()
                                .fixture({
                                    date: "2026-02-02T13:00:00+00:00",
                                    venue: {
                                        name: "Old Trafford",
                                        city: "AAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    },
                                    status: { short: "NS" },
                                })
                                .league({
                                    name: "UEFA Champions League",
                                })
                                .goals({ home: null, away: null })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <MatchInfoCard />
        </div>
    ),
};
