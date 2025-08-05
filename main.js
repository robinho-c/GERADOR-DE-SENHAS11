const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha= 12;
numeroSenha-textcontent = tamanhoSenha;
const letraMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos ='!#*?%@';
const botoes = document.querySelector ('parametroSenha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectoer('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }

    numeroSenha-textcontent = tamanhoSenha;
    geralSenha();

}

function aumentaTamanho(){

    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++


    }
    numeroSenha.textContent = tamanhoSenha;
    geralSenha()

}












geralSenha();

function geralSenha(){
    let senha = ";
    for(let i = 0; i < tamanhoSenha; i++)
    let numeroAleatorio = math.random()*letraMaiusculas.longht;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = + letraMaiusculas(numeroAleatorio);

}












campoSenha.value = senha

geralSenha();

function geraSenha(){
    let alfabeto = "";
    if(checkbox[0].checked) {
        alfabeto=alfabeto+letraMaiusculas;
    }

    if(checkbox[0].checked) {
        alfabeto=alfabeto+letraMinusculas;
    }

    if(checkbox[0].checked) {
        alfabeto=alfabeto+ numeros;
    }


    if(checkbox[0].checked) {
        alfabeto=alfabeto+simbolos;
    }

    let senha = ";
    for(let i = 0; i < tamanhoSenha; i++)
    let numeroAleatorio = math.random()*alfabeto.lenght;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = + letraMaiusculas(numeroAleatorio);

    campoSenha.value = senha
    classificasenha ();

}
