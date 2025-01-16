const titulo = document.getElementById("demo")
console.log(titulo)
titulo.innerHTML = "Olá, mundo!";

document.getElementById('myImage').src = 'https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg'
document.getElementById('myImage').style.width = '400px'

document.getElementById('p2').style.color = "blue";

// Usando JS normal

//const conjunto_divs = document.getElementsByClassName("exemplo");
//console.log(conjunto_divs)
//for (let i = 0; i < conjunto_divs.length; i++) {
//    conjunto_divs[i].style.backgroundColor = 'red';
//}
//conjunto_divs[1].style.backgroundColor = 'blue';
//document.getElementById('div1').style.backgroundColor = 'green';

//Usando Jquery
$('.exemplo').css("backgroundColor", "red");
$('.exemplo').html("novo Texto");

// Eventos
// document.getElementById('enviar').onclick = function () {validateForm()}
document.getElementById('enviar').addEventListener('click', validateForm);

function validateForm() {
    var valor = document.forms["myForm"]["nome"].value;
    if (valor === ""){
        alert("Nome deve ser preenchido")
        return false;
    }

    else if (valor === "senha"){
        alert("Correto!!");
        return false
    }
}

titulo.addEventListener('mouseenter', function (){
    this.style.color = 'blue';
    this.innerHTML = 'mouse em cima'
})

titulo.addEventListener('mouseleave', function (){
    this.style.color = 'black';
    this.innerHTML = 'mouse fora'
})