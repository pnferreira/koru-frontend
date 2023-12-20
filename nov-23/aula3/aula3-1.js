var titulo = document.getElementById("titulo")

titulo.innerHTML = "Titulo mudado!";
var hoje = new Date(); 
document.getElementById("data").innerHTML = `${hoje.getMonth() + 1}/${hoje.getFullYear()}`;

document.getElementById("imagem").src = "../aula2/imgs/poliana.png";

titulo.style.color = "red";


titulo.onclick = function(){ titulo.innerHTML = "Cliquei aqui"  }

titulo.onmouseover = function(){titulo.style.color = "black"; document.getElementById("data").innerHTML = "ihhh, mudou"}
titulo.onmouseout = function(){titulo.style.color = "red"}

