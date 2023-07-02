export const merge = (arrOfArr, obj) => {
    const mergedArr = arrOfArr.map((arr) => {
        if (arr[0] in obj) {
            arr[1] = obj[arr[0]];
        } else {
            arr[1] = 0;
        }
        return [arr[0].replace(/Entertainment: /g, ''), arr[1]];
    });
    return mergedArr;
};
