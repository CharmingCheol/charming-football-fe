const WIN_HEIGHT = 1080;

export const calcVh = (val: number): string => {
    return `${(val / WIN_HEIGHT) * 100}vh`;
};
