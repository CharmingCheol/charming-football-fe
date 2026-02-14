import * as S from "./skeleton-state.styles";
import { Container, Header, MatchList } from "../../recent-match-result.styles";

const SkeletonState = () => {
    return (
        <Container>
            <Header>
                <S.Header />
            </Header>
            <MatchList>
                {Array.from({ length: 5 }).map((_, index) => (
                    <S.SkeletonItem key={index}>
                        <S.MatchDate />
                        <S.VenueType />
                        <S.TeamLogo />
                        <S.TeamName />
                        <S.ResultIndicator />
                        <S.Score />
                    </S.SkeletonItem>
                ))}
            </MatchList>
        </Container>
    );
};

export default SkeletonState;
