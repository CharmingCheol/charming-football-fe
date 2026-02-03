import { useMemo } from "react";
import fallbackLogo from "@/assets/images/fallback_team_logo.png";
import { MANCHESTER_UNITED } from "@/constants/team";
import * as S from "./recent-match-result-item.styles";

const RecentMatchResultItem = ({ data }: { data: RecentMatchFixture }) => {
    const isHome = data.teams.home.id === MANCHESTER_UNITED;
    const opponent = isHome ? data.teams.away : data.teams.home;
    const myGoals = isHome ? data.goals.home : data.goals.away;
    const opponentGoals = isHome ? data.goals.away : data.goals.home;

    const matchResult = useMemo(() => {
        if (myGoals > opponentGoals) return "win";
        else if (myGoals < opponentGoals) return "loss";
        else return "draw";
    }, [myGoals, opponentGoals]);

    const formattedDate = useMemo(() => {
        const date = new Date(data.fixture.date);
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${month}/${day}`;
    }, [data.fixture.date]);

    return (
        <S.MatchItem>
            <S.MatchDate>{formattedDate}</S.MatchDate>
            <S.VenueType>{isHome ? "홈" : "원"}</S.VenueType>
            <S.TeamLogo src={opponent.logo} alt={opponent.name} onError={(e) => (e.currentTarget.src = fallbackLogo)} />
            <S.TeamName>{opponent.name}</S.TeamName>
            <S.ResultIndicator result={matchResult} />
            <S.Score isHighlight={matchResult === "win"}>{`${myGoals} - ${opponentGoals}`}</S.Score>
        </S.MatchItem>
    );
};

export default RecentMatchResultItem;
