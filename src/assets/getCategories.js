export const getCategories = (arr, categObj = '') => {
    if (arr) {
        const categories = categObj ? categObj : {};
        for (let i = 0; i < arr.length; i++) {
            if (categories[arr[i].category]) {
                categories[arr[i].category]++;
            } else {
                categories[arr[i].category] = 1;
            }
        }
        return categories;
    }
};
