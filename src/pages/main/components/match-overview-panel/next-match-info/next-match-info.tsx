import { useNextMatch } from "@/queries/fixtures.query";
import * as S from "./next-match-info.styles";
import SkeletonState from "./states/skeleton-state/skeleton-state";
import EmptyState from "./states/empty-state/empty-state";
import ErrorState from "./states/error-state/error-state";
import TeamCard from "./team-card/team-card";
import MatchInfoCard from "./match-info-card/match-info-card";

const NextMatchInfo = () => {
    const { data, isLoading, isError, refetch } = useNextMatch();

    if (isLoading) {
        return <SkeletonState />;
    }

    if (isError) {
        return <ErrorState onRetry={refetch} />;
    }

    if (!data) {
        return <EmptyState />;
    }

    return (
        <S.Container>
            <MatchInfoCard />
            <S.TeamCardsWrapper>
                <TeamCard data={data.teams.home} />
                <TeamCard data={data.teams.away} />
            </S.TeamCardsWrapper>
        </S.Container>
    );
};

export default NextMatchInfo;
