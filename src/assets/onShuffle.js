export const onShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
};
