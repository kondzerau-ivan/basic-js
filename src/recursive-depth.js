module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        if (arr.some(function (a) {
            return Array.isArray(a);
        })) {
            depth++;
            return this.calculateDepth(arr.flat(), depth);
        } else {
            return depth;
        }
    }
};  