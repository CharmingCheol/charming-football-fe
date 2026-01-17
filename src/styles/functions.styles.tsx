const WINDOW_HEIGHT = 1080;

export const calcRem = (val: number): string => {
    const vhValue = (val / WINDOW_HEIGHT) * 100;
    const minValue = val * 0.6;
    const maxValue = val * 1.2;

    return `clamp(${minValue}px, ${vhValue}vh, ${maxValue}px)`;
};
