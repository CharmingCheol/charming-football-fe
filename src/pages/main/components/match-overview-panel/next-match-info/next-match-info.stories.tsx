import type { Meta } from "@storybook/react-vite";
import { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";
import NextMatchInfo from "./next-match-info";
import SkeletonUI from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";
import useMatchOverviewPanelStore, { initState } from "../match-overview-panel.store";
import ErrorState from "./error-state/error-state";

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

export const 로딩중 = {
    render: () => <SkeletonUI />,
};

export const 데이터_없음 = {
    render: () => <EmptyState />,
};

export const API_에러 = {
    render: () => <ErrorState />,
};

// export const 이미지_로드_실패 = {
//     parameters: {
//         msw: {
//             handlers: [
//                 http.get(`*/${getNextMatchApi.path}`, () => {
//                     return HttpResponse.json({
//                         response: [
//                             Builder<ApiFootballFixture>()
//                                 .fixture({
//                                     date: new Date().toString(),
//                                     venue: { name: "Emirates Stadium", city: "London" },
//                                     status: { short: "NS" },
//                                 })
//                                 .league({ name: "Premier League" })
//                                 .teams({
//                                     home: {
//                                         id: 42,
//                                         name: "Arsenal",
//                                         logo: "https://invalid-url.com/broken-image.png",
//                                     },
//                                     away: {
//                                         id: MANCHESTER_UNITED,
//                                         name: "Manchester United",
//                                         logo: `https://media.api-sports.io/football/teams/${MANCHESTER_UNITED}.png`,
//                                     },
//                                 })
//                                 .build(),
//                         ],
//                     });
//                 }),
//             ],
//         },
//     },
//     render: () => <NextMatchInfo />,
// };
