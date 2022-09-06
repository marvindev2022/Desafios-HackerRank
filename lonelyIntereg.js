// Dado um array de inteiros, onde todos os elementos, exceto um, ocorrem duas vezes, encontre o elemento único.
 // Exemplo 
 // O elemento único é . 
 // Descrição da Função 
 // Complete a funçãoloneinteger no editor abaixo. 
 //loneinteger tem o(s) seguinte(s) parâmetro(s): 
 // int a[n]: um array de inteiros 
 // Retorna 
 // int: o elemento que ocorre apenas uma vez 
 // Formato de entrada 
 // A primeira linha contém um único inteiro, , o número de inteiros na matriz. 
 // A segunda linha contém inteiros separados por espaço que descrevem os valores em . 
 // Restrições // ° 1 < n < 100 
 // ° É garantido que "n" é um número ímpar e que existe um elemento único. 
 // ° 0 < a[i] < 100, onde 0 < i < n.

let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
    // Write your code here
    let ans = 0;
    for (let i = 0; i < a.length; i++) ans ^= a[i];
    return ans;
}
console.log(lonelyinteger(a));
