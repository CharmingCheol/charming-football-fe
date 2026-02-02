import { useEffect } from "react";
import useMatchOverviewPanelStore from "./match-overview-panel.store";
import NextMatchInfo from "./next-match-info/next-match-info";
import RecentMatchResult from "./recent-match-result/recent-match-result";
import * as S from "./match-overview-panel.styles";

const MatchOverviewPanel = () => {
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    useEffect(() => {
        actions.fetchNextMatch();
    }, [actions]);

    return (
        <S.Container>
            <S.NextMatchInfoWrapper>
                <NextMatchInfo />
            </S.NextMatchInfoWrapper>
            <S.RecentMatchResultWrapper>
                <RecentMatchResult />
            </S.RecentMatchResultWrapper>
            <S.Div3>
                <div>temp</div>
            </S.Div3>
        </S.Container>
    );
};

export default MatchOverviewPanel;
