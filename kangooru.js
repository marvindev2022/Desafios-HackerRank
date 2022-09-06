let x1 = 1817;
let v1 = 9931;
let x2 = 8417;
let v2 = 190;

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let k1 = x1 ;
    let k2 = x2 ;
    let yesNo = "NO";

    for (let i = 0; i < 10000; i++) {
        k1 += v1;
        k2 += v2;

        if (k1 === k2) {
            yesNo = "YES";
        }
    } return yesNo
}

console.log(kangaroo(x1, v1, x2, v2));
