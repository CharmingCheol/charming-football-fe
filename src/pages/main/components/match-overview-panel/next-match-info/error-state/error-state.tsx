import * as S from "./error-state.styles";
import useMatchOverviewPanelStore from "../../match-overview-panel.store";

const ErrorState = () => {
    const actions = useMatchOverviewPanelStore((state) => state.actions);

    const handleRetry = () => {
        actions.fetchNextMatch();
    };

    return (
        <S.Container>
            <S.Title>경기 정보를 불러올 수 없습니다</S.Title>
            <S.Description>잠시 후 다시 시도해주세요</S.Description>
            <S.RetryButton onClick={handleRetry}>다시 시도</S.RetryButton>
        </S.Container>
    );
};

export default ErrorState;
