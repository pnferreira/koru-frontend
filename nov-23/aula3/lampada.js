var lampada = document.getElementById("lampada");

document.getElementById("acender").onclick = function(){interruptor("./pic_bulbon.gif") }
document.getElementById("apagar").onclick = function(){interruptor("./pic_bulboff.gif")}


function interruptor(imagem){
    lampada.src = imagem;
    if(imagem == "./pic_bulbon.gif"){
        document.getElementById("acender").style.display = 'none';
        document.getElementById("apagar").style.display = 'inline';
    }

    else{
        document.getElementById("apagar").style.display = 'none';
        document.getElementById("acender").style.display = 'inline';
  
    }
}



var senha = "dtech";
document.getElementById("caixa").onchange = function(){ verificar() };

function verificar(){
    var digitado = document.getElementById("caixa").value;
    if(senha == digitado){
        window.alert("Parabéns! Você acertou :)")
    }
}


document.getElementById("submeter").addEventListener('mouseover', verificar2);

function verificar2(){
    var digitado = document.getElementById("caixa").value;
    if(!digitado.includes("@")){
        document.getElementById("erro").innerHTML = "Valor inválido";
        document.getElementById("erro").style.color = "red";
    }
    else{
        document.getElementById("erro").style.display = 'none';
    }
}

$("button").click(function(){$("p").html("oioi");});

