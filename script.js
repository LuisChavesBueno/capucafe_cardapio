let valorTotal = 0;

function detalhes(produtoElement) {
    const infoProduto = produtoElement.querySelector(".info");
    const imgProduto = produtoElement.querySelector(".img");

    if (infoProduto.style.display === "block") {
        infoProduto.style.display = "none";
        imgProduto.style.display = "block";
    } else {
        infoProduto.style.display = "block";
        imgProduto.style.display = "none";
    }
}

function comprar(produtoElement) {
    const precoElement = produtoElement.querySelector(".preco");
    const valorElement = document.getElementById("valor");
    const precoTexto = precoElement.textContent;
    const precoNumerico = parseInt(precoTexto);

    if (!isNaN(precoNumerico)) {
        valorTotal += precoNumerico;
        valorElement.textContent = "Valor: " + valorTotal;
    } else {
        console.error("Preço inválido:", precoTexto);
    }
}