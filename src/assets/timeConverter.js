export const timeConverter = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    const hours = ((minutes % 60) / 60).toFixed(0);
    return `${hours}h ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
};
