function armazenarNome(){
    const nome = document.getElementById('nome').value;
    const email= document.getElementById('email').value;
    localStorage.setItem('nomeArmazenado',nome);
    localStorage.setItem('emailArmazenado',email);
    exibirMensagem();
    esconderFormulario();
}
function exibirMensagem(nomeArmazenado,emailArmazenado){
    // let nomeArmazenado = localStorage.getItem('nomeArmazenado');
    // let emailArmazenado = localStorage.getItem('emailArmazenado');
    let mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = 'Seu nome é  :' + nomeArmazenado + '<br>  Seu email é : '+ emailArmazenado;
}
function esconderFormulario(){
let formulario = document.getElementById('formulario');
formulario.style.display='none';
}

window.onload = function(){
let nomeArmazenado = localStorage.getItem('nomeArmazenado');
let emailArmazenado = localStorage.getItem('emailArmazenado');
if(nomeArmazenado && emailArmazenado){
    exibirMensagem(nomeArmazenado , emailArmazenado );
    esconderFormulario();
}
}