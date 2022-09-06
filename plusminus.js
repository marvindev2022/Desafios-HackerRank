let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  // Write your code here
  let positiv = 0
  let negative = 0;
  let zero = 0;
  for (let i of arr) {
    if (i > 0) {
      positiv++;      
    } else if (i < 0) {
      negative++;
    } else {
      zero++;
    }
  }return `${(positiv / arr.length).toFixed(6)}\n${(
    negative / arr.length
  ).toFixed(6)}\n${(zero / arr.length).toFixed(6)}`;
  
}
console.log(plusMinus(arr));
