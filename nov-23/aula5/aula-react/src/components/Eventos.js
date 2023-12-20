import React from 'react'

const Eventos = () => {

    const handleClick = (e) => {
        console.log(e);
        console.log("Botão clicado");
    }

  return (
    <div>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Eventos