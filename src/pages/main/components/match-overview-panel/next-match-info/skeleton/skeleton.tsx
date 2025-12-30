import * as S from "../next-match-info.styles";
import * as Skeleton from "./skeleton.styles";

const NextMatchInfoSkeleton = () => {
    return (
        <S.Container>
            <S.TeamCard>
                <Skeleton.TeamLogo />
                <Skeleton.TeamName />
            </S.TeamCard>
            <S.MatchInfoCard>
                <Skeleton.MatchTime />
                <Skeleton.LeagueName />
                <S.VenueInfo>
                    <Skeleton.Venue />
                    <Skeleton.Venue />
                </S.VenueInfo>
            </S.MatchInfoCard>
            <S.TeamCard>
                <Skeleton.TeamLogo />
                <Skeleton.TeamName />
            </S.TeamCard>
        </S.Container>
    );
};

export default NextMatchInfoSkeleton;
