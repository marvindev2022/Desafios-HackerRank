let price = 2500;
let desconto = 10 / 100;
let parcelas = 10;
let pagamentoAVista = false;
let total = 0;

if (pagamentoAVista === true) {
    total += price - price * desconto;
} else {
    total += price / parcelas;
    console.log(
        `Total:R$ ${price.toFixed(2)}\nParcelas:${parcelas}x R$ ${total.toFixed(
            2
        )}`
    );
}
