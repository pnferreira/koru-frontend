import React from 'react'

const Card = (props) => {
  return (
    <div>
        <hr/>
        <h2>Amigo</h2>
        <hr/>
        <h3>{props.nome}</h3>
        <p>Idade: {props.idade} </p>
        <p>Profissão: {props.profissao}</p>
        <hr/>
    </div>
  )
}

export default Card