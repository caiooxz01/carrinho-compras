let totalDaCompra = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let textoDoProduto = produto.split(' - R$');
    let nomeDoProduto = textoDoProduto[0];
    let valor = parseInt(textoDoProduto[1]);  
    let quantidade = parseInt(document.getElementById('quantidade').value);
    totalDaCompra += (valor * quantidade);

    let carrinhoDeCompras = document.getElementById('lista-produtos');
    carrinhoDeCompras.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valor}</span>
        </section>`;

    let totalCarrinhoDeCompras = document.getElementById('valor-total');    
    totalCarrinhoDeCompras.innerHTML = `<span>R$${totalDaCompra}</span>`;
    document.getElementById('quantidade').value = 0
};

function limpar() {
    totalDaCompra = 0;
    let totalCarrinhoDeCompras = document.getElementById('valor-total');    
    totalCarrinhoDeCompras.innerHTML = `<span>R$${totalDaCompra}</span>`;

    let carrinhoDeCompras = document.getElementById('lista-produtos');
    carrinhoDeCompras.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span><span class="texto-azul"></span>
        </section>`;
};