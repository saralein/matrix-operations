describe('', function(){
  var matrix;
  beforeEach(function() {
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
  });
  it('gets the correct value in a matrix', function() {
    expect(getEntry(matrix, 2, 3)).toEqual(6);
  });
  it('sets the correct value in a matrix', function(){
    setEntry(matrix, 4, 1, 16)
    expect(matrix).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [16, 11, 12]]);
  });
  it('multiples matrix by a scalar', function(){
    expect(scalarMultiple(matrix, 2)).toEqual([[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]);
  });
  it('does not add matrices of different sizes', function(){
    var offsizeAddition = [[1, 2], [3, 4, 5]];
    expect(function() {matrixAddition(matrix, offsizeAddition)}).toThrow(new Error('Matrices are not the same size.'));
  });
  it('adds matrices of the same size', function(){
    var samesizeAddition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    expect(matrixAddition(matrix, samesizeAddition)).toEqual([[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]);
  });
  it('returns an identity matrix of size 3x3', function(){
    expect(createIdentityMatrix(3)).toEqual([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  });
  it('returns an identity matrix of size 5x5', function(){
    expect(createIdentityMatrix(5)).toEqual([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);
  });
});
