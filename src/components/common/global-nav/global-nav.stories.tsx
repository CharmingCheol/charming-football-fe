import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import GlobalNav from "./global-nav";

const meta: Meta<typeof GlobalNav> = {
    title: "common/global-nav",
    component: GlobalNav,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Default: StoryObj<typeof GlobalNav> = {
    render: () => <GlobalNav />,
};

export default meta;
