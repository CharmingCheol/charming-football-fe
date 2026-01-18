import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import fallbackLogo from "@/assets/images/fallback_team_logo.png";
import * as S from "./next-match-info.styles";
import useMatchOverviewPanelStore from "../match-overview-panel.store";
import Skeleton from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";

const NextMatchInfo = () => {
    const nextMatch = useMatchOverviewPanelStore((state) => state.nextMatch);
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    const formattedTime = useMemo(() => {
        if (!nextMatch.data) return "";
        const date = new Date(nextMatch.data.fixture.date);
        const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = days[date.getDay()];
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hours}:${minutes}`;
    }, [nextMatch.data]);

    const isLive = useMemo(() => {
        if (!nextMatch.data) return false;
        const liveStatuses = ["1H", "2H", "HT", "ET", "P", "LIVE", "BT"];
        return liveStatuses.includes(nextMatch.data.fixture.status.short);
    }, [nextMatch.data]);

    useEffect(() => {
        actions.fetchNextMatch();
    }, [actions]);

    if (nextMatch.status === "request") {
        return <Skeleton />;
    }

    if (!nextMatch.data) {
        return <EmptyState />;
    }

    return (
        <S.Container>
            <S.TeamCard>
                <Link to={`/team/${nextMatch.data.teams.home.id}`}>
                    <S.TeamLogo
                        src={nextMatch.data.teams.home.logo}
                        alt={nextMatch.data.teams.home.name}
                        onError={(e) => (e.currentTarget.src = fallbackLogo)}
                    />
                </Link>
                <S.TeamName2 to={`/team/${nextMatch.data.teams.home.id}`}>
                    {nextMatch.data.teams.home.name.toUpperCase()}
                </S.TeamName2>
            </S.TeamCard>
            <S.MatchInfoCard>
                <S.MatchStatus isLive={isLive}>{isLive ? "경기중" : "경기전"}</S.MatchStatus>
                <S.MatchTime>{formattedTime}</S.MatchTime>
                <S.LeagueName>{nextMatch.data.league.name}</S.LeagueName>
                <S.VenueInfo>
                    <S.City>{nextMatch.data.fixture.venue.city}</S.City>
                    <S.Stadium>{nextMatch.data.fixture.venue.name}</S.Stadium>
                </S.VenueInfo>
            </S.MatchInfoCard>
            <S.TeamCard>
                <Link to={`/team/${nextMatch.data.teams.away.id}`}>
                    <S.TeamLogo
                        src={nextMatch.data.teams.away.logo}
                        alt={nextMatch.data.teams.away.name}
                        onError={(e) => (e.currentTarget.src = fallbackLogo)}
                    />
                </Link>
                <S.TeamName2 to={`/team/${nextMatch.data.teams.away.id}`}>
                    {nextMatch.data.teams.away.name.toUpperCase()}
                </S.TeamName2>
            </S.TeamCard>
        </S.Container>
    );
};

export default NextMatchInfo;
