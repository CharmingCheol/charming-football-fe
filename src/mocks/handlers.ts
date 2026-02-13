import { http, HttpResponse } from "msw";
import { getNextMatchApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";
import Builder from "@/test/builder";

export const handlers = [
    http.get(`*/${getNextMatchApi.path}`, ({ request }) => {
        const url = new URL(request.url);
        const next = url.searchParams.get("next");
        const last = url.searchParams.get("last");

        if (next) {
            return HttpResponse.json({
                response: [
                    Builder<NextMatchFixture>()
                        .fixture({
                            date: "2025-01-20T15:00:00+00:00",
                            status: { short: "NS" },
                            venue: { name: "Old Trafford", city: "Manchester" },
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
        }

        if (last) {
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
        }

        return HttpResponse.json({ response: [] });
    }),
];
