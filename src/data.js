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

export const symConverter = (str) => {
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&micro;/g, 'µ');
    return str;
};
