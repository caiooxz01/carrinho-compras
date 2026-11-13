# Carrinho de compras

Projeto que fiz durante o curso da Alura pra praticar JavaScript mexendo no DOM. O HTML e o CSS já vieram prontos do curso, e o JavaScript (`js/app.js`) foi a parte que eu desenvolvi.

É um site de simulação de compras: o usuário escolhe um produto numa lista, digita a quantidade, clica em Adicionar, e o item aparece no carrinho com o total da compra.

## O que ele faz

- Lista de opções com três produtos: Fone de ouvido (R$100), Celular (R$1400) e Oculus VR (R$5000)
- Campo de quantidade
- Botão Adicionar, que coloca o produto na lista "Produtos no carrinho"
- O total é somado e atualizado a cada produto adicionado

## O que eu pratiquei

- Pegar elementos da página com `getElementById`
- Ler o `value` de um `select`
- Separar o nome e o preço do produto com `split`
- Transformar texto em número com `parseInt`
- Montar o HTML dos itens com template strings e `innerHTML`
- Usar uma variável fora da função pra guardar o total acumulado

## Como rodar

Não precisa instalar nada. É só baixar o projeto e abrir o arquivo HTML no navegador.

## Estrutura

- arquivo HTML da página
- `style.css`: estilos
- `js/app.js`: lógica do carrinho
- `assets/`: imagens e ícones

## O que ainda falta

- Botão Limpar
- Validar a quantidade (campo vazio, zero e número negativo)
- Mudar a cor do botão conforme o carrinho tem ou não produtos
