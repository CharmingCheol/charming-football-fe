import { http, HttpResponse } from "msw";
import { getSearchAllApi } from "@/apis/search";

export const handlers = [
    http.get(`*/${getSearchAllApi.path}`, () => {
        return HttpResponse.json<Awaited<ReturnType<typeof getSearchAllApi.get>>>([]);
    }),
];
