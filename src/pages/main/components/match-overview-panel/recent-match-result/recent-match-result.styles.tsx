import styled from "@emotion/styled";
import { clampVh, colors, typography } from "@/styles";

export const Container = styled.article({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: colors.black700,
    borderRadius: clampVh(12),
    overflow: "hidden",
});

export const Header = styled.div({
    display: "flex",
    alignItems: "center",
    gap: clampVh(4),
    padding: `${clampVh(16)} ${clampVh(20)}`,
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
    height: "100%",
});
