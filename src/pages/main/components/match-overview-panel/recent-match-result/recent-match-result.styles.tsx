import styled from "@emotion/styled";
import { calcRem, colors, typography } from "@/styles";

export const Container = styled.article({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.black700,
    borderRadius: calcRem(12),
    overflow: "hidden",
});

export const Header = styled.div({
    display: "flex",
    alignItems: "center",
    gap: calcRem(4),
    padding: `${calcRem(16)} ${calcRem(20)}`,
    ...typography.p4,
    color: colors.gray200,
    background: `linear-gradient(90deg, ${colors.black600} 0%, transparent 100%)`,
    borderBottom: `1px solid ${colors.black500}`,
});

export const MatchList = styled.ul({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: 0,
    padding: 0,
});
