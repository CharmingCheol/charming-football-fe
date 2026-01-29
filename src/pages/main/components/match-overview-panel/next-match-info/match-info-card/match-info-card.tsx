import { useMemo } from "react";
import * as S from "./match-info-card.styles";
import useMatchOverviewPanelStore from "../../match-overview-panel.store";

const MatchInfoCard = () => {
    const nextMatchData = useMatchOverviewPanelStore((state) => state.nextMatch.data) as ApiFootballFixture;

    const formattedTime = useMemo(() => {
        const date = new Date(nextMatchData.fixture.date);
        const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = days[date.getDay()];
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hours}:${minutes}`;
    }, [nextMatchData.fixture.date]);

    const isLive = useMemo(() => {
        const liveStatuses = ["1H", "2H", "HT", "ET", "P", "LIVE", "BT"];
        return liveStatuses.includes(nextMatchData.fixture.status.short);
    }, [nextMatchData.fixture.status.short]);

    const elapsedTime = useMemo(() => {
        return nextMatchData.fixture.status.elapsed ?? 0;
    }, [nextMatchData.fixture.status.elapsed]);

    const score = useMemo(() => {
        if (!isLive) return null;
        return {
            home: nextMatchData.goals.home ?? 0,
            away: nextMatchData.goals.away ?? 0,
        };
    }, [nextMatchData.goals.home, nextMatchData.goals.away, isLive]);

    return (
        <S.Wrapper>
            <S.StatusRow>
                <S.MatchStatus isLive={isLive}>{isLive ? "경기중" : "경기전"}</S.MatchStatus>
                {isLive && elapsedTime ? <S.ElapsedTime>{elapsedTime}분</S.ElapsedTime> : null}
            </S.StatusRow>
            {isLive && score ? (
                <S.ScoreWrapper>
                    <S.Score>{score.home}</S.Score>
                    <S.ScoreDivider>:</S.ScoreDivider>
                    <S.Score>{score.away}</S.Score>
                </S.ScoreWrapper>
            ) : (
                <S.MatchTime>{formattedTime}</S.MatchTime>
            )}
            <S.LeagueName>{nextMatchData.league.name}</S.LeagueName>
            <S.VenueInfo>
                <S.City>{nextMatchData.fixture.venue.city}</S.City>
                <S.Stadium>{nextMatchData.fixture.venue.name}</S.Stadium>
            </S.VenueInfo>
        </S.Wrapper>
    );
};

export default MatchInfoCard;
