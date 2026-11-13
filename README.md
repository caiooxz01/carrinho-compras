# Carrinho de compras

Projeto que fiz durante o curso da Alura pra praticar JavaScript mexendo no DOM. O HTML e o CSS já vieram prontos do curso, e o JavaScript (`js/app.js`) foi a parte que eu desenvolvi.

É um site de simulação de compras: o usuário escolhe um produto numa lista, digita a quantidade, clica em Adicionar, e o item aparece no carrinho com o subtotal e o total da compra.

## O que ele faz

- Lista de opções com três produtos: Fone de ouvido (R$100), Celular (R$1400) e Oculus VR (R$5000)
- Campo de quantidade
- Botão Adicionar: coloca o produto na lista "Produtos no carrinho", mostrando a quantidade, o nome e o subtotal daquele item
- O total da compra é somado e atualizado a cada produto adicionado
- Validação da quantidade: se o campo estiver vazio ou tiver zero, número negativo ou texto, aparece um alerta e nada é adicionado
- Depois de adicionar, o campo de quantidade volta pra zero
- Botão Limpar: esvazia a lista e zera o total

## O que eu pratiquei

- Pegar elementos da página com `getElementById`
- Ler o `value` de uma lista de opções (`select`)
- Separar o nome e o preço do produto com `split`
- Transformar texto em número com `parseInt`
- Usar `if` e `else` pra validar a quantidade, junto com o `alert`
- Montar o HTML dos itens com template strings e `innerHTML`, usando `+=` pra não apagar os itens anteriores
- Guardar o total numa variável fora da função pra ele acumular entre um clique e outro
- Ligar as funções `adicionar()` e `limpar()` aos botões pelo `onclick`

## Como rodar

Não precisa instalar nada. É só baixar o projeto e abrir o arquivo HTML no navegador.

## Estrutura

- arquivo HTML da página
- `style.css`: estilos
- `js/app.js`: lógica do carrinho
- `assets/`: imagens e ícones

## Observação

Se o usuário digitar um número decimal na quantidade (por exemplo 2.5), o `parseInt` considera só a parte inteira, então o item entra com quantidade 2.
