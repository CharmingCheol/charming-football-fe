import type { Preview } from "@storybook/nextjs";

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
    },
    initialGlobals: {
        backgrounds: { value: "dark" },
        viewport: { value: "full", isRotated: false },
    },
};

export default preview;
