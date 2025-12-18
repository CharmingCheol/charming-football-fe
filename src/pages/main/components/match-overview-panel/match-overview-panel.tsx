import NextMatchInfo from "./next-match-info/next-match-info";
import * as S from "./match-overview-panel.styles";

const MatchOverviewPanel = () => {
    return (
        <S.Container>
            <S.NextMatchInfoWrapper>
                <NextMatchInfo />
            </S.NextMatchInfoWrapper>
            <S.Div2>2</S.Div2>
            <S.Div3>3</S.Div3>
        </S.Container>
    );
};

export default MatchOverviewPanel;
