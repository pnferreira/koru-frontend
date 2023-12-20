import React from 'react'
import FirstComponent from './FirstComponent';

const TemplateExpressions = () => {

    var nome = "Poliana";
    var dados = {
        idade: 24,
        profissao: "Professora"
    };

    return (
        <div>
            <p>Olá, {nome}</p>
            <p>Você tem {dados.idade} anos, e é {dados.profissao}</p>
            <p>Soma: 4+4 {4+4}</p>

            <FirstComponent/>
        </div>
    )
}

export default TemplateExpressions