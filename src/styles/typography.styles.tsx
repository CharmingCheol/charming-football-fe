import { colors, calcVh } from "./index";

const textStyle = (size: number, height: number) => ({
    fontSize: calcVh(size),
    lineHeight: calcVh(height),
    color: colors.gray100,
});

const titleStyle = (size: number, height: number) => ({
    ...textStyle(size, height),
    fontWeight: "bold",
});

export const typography = {
    h1: titleStyle(72, 72),
    h2: titleStyle(64, 64),
    h3: titleStyle(48, 48),
    h4: titleStyle(36, 36),
    h5: titleStyle(28, 28),
    h6: titleStyle(24, 24),
    h7: titleStyle(21, 21),
    h8: titleStyle(18, 18),
    h9: titleStyle(16, 16),
    h10: titleStyle(14, 14),

    p1: textStyle(24, 28),
    p2: textStyle(21, 28),
    p3: textStyle(16, 24),
    p4: textStyle(14, 22),
    p5: textStyle(12, 20),
    p6: textStyle(12, 20),
} as const;
