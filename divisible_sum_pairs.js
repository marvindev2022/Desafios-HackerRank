let n = 9;
let k = 3;
let ar = [1, 2, 1, 2, 3, 1, 3, 2, 3];

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    
    let count = 0;
    ar.forEach((numb, indice) => {
        for (let i = indice + 1; i < ar.length; i++) {
            if ((numb + ar[i]) % k === 0) {
                count++;
            }
        }
    });
    return count;
}
console.log(divisibleSumPairs(n, k, ar));
