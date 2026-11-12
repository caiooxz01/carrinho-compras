let totalDaCompra = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let textoDoProduto = produto.split(' - R$');
    let nomeDoProduto = textoDoProduto[0];
    let valor = parseInt(textoDoProduto[1]);  
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let subTotal = quantidade * valor;
    
    if (quantidade > 0) {
        let carrinhoDeCompras = document.getElementById('lista-produtos');
        carrinhoDeCompras.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
        
        totalDaCompra += (valor * quantidade);
        let totalCarrinhoDeCompras = document.getElementById('valor-total');    
        totalCarrinhoDeCompras.innerHTML = `<span>R$${totalDaCompra}</span>`;
    } else {
        alert('Digite uma quantidade válida');
        return;
    };
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