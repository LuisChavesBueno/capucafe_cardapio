<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Cardapio</title>
 </head>
    <style>
         body{
    background-color:#964B00 ;
}


header{
    background-color: #FFA500;
    border-radius: 10px;
    margin-right: 7px;
}

#cabecalho{
    display: flex;
    color: white;
    
    
}

#cabecalho div{
    margin: auto;
    padding: 15px 15px;
    font-family: Arial, Helvetica, sans-serif;
}

#pedidos{
    cursor: pointer;
}

/*////////////////////////////////////////////////////////////////////////////////*/

main{
    margin-top: 25px;
    font-family: Arial, Helvetica, sans-serif;
}

main #valor{
    
    padding-bottom:20px ;
    color: #ffff;
}

main #pesquisar{
    border-radius: 20px;
    border: none;
    font-size: 15px;
    padding: 5px 5px;

}

/*///////////////////////////////////////////////??/////*/

footer .produto{
    color:white;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 30px;
    margin-right: 30px;
    border:solid 1px #FFA500;
    border-top: 20px;
    border-radius: 5px;
    margin-top: 20px;
}


footer .info{
    display: none;
    font-size: 15px;
    color: white;
    background-color: #573902;
    padding: 10px;
    margin-top: 20px;
   border-radius: 5px;
    
}

footer  .img{
    color: white;
    background-color: black;
   padding: 70px 90px;
   margin-top: 20px;
   border-radius: 5px;
}

footer .produto #nomePreco{
    color:#ffff;
    display: flex;
    padding-left: 20px;
}

footer .nome{
    padding-left: 10px;
}

footer .preco{
    padding-left: 10px;
    font-size: 20px;
}

footer .botao {
    color: #ffff;
    background-color: #FFA500;
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
}

footer .detalhes{
    font-size: 12px;
    padding-left: 15px;
    padding-bottom:5px ;
    text-decoration: underline;
}
    </style>
<body>
    <header>
        <div id="cabecalho">
            <div id="logo">logo</div>
            <div>CARDAPIO</div>
            <div id="pedidos" onclick="pedidos()">pedidos</div>
        </div>
    </header>
    <main>
        <div>
            <div id="valor">valor: </div>
        </div>
        <div>
            <input type="text" id="pesquisar" onclick="Pesquisar()" placeholder="Pesquisar" size="30">
        </div>
    </main>
    <footer>
        <div class="produto">
            <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam quidem debitis maiores
                 obcaecati id ducimus cupiditate nulla harum iste architecto, laborum possimus eos animi nobis dolorum adipisci 
                 sint amet.</div>
            <div class="img">imagens</div>
            <div class="nomePreco">
                <p class="nome">Cafe sabor morango</p>
                <p class="preco">100</p>
                <div onclick="detalhes(this.parentElement.parentElement)" class="detalhes">ver detalhes</div>
                <div class="botao">
                    <div onclick="comprar(this.parentElement.parentElement)">PEGAR</div>
                </div>
            </div>
        </div>
        
        
        <div class="produto">
            <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                 doloribus sequi? Sit atque voluptas 
                deserunt neque suscipit tempore accusantium quae maxime! Quidem provident 
                tempore aliquid in sed 
                iusto atque excepturi?</div>
            <div class="img">imagens</div>
            <div class="nomePreco">
                <p class="nome">Cafe sabor morango</p>
                <p class="preco">50</p>
                <div onclick="detalhes(this.parentElement.parentElement)" class="detalhes">ver detalhes</div>
                <div class="botao">
                    <div onclick="comprar(this.parentElement.parentElement)">PEGAR</div>
                </div>
            </div>
        </div>

        <div class="produto">
            <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                 doloribus sequi? Sit atque voluptas 
                deserunt neque suscipit tempore accusantium quae maxime! Quidem provident 
                tempore aliquid in sed 
                iusto atque excepturi?</div>
            <div class="img">imagens</div>
            <div class="nomePreco">
                <p class="nome">Cafe sabor morango</p>
                <p class="preco">150</p>
                <div onclick="detalhes(this.parentElement.parentElement)" class="detalhes">ver detalhes</div>
                <div class="botao">
                    <div onclick="comprar(this.parentElement.parentElement)">PEGAR</div>
                </div>
            </div>
        </div>

        <div class="produto">
            <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                 doloribus sequi? Sit atque voluptas 
                deserunt neque suscipit tempore accusantium quae maxime! Quidem provident 
                tempore aliquid in sed 
                iusto atque excepturi?</div>
            <div class="img">imagens</div>
            <div class="nomePreco">
                <p class="nome">Cafe sabor morango</p>
                <p class="preco">200</p>
                <div onclick="detalhes(this.parentElement.parentElement)" class="detalhes">ver detalhes</div>
                <div class="botao">
                    <div onclick="comprar(this.parentElement.parentElement)">PEGAR</div>
                </div>
            </div>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
