function selecionarProdutoPrato(prato) {
   let botaoAtual = document.querySelector("." + prato);
   let selecionadoAntes = document.querySelector(".bordaVerdePrato")
   if (selecionadoAntes !== null) {
      selecionadoAntes.classList.remove('bordaVerdePrato');
   }
   botaoAtual.classList.add('bordaVerdePrato')
}


function selecionarProdutoBebida(bebida) {
   let botaoAtual = document.querySelector("." + bebida);
   let selecionadoAntes = document.querySelector(".bordaVerdeBebida")
   if (selecionadoAntes !== null) {
      selecionadoAntes.classList.remove('bordaVerdeBebida');
   }
   botaoAtual.classList.add('bordaVerdeBebida')
}




function selecionarProdutoSobremesa(sobremesa) {
   let botaoAtual = document.querySelector("." + sobremesa);
   let selecionadoAntes = document.querySelector(".bordaVerdeSobremesa")
   if (selecionadoAntes !== null) {
      selecionadoAntes.classList.remove('bordaVerdeSobremesa');
   }
   botaoAtual.classList.add('bordaVerdeSobremesa')
}


function mudaBotao() {
   let confere1 = document.querySelector(".selecionarProdutoPrato .bordaVerdePrato")
   let confere2 = document.querySelector(".selecionarProdutoBebida .bordaVerdeBebida")
   let confere3 = document.querySelector(".selecionarProdutoSobremsa .bordaVerdeSobremesa")
   if (confere1 !== false) {
      if (confere2 !== false) {
         if (confere3 !== false) {
            let novoTexto = document.querySelector('.fechar-pedido')
            novoTexto.innerHTML = 'Fechar pedido'
            novoTexto.classList.add('fechar-pedido-close')
         }
      }
   }
}


function checkOut() {
   let trocaFundo = document.querySelector('.conteudo-total')
   trocaFundo.classList.add('conteudo-total-fim')
   let apareceBotao = document.querySelector('.resumoPedido')
   apareceBotao.classList.add('resumoPedidoFim')
}