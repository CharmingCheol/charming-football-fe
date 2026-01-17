import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import fallbackLogo from "@/assets/images/fallback_team_logo.png";
import * as S from "./next-match-info.styles";
import useMatchOverviewPanelStore from "../match-overview-panel.store";
import Skeleton from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";

const NextMatchInfo = () => {
    const nextMatch = useMatchOverviewPanelStore((state) => state.nextMatch.data);
    const status = useMatchOverviewPanelStore((state) => state.nextMatch.status);
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    const formattedTime = useMemo(() => {
        if (!nextMatch) return "";
        const date = new Date(nextMatch.fixture.date);
        const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = days[date.getDay()];
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hours}:${minutes}`;
    }, [nextMatch]);

    const isLive = useMemo(() => {
        if (!nextMatch) return false;
        return nextMatch.fixture.status.name === "InPlay";
    }, [nextMatch]);

    useEffect(() => {
        actions.fetchNextMatch();
    }, [actions]);

    if (status === "request") {
        return <Skeleton />;
    }

    if (!nextMatch) {
        return <EmptyState />;
    }

    return (
        <S.Container>
            <S.TeamCard>
                <Link to={`/team/${nextMatch.home.id}`}>
                    <S.TeamLogo
                        src={nextMatch.home.logo}
                        alt={nextMatch.home.name}
                        onError={(e) => (e.currentTarget.src = fallbackLogo)}
                    />
                </Link>
                <S.TeamName2 to={`/team/${nextMatch.home.id}`}>{nextMatch.home.name.toUpperCase()}</S.TeamName2>
            </S.TeamCard>
            <S.MatchInfoCard>
                <S.MatchStatus isLive={isLive}>{isLive ? "경기중" : "경기전"}</S.MatchStatus>
                <S.MatchTime>{formattedTime}</S.MatchTime>
                <S.LeagueName>{nextMatch.league.name}</S.LeagueName>
                <S.VenueInfo>
                    <S.City>{nextMatch.fixture.city}</S.City>
                    <S.Stadium>{nextMatch.fixture.stadium}</S.Stadium>
                </S.VenueInfo>
            </S.MatchInfoCard>
            <S.TeamCard>
                <Link to={`/team/${nextMatch.away.id}`}>
                    <S.TeamLogo
                        src={nextMatch.away.logo}
                        alt={nextMatch.away.name}
                        onError={(e) => (e.currentTarget.src = fallbackLogo)}
                    />
                </Link>
                <S.TeamName2 to={`/team/${nextMatch.away.id}`}>{nextMatch.away.name.toUpperCase()}</S.TeamName2>
            </S.TeamCard>
        </S.Container>
    );
};

export default NextMatchInfo;
