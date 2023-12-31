export const categories = [
    { title: 'General Knowledge', key: 9 },
    { title: 'Books', key: 10 },
    { title: 'Films', key: 11 },
    { title: 'Music', key: 12 },
    { title: 'Musicals and Theaters', key: 13 },
    { title: 'Television', key: 14 },
    { title: 'Video Games', key: 15 },
    { title: 'Board Games', key: 16 },
    { title: 'Science and Nature', key: 17 },
    { title: 'Computer', key: 18 },
    { title: 'Mathematics', key: 19 },
    { title: 'Mythology', key: 20 },
    { title: 'Sports', key: 21 },
    { title: 'Geography', key: 22 },
    { title: 'History', key: 23 },
    { title: 'Politics', key: 24 },
    { title: 'Celebrities', key: 26 },
    { title: 'Animals', key: 27 },
    { title: 'Vehicles', key: 28 },
    { title: 'Comics', key: 29 },
    { title: 'Gadgets', key: 30 },
    { title: 'Japanese Anime', key: 31 },
    { title: 'Cartoon and Animations', key: 32 },
];
export const difficulties = ['easy', 'medium', 'hard', 'random'];

export const WORD = 'ABCD';

export const chartOptions = {
    title: 'Total answering rate',
    pieHole: 0.4,
    is3D: false,
    colors: ['#00bcd4', '#ff0057'],
};

export const catCharOptions = {
    title: 'Categories of played and correct answers',
    legend: 'none',
    pieSliceText: 'label',
    slices: {
        4: { offset: 0.2 },
        12: { offset: 0.3 },
        14: { offset: 0.4 },
        15: { offset: 0.5 },
    },
    colors: ['#00bcd4'],
};
