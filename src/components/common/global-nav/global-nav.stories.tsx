import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { useEffect } from "react";
import GlobalNav from "./global-nav";
import useSearchInputStore, { searchInputState } from "./search-input.store";

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
            query: "맨체",
            inputFocused: true,
            searchResultList: [
                { id: "1", name: "맨체스터 유나이티드드", type: "team" },
                { id: "2", name: "맨체스터 시티", type: "team" },
            ],
        }),
    ],
    render: () => <GlobalNav />,
};

export const 검색_결과_없음: StoryObj<typeof GlobalNav> = {
    decorators: [
        withSearchInputStore({
            query: "dfsdfdsafd",
            inputFocused: true,
        }),
    ],
    render: () => <GlobalNav />,
};
