import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { useEffect } from "react";

import GlobalNav from "./global-nav";
import useSearchInputStore, { searchInputState } from "./search-input/search-input.store";

const withSearchInputStore = (updatedState?: Partial<typeof searchInputState>): Decorator => {
    return (Story) => {
        useEffect(() => {
            if (updatedState) {
                useSearchInputStore.setState({ ...searchInputState, ...updatedState });
            }
            return () => {
                useSearchInputStore.setState(searchInputState);
            };
        }, []);
        return <Story />;
    };
};

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

export default meta;

export const 기본: StoryObj<typeof GlobalNav> = {
    render: () => <GlobalNav />,
};

export const 검색_결과_있음: StoryObj<typeof GlobalNav> = {
    decorators: [
        withSearchInputStore({
            focusedInput: true,
            suggestionKeywords: [
                { id: "1", name: "손흥민", type: "player" },
                { id: "2", name: "토트넘", type: "team" },
                { id: "3", name: "프리미어 리그", type: "league" },
                { id: "4", name: "해리 케인", type: "player" },
            ],
            selectedKeywordIndex: 0,
        }),
    ],
    render: () => <GlobalNav />,
};
