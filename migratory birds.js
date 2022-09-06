let arr = [1, 2, 3, 4, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    // Write your code here
    const count = arr.reduce((accumulator, value) => {
        return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});

    const maxValue = Object.entries(count).sort((x, y) => y[1] - x[1])[0];
    return maxValue[0];
}
console.log(migratoryBirds(arr));

// A variável contagem é um objeto que conta o número de duplicatas usando o método .reduce().

// O var maxValue nos dá o primeiro par de valor-chave mais alto, que armazenamos em uma matriz. Devolvemos o primeiro elemento que é a nossa resposta.

// O método retorna um novo objeto que contém os pares chave/valor para cada índice no array.entries()Array Iterator
