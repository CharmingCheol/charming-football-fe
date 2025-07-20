import type { Meta, StoryObj } from "@storybook/nextjs";
import GlobalNav from "./global-nav";

const meta: Meta<typeof GlobalNav> = {
    title: "common/global-nav",
    component: GlobalNav,
};

export const Default: StoryObj<typeof GlobalNav> = {
    render: () => <GlobalNav />,
};

export default meta;
