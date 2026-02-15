import * as S from "./skeleton-state.styles";
import * as NextMatchInfo from "../../next-match-info.styles";
import * as TeamCard from "../../team-card/team-card.styles";
import * as MatchInfoCard from "../../match-info-card/match-info-card.styles";

const SkeletonState = () => {
    return (
        <NextMatchInfo.Container>
            <MatchInfoCard.Wrapper>
                <S.MatchTime />
                <S.LeagueName />
                <MatchInfoCard.VenueInfo>
                    <S.Venue />
                    <S.Venue />
                </MatchInfoCard.VenueInfo>
            </MatchInfoCard.Wrapper>
            <NextMatchInfo.TeamCardsWrapper>
                <TeamCard.Wrapper>
                    <S.TeamLogo />
                    <S.TeamName />
                </TeamCard.Wrapper>
                <TeamCard.Wrapper>
                    <S.TeamLogo />
                    <S.TeamName />
                </TeamCard.Wrapper>
            </NextMatchInfo.TeamCardsWrapper>
        </NextMatchInfo.Container>
    );
};

export default SkeletonState;
