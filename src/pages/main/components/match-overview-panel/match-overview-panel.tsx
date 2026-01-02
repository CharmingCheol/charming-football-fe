import NextMatchInfo from "./next-match-info/next-match-info";
import * as S from "./match-overview-panel.styles";
import RecentMatchResult from "./recent-match-result/recent-match-result";

const MatchOverviewPanel = () => {
    return (
        <S.Container>
            <S.NextMatchInfoWrapper>
                <NextMatchInfo />
            </S.NextMatchInfoWrapper>
            <S.RecentMatchResultWrapper>
                <RecentMatchResult />
            </S.RecentMatchResultWrapper>
            <S.Div3>3</S.Div3>
        </S.Container>
    );
};

export default MatchOverviewPanel;
