let arr = [7, , 69, , 2, , 221, , 8974];

function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let minimum = 0;
    let maximum = 0;
    for (let i of arr) {
        if (i >= 0 || i < 0) {
            sum += i;
        }
        maximum = arr.reduce(function (prev, current) {
            return prev > current ? prev : current;
        });
        minimum = arr.reduce(function (prev, current) {
            return prev < current ? prev : current;
        });
    }
    return [sum - maximum, sum - minimum];
}
console.log(miniMaxSum(arr));
