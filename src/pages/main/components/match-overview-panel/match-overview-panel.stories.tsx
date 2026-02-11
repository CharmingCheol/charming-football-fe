import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { getNextMatchApi, getRecentMatchesApi } from "@/apis/teams";
import Builder from "@/test/builder";
import { MANCHESTER_UNITED } from "@/constants/team";
import MatchOverviewPanel from "./match-overview-panel";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const meta: Meta<typeof MatchOverviewPanel> = {
    title: "pages/main/match-overview-panel",
    component: MatchOverviewPanel,
    decorators: [
        (Story) => {
            return (
                <QueryClientProvider client={queryClient}>
                    <Story />
                </QueryClientProvider>
            );
        },
    ],
};

export default meta;

export const Default: StoryObj<typeof MatchOverviewPanel> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${getNextMatchApi.path}`, ({ request }) => {
                    const url = new URL(request.url);
                    const next = url.searchParams.get("next");
                    if (next) {
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
                    }
                }),
                http.get(`*/${getRecentMatchesApi.path}`, ({ request }) => {
                    const url = new URL(request.url);
                    const last = url.searchParams.get("last");
                    if (last) {
                        return HttpResponse.json({ response: [] });
                    }
                }),
            ],
        },
    },
    render: () => <MatchOverviewPanel />,
};
