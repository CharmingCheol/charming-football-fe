import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import NextMatchInfo from "./next-match-info";
import useNextMatchStore, { nextMatchState } from "./next-match-info.store";

vi.mock("@/apis/teams", () => ({
    getNextMatchApi: {
        get: vi.fn().mockResolvedValue(null),
        path: "api/teams/:id/matches/next",
    },
}));

describe("pages/main/next-match-info", () => {
    beforeEach(() => {
        useNextMatchStore.setState({
            nextMatch: {
                fixture: {
                    date: new Date("2024-12-10T17:30:00"),
                    stadium: "Old Trafford",
                    city: "Manchester",
                    status: { name: "Scheduled", elapsed: 0 },
                },
                home: {
                    id: 33,
                    name: "Manchester United",
                    logo: "https://media.api-sports.io/football/teams/33.png",
                },
                away: {
                    id: 40,
                    name: "Liverpool",
                    logo: "https://media.api-sports.io/football/teams/40.png",
                },
                goals: { home: 0, away: 0 },
                league: { name: "Premier League", round: "Regular Season - 15" },
            },
            isLoading: false,
        });
    });

    afterEach(() => {
        cleanup();
        useNextMatchStore.setState(nextMatchState);
    });

    it("홈팀 로고는 올바른 팀 페이지 링크를 가진다", () => {
        render(
            <MemoryRouter>
                <NextMatchInfo />
            </MemoryRouter>
        );

        const homeTeamLogo = screen.getByAltText("Manchester United");
        const homeTeamLink = homeTeamLogo.closest("a");

        expect(homeTeamLink).toHaveAttribute("href", "/team/33");
    });

    it("홈팀 이름은 올바른 팀 페이지 링크를 가진다", () => {
        render(
            <MemoryRouter>
                <NextMatchInfo />
            </MemoryRouter>
        );

        const homeTeamName = screen.getByText("MANCHESTER UNITED");
        const homeTeamLink = homeTeamName.closest("a");

        expect(homeTeamLink).toHaveAttribute("href", "/team/33");
    });

    it("어웨이팀 로고는 올바른 팀 페이지 링크를 가진다", () => {
        render(
            <MemoryRouter>
                <NextMatchInfo />
            </MemoryRouter>
        );

        const awayTeamLogo = screen.getByAltText("Liverpool");
        const awayTeamLink = awayTeamLogo.closest("a");

        expect(awayTeamLink).toHaveAttribute("href", "/team/40");
    });

    it("어웨이팀 이름은 올바른 팀 페이지 링크를 가진다", () => {
        render(
            <MemoryRouter>
                <NextMatchInfo />
            </MemoryRouter>
        );

        const awayTeamName = screen.getByText("LIVERPOOL");
        const awayTeamLink = awayTeamName.closest("a");

        expect(awayTeamLink).toHaveAttribute("href", "/team/40");
    });
});
