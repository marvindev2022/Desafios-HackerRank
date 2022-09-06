let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    let appleHome = 0;
    let orangeHome = 0;
    for (let i of apples) {
        if (i + a >= s && i + a <= t) {
            appleHome++;
        }
    }
    for (let index of oranges) {
        if (index + b <= t && index + b >= s) {
            orangeHome++;
        }
    }

    return [appleHome, orangeHome];
}
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
