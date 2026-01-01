import { http, HttpResponse } from "msw";
import { getSearchAllApi } from "@/apis/search";
import { getNextMatchApi, getRecentMatchesApi } from "@/apis/teams";

export const handlers = [
    http.get(`*/${getSearchAllApi.path}`, ({ request }) => {
        const query = new URL(request.url).searchParams.get("query") as string;

        if (query === "error500") {
            return HttpResponse.json({ message: "오류가 발생했습니다" }, { status: 500 });
        }

        const response: Awaited<ReturnType<typeof getSearchAllApi.get>> = [
            { id: "1", name: "맨체스터 유나이티드", type: "team" },
            { id: "2", name: "리버풀", type: "team" },
            { id: "3", name: "손흥민", type: "player" },
            { id: "4", name: "김민재", type: "player" },
            { id: "5", name: "첼시", type: "team" },
            { id: "6", name: "아스널", type: "team" },
            { id: "7", name: "케인", type: "player" },
            { id: "8", name: "살라", type: "player" },
            { id: "9", name: "맨체스터 시티", type: "team" },
            { id: "10", name: "토트넘", type: "team" },
        ];
        return HttpResponse.json(response.filter((keyword) => keyword.name.includes(query)));
    }),

    http.get(`*/${getNextMatchApi.path}`, () => {
        const response: Awaited<ReturnType<typeof getNextMatchApi.get>> = {
            fixture: {
                date: new Date("2024-12-08T20:00:00"),
                stadium: "Santiago Bernabéu",
                city: "Madrid",
                status: {
                    name: "Scheduled",
                    elapsed: 0,
                },
            },
            home: {
                id: 541,
                name: "Real Madrid",
                logo: "https://media.api-sports.io/football/teams/541.png",
            },
            away: {
                id: 529,
                name: "FC Barcelona",
                logo: "https://media.api-sports.io/football/teams/529.png",
            },
            goals: {
                home: 0,
                away: 0,
            },
            league: {
                name: "UEFA Champions League",
                round: "Group Stage - 6",
            },
        };

        return HttpResponse.json(response);
    }),

    http.get(`*/${getRecentMatchesApi.path}`, () => {
        const response: Awaited<ReturnType<typeof getRecentMatchesApi.get>> = [
            {
                fixture: { date: new Date("2025-05-06") },
                home: { id: 40, name: "리버풀", logo: "https://media.api-sports.io/football/teams/40.png" },
                away: {
                    id: 30,
                    name: "맨체스터 유나이티드",
                    logo: "https://media.api-sports.io/football/teams/30.png",
                },
                goals: { home: 1, away: 2 },
                league: { name: "UCL" },
            },
            {
                fixture: { date: new Date("2025-05-11") },
                home: { id: 548, name: "레알 소시에다드", logo: "https://media.api-sports.io/football/teams/548.png" },
                away: {
                    id: 30,
                    name: "맨체스터 유나이티드",
                    logo: "https://media.api-sports.io/football/teams/30.png",
                },
                goals: { home: 2, away: 5 },
                league: { name: "La Liga" },
            },
            {
                fixture: { date: new Date("2025-05-15") },
                home: {
                    id: 30,
                    name: "맨체스터 유나이티드",
                    logo: "https://media.api-sports.io/football/teams/30.png",
                },
                away: { id: 530, name: "A 마드리드", logo: "https://media.api-sports.io/football/teams/530.png" },
                goals: { home: 3, away: 3 },
                league: { name: "La Liga" },
            },
            {
                fixture: { date: new Date("2025-05-24") },
                home: { id: 532, name: "발렌시아", logo: "https://media.api-sports.io/football/teams/532.png" },
                away: {
                    id: 30,
                    name: "맨체스터 유나이티드",
                    logo: "https://media.api-sports.io/football/teams/30.png",
                },
                goals: { home: 0, away: 2 },
                league: { name: "La Liga" },
            },
            {
                fixture: { date: new Date("2025-05-30") },
                home: {
                    id: 30,
                    name: "맨체스터 유나이티드",
                    logo: "https://media.api-sports.io/football/teams/30.png",
                },
                away: { id: 50, name: "맨체스터 시티 FC", logo: "https://media.api-sports.io/football/teams/50.png" },
                goals: { home: 0, away: 2 },
                league: { name: "UCL" },
            },
        ];

        return HttpResponse.json(response);
    }),
];
