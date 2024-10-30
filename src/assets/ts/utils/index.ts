export const getCountInArr = <T = any>(value: T, arr: Array<T>) => {
    let count = 0;

    arr.forEach((item) => {
        if (item === value) count++;
    });

    return count;
};
