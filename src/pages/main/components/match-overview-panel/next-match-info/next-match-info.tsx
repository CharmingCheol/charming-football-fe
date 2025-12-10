import { useEffect } from "react";
import * as S from "./next-match-info.styles";
import useNextMatchStore from "./next-match-info.store";
import NextMatchInfoSkeleton from "./next-match-info.skeleton";

const NextMatchInfo = () => {
    const nextMatch = useNextMatchStore((state) => state.nextMatch);
    const isLoading = useNextMatchStore((state) => state.isLoading);
    const { fetchNextMatch } = useNextMatchStore((state) => state.actions);
    const { getFormattedTime, getFormattedLeagueName } = useNextMatchStore((state) => state.computed);

    useEffect(() => {
        fetchNextMatch();
    }, [fetchNextMatch]);

    if (isLoading) {
        return <NextMatchInfoSkeleton />;
    }

    if (!nextMatch) {
        return (
            <S.EmptyStateContainer>
                <S.EmptyStateTitle>예정된 경기가 없습니다</S.EmptyStateTitle>
                <S.EmptyStateDescription>다음 경기 일정이 확정되면 이곳에 표시됩니다</S.EmptyStateDescription>
            </S.EmptyStateContainer>
        );
    }

    return (
        <S.Container>
            <S.TeamCard>
                <S.TeamLogo src={nextMatch.home.logo} alt={nextMatch.home.name} />
                <S.TeamName>{nextMatch.home.name.toUpperCase()}</S.TeamName>
            </S.TeamCard>
            <S.MatchInfoCard>
                <S.MatchTime>{getFormattedTime()}</S.MatchTime>
                <S.LeagueName>{getFormattedLeagueName()}</S.LeagueName>
                <S.VenueInfo>
                    <S.City>{nextMatch.fixture.city}</S.City>
                    <S.Stadium>{nextMatch.fixture.stadium}</S.Stadium>
                </S.VenueInfo>
            </S.MatchInfoCard>
            <S.TeamCard>
                <S.TeamLogo src={nextMatch.away.logo} alt={nextMatch.away.name} />
                <S.TeamName>{nextMatch.away.name.toUpperCase()}</S.TeamName>
            </S.TeamCard>
        </S.Container>
    );
};

export default NextMatchInfo;
