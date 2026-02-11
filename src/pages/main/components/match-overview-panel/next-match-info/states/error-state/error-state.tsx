import * as S from "./error-state.styles";

interface ErrorStateProps {
    onRetry: () => void;
}

const ErrorState = ({ onRetry }: ErrorStateProps) => {
    return (
        <S.Container>
            <S.Title>경기 정보를 불러올 수 없습니다</S.Title>
            <S.Description>잠시 후 다시 시도해주세요</S.Description>
            <S.RetryButton onClick={onRetry}>다시 시도</S.RetryButton>
        </S.Container>
    );
};

export default ErrorState;
