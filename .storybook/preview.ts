import type { Preview } from "@storybook/react-vite";
import viewports from "./viewports";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            options: {
                dark: { name: "Dark", value: "#080b0b" },
                light: { name: "Light", value: "#fafbfc" },
            },
        },
        viewport: {
            options: viewports,
        },
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
    initialGlobals: {
        backgrounds: { value: "dark" },
        viewport: { value: "full", isRotated: false },
    },
};

export default preview;
