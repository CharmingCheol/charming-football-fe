import { clampVh, colors, typography } from "@/styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: clampVh(16),
    flex: 1,
    minWidth: 0,
    padding: `${clampVh(32)} ${clampVh(24)}`,
    backgroundColor: colors.black700,
    borderRadius: clampVh(12),
    boxSizing: "border-box",
});

export const TeamLogo = styled.img({
    width: clampVh(120),
    height: clampVh(120),
    objectFit: "contain",

    "@media (max-width: 768px)": {
        width: clampVh(60),
        height: clampVh(60),
    },
});

export const TeamName = styled.span({
    ...typography.h7,
    width: "100%",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: 0,
});
