import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse, delay } from "msw";
import { useEffect } from "react";
import NextMatchInfo from "./next-match-info";
import { getNextMatchApi } from "@/apis/teams";
import useNextMatchStore, { nextMatchState } from "./next-match-info.store";

const meta: Meta<typeof NextMatchInfo> = {
    title: "pages/main/next-match-info",
    component: NextMatchInfo,
    decorators: [
        (Story) => {
            useEffect(() => {
                return () => {
                    useNextMatchStore.setState(nextMatchState);
                };
            }, []);
            return <Story />;
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
                    return HttpResponse.json({});
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
                http.get(`*/${getNextMatchApi.path}`, () => {
                    return HttpResponse.json(null);
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
                        fixture: {
                            date: new Date("2024-12-10T17:30:00"),
                            stadium: "Old Trafford",
                            city: "Manchester",
                            status: { name: "Scheduled", elapsed: 0 },
                        },
                        home: {
                            id: 33,
                            name: "Manchester United",
                            logo: "https://media.api-sports.io/football/teams/33.png",
                        },
                        away: {
                            id: 40,
                            name: "Liverpool",
                            logo: "https://media.api-sports.io/football/teams/40.png",
                        },
                        goals: { home: 0, away: 0 },
                        league: { name: "Premier League", round: "Regular Season - 15" },
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
                http.get(`*/${getNextMatchApi.path}`, () => {
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
                        fixture: {
                            date: new Date("2024-12-15T20:00:00"),
                            stadium: "Tottenham Hotspur Stadium North London",
                            city: "London, United Kingdom",
                            status: { name: "Scheduled", elapsed: 0 },
                        },
                        home: {
                            id: 165,
                            name: "Borussia Mönchengladbach",
                            logo: "https://media.api-sports.io/football/teams/165.png",
                        },
                        away: {
                            id: 39,
                            name: "Wolverhampton Wanderers",
                            logo: "https://media.api-sports.io/football/teams/39.png",
                        },
                        goals: { home: 0, away: 0 },
                        league: { name: "UEFA Champions League", round: "Round of 16 - 1st Leg" },
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
                        fixture: {
                            date: new Date(),
                            stadium: "Anfield",
                            city: "Liverpool",
                            status: { name: "InPlay", elapsed: 67 },
                        },
                        home: {
                            id: 40,
                            name: "Liverpool",
                            logo: "https://media.api-sports.io/football/teams/40.png",
                        },
                        away: {
                            id: 33,
                            name: "Manchester United",
                            logo: "https://media.api-sports.io/football/teams/33.png",
                        },
                        goals: { home: 2, away: 1 },
                        league: { name: "Premier League", round: "Regular Season - 17" },
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
                        fixture: {
                            date: new Date("2024-12-20T15:00:00"),
                            stadium: "Emirates Stadium",
                            city: "London",
                            status: { name: "Scheduled", elapsed: 0 },
                        },
                        home: {
                            id: 42,
                            name: "Arsenal",
                            logo: "https://invalid-url.com/broken-image.png",
                        },
                        away: {
                            id: 49,
                            name: "Chelsea",
                            logo: "https://invalid-url.com/another-broken.png",
                        },
                        goals: { home: 0, away: 0 },
                        league: { name: "Premier League", round: "Regular Season - 18" },
                    });
                }),
            ],
        },
    },
    render: () => <NextMatchInfo />,
};
