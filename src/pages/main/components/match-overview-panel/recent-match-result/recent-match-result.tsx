import { useEffect } from "react";
import useMatchOverviewPanelStore from "../match-overview-panel.store";
import RecentMatchResultItem from "./recent-match-result-item/recent-match-result-item";
import RecentMatchResultSkeleton from "./skeleton/skeleton";
import * as S from "./recent-match-result.styles";

const RecentMatchResult = () => {
    const recentMatches = useMatchOverviewPanelStore((state) => state.recentMatches);
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    useEffect(() => {
        actions.fetchRecentMatches();
    }, [actions]);

    if (recentMatches.isLoading) {
        return <RecentMatchResultSkeleton />;
    }

    return (
        <S.Container>
            <S.Header>맨체스터 유나이티드 최근 경기</S.Header>
            <S.MatchList>
                {recentMatches.data.map((match) => (
                    <RecentMatchResultItem key={match.fixture.date.toString()} data={match} />
                ))}
            </S.MatchList>
        </S.Container>
    );
};

export default RecentMatchResult;
