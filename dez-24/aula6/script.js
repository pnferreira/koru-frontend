console.log("Olá, mundo!");

var nome = "Poliana";
console.log("Olá,", nome);

var idade = 25;
var altura = 1.63;
var professora = true;
console.log("Idade é", idade, "tem altura de", altura, ". É professora?", professora);

var carros = ["Saab", "Volvo", "BMW"];
carros[0] = "Fiat";
console.log(carros[0], carros[1])
console.log(carros.toString(), carros.length, carros.sort().reverse(), carros.push("Fusca"))

// Operadores Aritméticos
var num1 = 10;
var num2 = 5;

var soma = num1 + num2;
var subtracao = num1 - num2;
var mult = num1 * num2;
var divisao = num1 / num2;
console.log("Soma: ", soma);
console.log("Subtração: ", subtracao);
console.log("Multiplicação: ", mult);
console.log("Divisão: ", divisao);

// Operadores de Comparação
var a = 10;
var b = 10;
console.log("a é igual a b? ", a == b);
console.log("a é diferente de b?", a != b);
console.log("a maior ou igual a b?", a >= b);
console.log("a menor que b?", a < b);

// Operadores lógicos
var bool1 = false;
var bool2 = true;
console.log(bool1 && bool2, bool1 || bool2);

idade = 18;
var nacionalidade = "brasileira";
var pode_votar = idade >= 16 && nacionalidade == "brasileira";
console.log("Pode votar?", pode_votar);

// Estruturas condicionais

if (idade < 13) {
    console.log("Criança");
}
else if (idade <= 17){
    console.log("Adolescente");
}
else if (idade < 65) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}

// Switch case
var dia = 10;
switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    // Completar com os outros dias da semana
    default:
        console.log('Digite um dia válido');
        break;
}

// Estruturas de repetição

var nomes = ["Alice", "Bob", "Carlos"]
for (let i = 0; i < nomes.length; i++){
    console.log("O elemento", i, "da lista é:", nomes[i]);
}

nomes.forEach(nome => {
    console.log(nome);
});

// while

var numero = 10;
while (numero > 0){
    console.log(numero);
    numero--;
}

var i = 0;
var buscar = "Bob";
while ((nomes[i] != buscar) && (i < nomes.length)){
    console.log(i, "não é", buscar);
    i++;
}

if (i < nomes.length){
    console.log(i, "é", buscar);
}
else {
    console.log("Não encontrado")
}

// Funções

function soma_mult1(num1, num2){
    var soma = num1 + num2
    var mult = num1 * num2
    console.log("Entramos na função");
    return [soma, mult]
}

var resultado = soma_mult1(1, 2);
console.log("Soma", resultado[0], "Multiplicação", resultado[1]);

const soma_mult2 = (num1, num2) => [num1+num2, num1*num2];

resultado = soma_mult2(1, 2);
console.log("Soma", resultado[0], "Multiplicação", resultado[1]);



