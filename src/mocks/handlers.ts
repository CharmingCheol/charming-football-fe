import { http, HttpResponse } from "msw";
import { getSearchAllApi } from "@/apis/search";

export const handlers = [
    http.get(`*/${getSearchAllApi.path}`, ({ request }) => {
        const query = new URL(request.url).searchParams.get("query") as string;
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
];
