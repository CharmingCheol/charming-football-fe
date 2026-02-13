import { useMemo } from "react";
import { useNextMatch } from "@/queries/fixtures.query";
import * as S from "./match-info-card.styles";

const MatchInfoCard = () => {
    const { data } = useNextMatch();

    const formattedTime = useMemo(() => {
        if (!data) return "";
        const date = new Date(data.fixture.date);
        const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = days[date.getDay()];
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hours}:${minutes}`;
    }, [data]);

    const isLive = useMemo(() => {
        if (!data) return false;
        const liveStatuses = ["1H", "2H", "HT", "ET", "P", "LIVE", "BT"];
        return liveStatuses.includes(data.fixture.status.short);
    }, [data]);

    const elapsedTime = useMemo(() => {
        if (!data) return 0;
        return data.fixture.status.elapsed ?? 0;
    }, [data]);

    const score = useMemo(() => {
        if (!data || !isLive) return null;
        return {
            home: data.goals.home ?? 0,
            away: data.goals.away ?? 0,
        };
    }, [data, isLive]);

    if (!data) return null;

    return (
        <S.Wrapper>
            <S.StatusRow>
                <S.MatchStatus isLive={isLive}>{isLive ? "경기중" : "경기전"}</S.MatchStatus>
                {elapsedTime ? <S.ElapsedTime>{elapsedTime}분</S.ElapsedTime> : null}
            </S.StatusRow>
            {score ? (
                <S.ScoreWrapper>
                    <S.Score>{score.home}</S.Score>
                    <S.ScoreDivider>:</S.ScoreDivider>
                    <S.Score>{score.away}</S.Score>
                </S.ScoreWrapper>
            ) : (
                <S.MatchTime>{formattedTime}</S.MatchTime>
            )}
            <S.LeagueName>{data.league.name}</S.LeagueName>
            <S.VenueInfo>
                <S.City>{data.fixture.venue.city}</S.City>
                <S.Stadium>{data.fixture.venue.name}</S.Stadium>
            </S.VenueInfo>
        </S.Wrapper>
    );
};

export default MatchInfoCard;
