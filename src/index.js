
module.exports = function towelSort(matrix) {
  if(!matrix) return [];

  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    let row = [...matrix[i]];
    if(i % 2 === 1) {
      row.reverse();
    }
    result = result.concat(row);
  }
  
  return result;
}
