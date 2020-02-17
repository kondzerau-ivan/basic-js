module.exports = function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (/^\^\^$/.test(matrix[i][j])) {
        sum++;
      }
    }
  }
  return sum;
};
