let a = [1];
let b = [72, 48];

function getTotalX(a, b) {
    // Write your code here
    let output = [];
    // track int
    for (let i = 1; i <= Math.max(...b); i++) {
        let modules = 0;
        // track elems of a
        for (let j = 0; j < a.length; j++) {
            modules += i % a[j];
        }
        if (modules === 0) {
            // track elems of b
            for (let k = 0; k < b.length; k++) {
                modules += b[k] % i;
            }
            if (modules === 0) {
                output.push(i);
            } else continue;
        } else continue;
    }
    return output.length;
}
console.log(getTotalX(a, b));

// olhei no tutorial voltar depois e enteder
//24/08/2022 22:12