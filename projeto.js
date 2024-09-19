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
   let confere1 = document.querySelector(".bordaVerdePrato")
   let confere2 = document.querySelector(".bordaVerdeBebida")
   let confere3 = document.querySelector(".bordaVerdeSobremesa")
   if (confere1&&confere2&&confere3 !== null) {
      let novoTexto = document.querySelector('.fechar-pedido')
      novoTexto.innerHTML = 'Fechar pedido'
      novoTexto.classList.add('fechar-pedido-close')
      let removeVidro = document.querySelector('.botaoFinalVidro')
      removeVidro.classList.remove('botaoFinalVidro')
   }
}


function checkOut() {
   let trocaFundo = document.querySelector('.semConteudo')
   trocaFundo.classList.add('fundoVidro')
   let apareceBotao = document.querySelector('.resumoPedido')
   apareceBotao.classList.add('resumoPedidoFim')
}

function voltarTela(){
   let removerFundo = document.querySelector('.semConteudo')
   let removerResumo = document.querySelector('.resumoPedido')
   removerResumo.classList.remove('resumoPedidoFim')
   removerFundo.classList.remove('fundoVidro')
}