$('#botaoTexto').click(function() {
    $('#paragrafoTexto').text("Texto alterado!");
});

$('#botaoSumir').click(function() {
    $('#divSumir').hide();
});

const novaDiv = $('<div>');
const novoP = $('<p>').text('Hello World!');
novaDiv.append(novoP);
$('#comentarios').append(novaDiv);