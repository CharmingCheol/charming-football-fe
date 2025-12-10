import * as S from "./next-match-info.styles";

const NextMatchInfoSkeleton = () => {
    return (
        <S.Container>
            <S.TeamCard>
                <S.SkeletonTeamLogo />
                <S.SkeletonTeamName />
            </S.TeamCard>
            <S.MatchInfoCard>
                <S.SkeletonMatchTime />
                <S.SkeletonLeagueName />
                <S.VenueInfo>
                    <S.SkeletonVenue />
                    <S.SkeletonVenue />
                </S.VenueInfo>
            </S.MatchInfoCard>
            <S.TeamCard>
                <S.SkeletonTeamLogo />
                <S.SkeletonTeamName />
            </S.TeamCard>
        </S.Container>
    );
};

export default NextMatchInfoSkeleton;
