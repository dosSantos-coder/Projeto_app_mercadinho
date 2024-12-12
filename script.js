const lista_compras = [] // Array que armazena os produtos do mercado
const marca_produtos = {} // fazer um mapa que associe um produto a uma marca

adicionarProduto = produto => { //Arrow function para adicionar produtos ao carrinho
    lista_compras.push(produto)

    console.log(`O Produto: ${produto} foi adicionado com sucesso`)
}

consultaCarrinho = () => { //Arrow function para mastrar os itens adicionados ao Array
    // O Tamplate Sting pode adicionar quebra de linhas, quebrando o as linhas de conteúdo no código! 
    console.log(`Os produtos: 
    ${lista_compras} estão no carrinho`)
}

aoQuadrado = x =>  { // Uso da Arrow String para para mostrar o quadrado de um número.
    console.log(`O resultado do quadrado de ${x} é ${x * x}`)
}
//Fazer o estoque dos itens! 
//Fazer um front-end simples para essa aplicação 
//Iniciar no React.js

adicionarProduto('Manteiga')
adicionarProduto('Pão')
adicionarProduto('Ovos')
adicionarProduto('Sal')
consultaCarrinho()

aoQuadrado(9)