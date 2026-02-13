import { useRecentMatches } from "@/queries/fixtures.query";
import RecentMatchResultItem from "./recent-match-result-item/recent-match-result-item";
import Skeleton from "./states/skeleton/skeleton";
import ErrorState from "./states/error-state/error-state";
import * as S from "./recent-match-result.styles";

const RecentMatchResult = () => {
    const { data, isLoading, isError, refetch } = useRecentMatches();

    if (isLoading) {
        return <Skeleton />;
    }

    if (isError) {
        return <ErrorState onRetry={refetch} />;
    }

    return (
        <S.Container>
            <S.Header>맨체스터 유나이티드 최근 경기</S.Header>
            <S.MatchList>
                {data?.map((match) => <RecentMatchResultItem key={match.fixture.id} data={match} />)}
            </S.MatchList>
        </S.Container>
    );
};

export default RecentMatchResult;
