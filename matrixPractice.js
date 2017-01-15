//get and set values on the matrices
//scalar multiple (multiple matrix by single value)
//addition
//create an identity matrix (all zeros, except ones on the diagonal)
//transpose
//multiplication

function adjustIndices(row, column) {
  return [row - 1, column - 1];
}

function getEntry(matrix, row, column) {
  var location = adjustIndices(row, column);
  return matrix[location[0]][location[1]];
}

function setEntry(matrix, row, column, value) {
  var location = adjustIndices(row, column);
  matrix[location[0]][location[1]] = value;
}

function checkMatrixSize(matrix) {
  return matrix.length + 'x' + matrix[0].length;
}

function sameLength(matrix1, matrix2) {
  return checkMatrixSize(matrix1) === checkMatrixSize(matrix2);
}

function forEachEntry(matrix, callback) {
  var output = [];
  for (var i = 0; i < matrix.length; i++) {
    var nestedArray = [];
    for (var j = 0; j < matrix[i].length; j++) {
      nestedArray.push(callback(matrix[i][j], i, j));
    }
    output.push(nestedArray);
  }
  return output;
}

function scalarMultiple(matrix, scalar) {
  return forEachEntry(matrix, function(entry) {
    return entry * scalar;
  });
}

function matrixAddition(matrix, addition) {
  if (!sameLength(matrix, addition)) {
    throw new Error('Matrices are not the same size.');
  } else {
    return forEachEntry(matrix, function(entry, i, j) {
      return entry + addition[i][j];
    });
  }
}

function createIdentityMatrix(dimension) {
  var output = [];
  for (var i = 0; i < dimension; i++) {
    var nestedArray = []
    for (var j = 0; j < dimension; j++) {
      if (i === j) {
        nestedArray.push(1);
      } else {
        nestedArray.push(0);
      }
    }
    output.push(nestedArray);
  }
  return output;
}

