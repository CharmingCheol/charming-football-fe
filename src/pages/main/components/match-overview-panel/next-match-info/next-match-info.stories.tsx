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
