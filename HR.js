let a = [1, 2, 3];
let b = [3, 2, 1];

function compareTriplets() {
    // Write your code here
    let scoreA = 0;
    let scoreB = 0;

    scoreA =
        (a[0] > b[0] ? 1 : 0) + (a[1] > b[1] ? 1 : 0) + (a[2] > b[2] ? 1 : 0);
    scoreB =
        (a[0] < b[0] ? 1 : 0) + (a[1] < b[1] ? 1 : 0) + (a[2] < b[2] ? 1 : 0);

    console.log(`${scoreA} ${scoreB}`);
}
compareTriplets(a, b);
