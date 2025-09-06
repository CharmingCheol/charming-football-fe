import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./input";

const meta: Meta<typeof Input> = {
    title: "components/ui/input",
    component: Input,
};

export const 기본_인풋: StoryObj<typeof Input> = {
    render: () => (
        <div style={{ width: "320px" }}>
            <Input placeholder="placeholder" />
        </div>
    ),
};

export default meta;
