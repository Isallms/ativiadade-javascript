// 1. Encontre o botão no HTML pelo seu ID
const botao = document.getElementById("meuBotao");
// 2. Adicione um "ouvinte" para o evento de clique
botao.addEventListener("click", function() {
 // 3. O código que será executado quando o botão for clicado
 console.log("O botão foi clicado!");

 // Mude o texto do botão
 botao.textContent = "Botão Clicado!";
});