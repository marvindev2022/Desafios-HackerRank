let s = [1, 2, 1, 3, 2, 1];
let d = 3;
let m = 2;

function birthday(s, d, m) {
    let output = 0;
    let lastIteration = 0;
    for (let i = 1; i <= s.length; i++) {
        let sum = 0;
        // run this loop m number of times
        for (let j = lastIteration, k = 1; k <= m; k++, j++) {
            sum += s[j];
        }
        lastIteration++;
        if (sum === d) {
            output++;
        } else continue;
    }
    return output;
}
console.log(birthday(s, d, m));

// let x = 0;
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//     let sum = s[x];
//     if (s[i] + sum === d) {
//         count++;
//         x += 2;
//     }
//     if (s.length === m && s[i] === d) {
//         count = 1;
//     }
// }
// return count;
