import { useEffect } from "react";
import useMatchOverviewPanelStore from "../match-overview-panel.store";
import RecentMatchResultItem from "./recent-match-result-item/recent-match-result-item";
import Skeleton from "./skeleton/skeleton";
import ErrorState from "./error-state/error-state";
import * as S from "./recent-match-result.styles";

const RecentMatchResult = () => {
    const recentMatches = useMatchOverviewPanelStore((state) => state.recentMatches);
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    useEffect(() => {
        actions.fetchRecentMatches();
    }, [actions]);

    if (recentMatches.status === "request") {
        return <Skeleton />;
    }

    if (recentMatches.status === "failure") {
        return <ErrorState />;
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
