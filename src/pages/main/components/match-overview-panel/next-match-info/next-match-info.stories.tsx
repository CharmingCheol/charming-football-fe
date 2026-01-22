import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse, delay } from "msw";
import { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";
import { MANCHESTER_UNITED } from "@/constants/team";
import { getNextMatchApi } from "@/apis/teams";
import Builder from "@/test/builder";
import NextMatchInfo from "./next-match-info";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";

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

export const 기본: StoryObj<typeof NextMatchInfo> = {
    render: () => <NextMatchInfo />,
};

export const 로딩중: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, async () => {
                    await delay("infinite");
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};

export const 데이터_없음: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, async () => {
                    return HttpResponse.json({ response: [] });
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};

export const 랜더링_1초_뒤: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, async () => {
                    await delay(1000);
                    return HttpResponse.json({
                        response: [
                            Builder<ApiFootballFixture>()
                                .fixture({
                                    date: new Date().toString(),
                                    venue: { name: "Old Trafford", city: "Manchester" },
                                    status: { short: "NS" },
                                })
                                .league({ name: "Premier League" })
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

export const API_에러: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, async () => {
                    await delay(1000);
                    return HttpResponse.json({ error: "Server Error" }, { status: 500 });
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};

export const 긴_이름: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<ApiFootballFixture>()
                                .fixture({
                                    date: new Date().toString(),
                                    venue: { name: "Tottenham Hotspur Stadium North London", city: "London" },
                                    status: { short: "NS" },
                                })
                                .league({ name: "UEFA Champions League" })
                                .teams({
                                    home: {
                                        id: 165,
                                        name: "Borussia Mönchengladbach",
                                        logo: "https://media.api-sports.io/football/teams/165.png",
                                    },
                                    away: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
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

export const 경기중: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<ApiFootballFixture>()
                                .fixture({
                                    date: new Date().toString(),
                                    venue: { name: "Anfield", city: "Liverpool" },
                                    status: { short: "LIVE", elapsed: 67 },
                                })
                                .league({ name: "Premier League" })
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
                                .goals({ home: 2, away: 1 })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};

export const 이미지_로드_실패: StoryObj<typeof NextMatchInfo> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<ApiFootballFixture>()
                                .fixture({
                                    date: new Date().toString(),
                                    venue: { name: "Emirates Stadium", city: "London" },
                                    status: { short: "NS" },
                                })
                                .league({ name: "Premier League" })
                                .teams({
                                    home: {
                                        id: 42,
                                        name: "Arsenal",
                                        logo: "https://invalid-url.com/broken-image.png",
                                    },
                                    away: {
                                        id: MANCHESTER_UNITED,
                                        name: "Manchester United",
                                        logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
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
