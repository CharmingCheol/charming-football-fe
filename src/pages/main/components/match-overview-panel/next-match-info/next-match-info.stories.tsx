import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { getNextMatchApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";
import Builder from "@/test/builder";
import NextMatchInfo from "./next-match-info";

const meta: Meta<typeof NextMatchInfo> = {
    title: "pages/main/match-overview-panel/next-match-info",
    component: NextMatchInfo,
    parameters: {
        layout: "centered",
    },
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
                    <div style={{ width: "min(700px, 90vw)" }}>
                        <Story />
                    </div>
                </QueryClientProvider>
            );
        },
    ],
};

export default meta;

export const 데이터_로딩_성공: StoryObj<typeof NextMatchInfo> = {
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
