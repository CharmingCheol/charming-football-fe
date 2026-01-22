import { useEffect } from "react";
import * as S from "./next-match-info.styles";
import useMatchOverviewPanelStore from "../match-overview-panel.store";
import Skeleton from "./skeleton/skeleton";
import EmptyState from "./empty-state/empty-state";
import ErrorState from "./error-state/error-state";
import TeamCard from "./team-card/team-card";
import MatchInfoCard from "./match-info-card/match-info-card";

const NextMatchInfo = () => {
    const nextMatch = useMatchOverviewPanelStore((state) => state.nextMatch);
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    useEffect(() => {
        actions.fetchNextMatch();
    }, [actions]);

    if (nextMatch.status === "request") {
        return <Skeleton />;
    }

    if (nextMatch.status === "failure") {
        return <ErrorState />;
    }

    if (!nextMatch.data) {
        return <EmptyState />;
    }

    return (
        <S.Container>
            <MatchInfoCard />
            <S.TeamCardsWrapper>
                <TeamCard data={nextMatch.data.teams.home} />
                <TeamCard data={nextMatch.data.teams.away} />
            </S.TeamCardsWrapper>
        </S.Container>
    );
};

export default NextMatchInfo;
