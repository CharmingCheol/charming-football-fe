import * as S from "../recent-match-result.styles";
import * as Skeleton from "./skeleton.styles";

const RecentMatchResultSkeleton = () => {
    return (
        <S.Container>
            <S.Header>
                <Skeleton.Header />
            </S.Header>
            <S.MatchList>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton.SkeletonItem key={index}>
                        <Skeleton.MatchDate />
                        <Skeleton.VenueType />
                        <Skeleton.TeamLogo />
                        <Skeleton.TeamName />
                        <Skeleton.ResultIndicator />
                        <Skeleton.Score />
                    </Skeleton.SkeletonItem>
                ))}
            </S.MatchList>
        </S.Container>
    );
};

export default RecentMatchResultSkeleton;
