import React, {useState} from 'react'

const Hooks = () => {

    var algumDado = 10;
    const mudarAlgumDado = (x) => {
        algumDado = x; 
        console.log(algumDado);
    }

    const [algumaCoisa, setAlgumaCoisa] = useState(10);
    return (
        <div>
            Dado: {algumDado}
            <button onClick={mudarAlgumDado(20)}>Clique para mudar</button>

            Dado: {algumaCoisa}
            <button onClick={() => setAlgumaCoisa(20)}>Clique para mudar</button>
        </div>
    )
}

export default Hooks