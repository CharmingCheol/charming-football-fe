import type { Meta, StoryObj } from "@storybook/react-vite";
import Builder from "@/test/builder";
import TeamCard, { type TeamCardProps } from "./team-card";

const meta: Meta<typeof TeamCard> = {
    title: "pages/main/match-overview-panel/next-match-info/team-card",
    component: TeamCard,
    parameters: {
        layout: "centered",
    },
};

export default meta;

export const 팀_이름_긴_경우: StoryObj<typeof TeamCard> = {
    decorators: [
        (Story) => (
            <div style={{ width: "min(300px, 90vw)" }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        const data = Builder<TeamCardProps>()
            .name("AAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            .logo("https://media.api-sports.io/football/teams/33.png")
            .build();
        return <TeamCard data={data} />;
    },
};

export const 이미지_로드_실패: StoryObj<typeof TeamCard> = {
    decorators: [
        (Story) => (
            <div style={{ width: "min(300px, 90vw)" }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        const data = Builder<TeamCardProps>()
            .name("Manchester United")
            .logo("https://invalid-url.com/broken-image.png")
            .build();
        return <TeamCard data={data} />;
    },
};
