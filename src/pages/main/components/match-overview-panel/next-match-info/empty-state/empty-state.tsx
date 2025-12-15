import * as S from "./empty-state.styles";

const EmptyState = () => {
    return (
        <S.Container>
            <S.Title>예정된 경기가 없습니다</S.Title>
            <S.Description>다음 경기 일정이 확정되면 이곳에 표시됩니다</S.Description>
        </S.Container>
    );
};

export default EmptyState;
