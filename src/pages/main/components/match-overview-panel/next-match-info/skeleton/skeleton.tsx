import * as NextMatchInfo from "../next-match-info.styles";
import * as Skeleton from "./skeleton.styles";
import * as TeamCard from "../team-card/team-card.styles";
import * as MatchInfoCard from "../match-info-card/match-info-card.styles";

const SkeletonUI = () => {
    return (
        <NextMatchInfo.Container>
            <TeamCard.Wrapper>
                <Skeleton.TeamLogo />
                <Skeleton.TeamName />
            </TeamCard.Wrapper>
            <MatchInfoCard.Wrapper>
                <Skeleton.MatchTime />
                <Skeleton.LeagueName />
                <MatchInfoCard.VenueInfo>
                    <Skeleton.Venue />
                    <Skeleton.Venue />
                </MatchInfoCard.VenueInfo>
            </MatchInfoCard.Wrapper>
            <TeamCard.Wrapper>
                <Skeleton.TeamLogo />
                <Skeleton.TeamName />
            </TeamCard.Wrapper>
        </NextMatchInfo.Container>
    );
};

export default SkeletonUI;
