ar = [1, 3, 2, 1, 2, 3, 1, 2, 3, 1, 2];
n = ar.length;

function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    //1,1,1,1,2,2,2,2,3,3,3
    let sum = 0;
    let parametro = 0;

    for (let i = 1; i < n; i += 1) {
        if (ar[i] === ar[parametro]) {
            sum += 1;
            ar.
        }
        console.log(ar);
    }
    // return sum;
}

console.log(sockMerchant(n, ar));
