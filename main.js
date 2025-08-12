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
    geraSenha();

}

function aumentaTamanho(){

    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++


    }
    numeroSenha.textContent = tamanhoSenha;
    geralSenha()

}
for (i=0;i<checkebox.length;i++){
    checkbox[i].onclick=geraSenha;
}

geralSenha();

function geralSenha(){
    let alfabeto = ";
if(checkebox[0].checked){
    alfabeto=alfabeto+letrasMaiusculas;
}
if(checkebox[1].checked){
    alfabeto=alfabeto+letrasMinusculas;
}
if(checkebox[2].checked){
    alfabeto=alfabeto+numeros;   
}
if(checkebox[3].checked){
    alfabeto=alfabeto+simbolos;
}

    let senha = ";
    for(let i = 0; i < tamanhoSenha; i++)
    let numeroAleatorio = math.random()*alfabeto.lenght;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = + letraMaiusculas(numeroAleatorio);

    campoSenha.value = senha
    classificasenha (alfabeto.length);
}
function classificaSenha(tamanhoAlfabeto){
    let entropia=tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media', 'forte',);
    if (entropia>57){
        forcaSenha.classList.add('forte');
    } else if( entropia>35&& entropia<57){
        forcaSenha.classList.add('media');
    } else if (entropia <=35){
        forcaSenha.classList.add('fraca');
        }
        const valorEntopia=document.querySelector('.entropia');
        valorEntropia.textContent=2**Math.floor(entropia)/(100e6*60*60*24);
}2