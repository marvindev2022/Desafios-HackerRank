let candles = [
    3, 2, 1, 3, 2, 6, 5, 4, 1, 2, 3, 0, 2, 3, 1, 5, 6, 4, 6, 5, 1, 2, 6, 3, 2,
    0, 1, 2, 5, 6, 3, 5, 2, 1, 3, 6, 6, 5, 2, 2,
];

function birthdayCakeCandles(candles) {
    let bigCandle = 0;
    let count = 0;
    candles.sort((a, b) => b - a);
    bigCandle = candles[0];

    candles.forEach((candle) => {
        if (candle === bigCandle) {
            count += 1;
        }
    });
    return count;
}
console.log(birthdayCakeCandles(candles));
