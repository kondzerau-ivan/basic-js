module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error';
    }
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        }
        if (arr[i] === '--discard-prev' && newArr.length > 0) {
            newArr.pop();
        }
        if (arr[i] === '--double-next' && i < arr.length - 1) {
            newArr.push(arr[i + 1]);
        }
        if (arr[i] === '--double-prev' && i > 1) {
            newArr.push(arr[i - 1]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
