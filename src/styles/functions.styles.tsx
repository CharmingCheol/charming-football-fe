const BASE_FONT_SIZE = 16;

export const calcRem = (val: number): string => {
    return `${val / BASE_FONT_SIZE}rem`;
};
