import { useMemo } from "react";
import * as S from "./match-info-card.styles";
import useMatchOverviewPanelStore from "../../match-overview-panel.store";

const MatchInfoCard = () => {
    const nextMatch = useMatchOverviewPanelStore((state) => state.nextMatch);

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

    return (
        <S.MatchInfoCard>
            <S.MatchStatus isLive={isLive}>{isLive ? "경기중" : "경기전"}</S.MatchStatus>
            <S.MatchTime>{formattedTime}</S.MatchTime>
            <S.LeagueName>{nextMatch.data!.league.name}</S.LeagueName>
            <S.VenueInfo>
                <S.City>{nextMatch.data!.fixture.venue.city}</S.City>
                <S.Stadium>{nextMatch.data!.fixture.venue.name}</S.Stadium>
            </S.VenueInfo>
        </S.MatchInfoCard>
    );
};

export default MatchInfoCard;
