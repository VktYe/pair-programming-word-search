const wordSearch = (letters, word) => {
  if (!word || typeof word !== 'string') return false;
  if (!letters || !Array.isArray(letters) || letters.length === 0) return false;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    const reversedL = l.split('').reverse().join('');
    if (l.includes(word) || reversedL.includes(word)) return true;
  }

  const transposed = transpose(letters);
  const verticalJoin  = transposed.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    const reversedL = l.split('').reverse().join('');
    if (l.includes(word) || reversedL.includes(word)) return true;
  }
  return false;
    
};
const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for (let j = 0; j < matrix.length; j++) {
      newArr.push(matrix[j][i]);
    }
    result.push(newArr);
  }
  return result;
};

module.exports = wordSearch;