// Exercício 1
const botaoTexto = document.getElementById('botaoTexto');
const paragrafoTexto = document.getElementById('paragrafoTexto');

botaoTexto.addEventListener('click', function () {

    if (paragrafoTexto.innerText == 'Texto alterado!'){
        paragrafoTexto.innerText = 'Texto inicial';
        botaoTexto.innerHTML = 'Alterar texto';
    }
    else {
        paragrafoTexto.innerText = 'Texto alterado!';
        botaoTexto.innerHTML = 'Voltar texto';
    }
    console.log(paragrafoTexto.innerText)
});

// Exercício 2
const botaoSumir = document.getElementById('botaoSumir');
const divSumir = document.getElementById('divSumir');

botaoSumir.addEventListener('click', function (){
    divSumir.style.display = 'none';
});

// Extra ex 2
const botaoTroll = document.getElementById('botaoTroll');
botaoTroll.addEventListener('mouseenter', function (){
    this.style.display = 'none';
});
botaoTroll.addEventListener('mouseleave', function (){
    this.style.display = 'block';
});

// Exercício 3
const novaDiv = document.createElement('div');
const novoP = document.createElement('p');

novoP.textContent = 'Hello, World!';
novaDiv.appendChild(novoP);

const comentarios = document.getElementById('comentarios');
comentarios.appendChild(novaDiv);