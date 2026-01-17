import useMatchOverviewPanelStore from "../../match-overview-panel.store";
import * as S from "../recent-match-result.styles";
import * as ErrorStyles from "./error-state.styles";

const ErrorState = () => {
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    return (
        <S.Container>
            <S.Header>맨체스터 유나이티드 최근 경기</S.Header>
            <ErrorStyles.ErrorContent>
                <ErrorStyles.ErrorMessage>
                    경기 정보를 불러오는데 실패했습니다.
                    <br />
                    잠시 후 다시 시도해주세요.
                </ErrorStyles.ErrorMessage>
                <ErrorStyles.RetryButton onClick={() => actions.fetchRecentMatches()}>
                    다시 시도
                </ErrorStyles.RetryButton>
            </ErrorStyles.ErrorContent>
        </S.Container>
    );
};

export default ErrorState;

