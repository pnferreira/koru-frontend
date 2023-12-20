console.log("oii!");
        
// Variáveis
var nome = "Poliana";
console.log("Bem vinda", nome);
var idade = 24;
console.log("Você tem:", idade, "anos.");

// Strings
var sobrenome = "Ferreira";
console.log(nome.concat(sobrenome));

var cores = "azul,amarelo,vermelho";
console.log(cores.split(","));

console.log(cores.includes("y"));

// Arrays
var cores_array = cores.split(",");
console.log(cores_array.length)
var ultimo = cores_array.pop();

cores_array.push("laranja");
console.log(cores_array);

console.log(cores_array.includes("l"));

// Repetição
for(var i = 0; i < cores_array.length; i++){
    console.log(cores_array[i].includes("j"));
}

cores_array.forEach(cor => console.log(cor));

//Operações
var a = 10; var b = 11;
console.log(a+b, a*b, a-b, a/b);

console.log(a==b, a<b, a>b);

var booleana1 = true; var booleana2 = false;
console.log(booleana1 && booleana2, booleana1 || booleana2);

//Condicionais
if(a>b){
    console.log("verdadeirooo");
}
else{
    console.log("falsooo");
}

//Funções
function funcao1(a1, a2){
    return a1*a2;
}
console.log(funcao1(2,3));
var funcao_seta = (a1,a2) => a1*a2;
console.log(funcao_seta(2,3));
