import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import Builder from "@/test/builder";
import MatchInfoCard from "./match-info-card";
import useMatchOverviewPanelStore, { initState } from "../../match-overview-panel.store";

const meta: Meta<typeof MatchInfoCard> = {
    title: "pages/main/match-overview-panel/next-match-info/match-info-card",
    component: MatchInfoCard,
    decorators: [
        (Story) => {
            useEffect(() => {
                return () => {
                    useMatchOverviewPanelStore.setState(initState);
                };
            }, []);
            return <Story />;
        },
    ],
    parameters: {
        layout: "centered",
    },
};

export default meta;

export const 경기_전: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date().toString(),
                            venue: { name: "Old Trafford", city: "Manchester" },
                            status: { short: "NS" },
                        },
                        league: {
                            name: "UEFA Champions League",
                        },
                        goals: { home: null, away: null },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};

export const 경기_중: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date().toString(),
                            venue: { name: "Old Trafford", city: "Manchester" },
                            status: { short: "LIVE", elapsed: 67 },
                        },
                        league: {
                            name: "UEFA Champions League",
                        },
                        goals: { home: 2, away: 1 },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};

export const 날짜_길이_최대_길이: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date("9999-12-31 23:59:59").toString(),
                            venue: { name: "Old Trafford", city: "Manchester" },
                            status: { short: "NS" },
                        },
                        league: {
                            name: "UEFA Champions League",
                        },
                        goals: { home: null, away: null },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};

export const 대회_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date().toString(),
                            venue: { name: "Old Trafford", city: "Manchester" },
                            status: { short: "NS" },
                        },
                        league: {
                            name: "AAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        },
                        goals: { home: null, away: null },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};

export const 경기장_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date().toString(),
                            venue: {
                                name: "AAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                city: "Manchester",
                            },
                            status: { short: "NS" },
                        },
                        league: {
                            name: "UEFA Champions League",
                        },
                        goals: { home: null, away: null },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};

export const 도시_이름_긴_경우: StoryObj<typeof MatchInfoCard> = {
    decorators: [
        (Story) => {
            const data = Builder<typeof initState>()
                .nextMatch({
                    data: {
                        fixture: {
                            date: new Date().toString(),
                            venue: {
                                name: "Old Trafford",
                                city: "AAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                            },
                            status: { short: "NS" },
                        },
                        league: {
                            name: "UEFA Champions League",
                        },
                        goals: { home: null, away: null },
                    },
                })
                .build();
            useMatchOverviewPanelStore.setState(data);
            return (
                <div style={{ width: "min(700px, 90vw)" }}>
                    <Story />
                </div>
            );
        },
    ],
    render: () => <MatchInfoCard />,
};
