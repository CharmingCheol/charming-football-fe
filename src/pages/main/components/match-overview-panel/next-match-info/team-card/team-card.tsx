import fallbackLogo from "@/assets/images/fallback_team_logo.png";
import * as S from "./team-card.styles";

export type TeamCardProps = NextMatchFixture["teams"][keyof NextMatchFixture["teams"]];

const TeamCard = ({ data }: { data: TeamCardProps }) => {
    return (
        <S.Wrapper>
            <S.TeamLogo src={data.logo} alt={data.name} onError={(e) => (e.currentTarget.src = fallbackLogo)} />
            <S.TeamName>{data.name.toUpperCase()}</S.TeamName>
        </S.Wrapper>
    );
};

export default TeamCard;
