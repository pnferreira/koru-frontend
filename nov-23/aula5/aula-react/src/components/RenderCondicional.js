import React from 'react'
import {useState} from 'react'

const RenderCondicional = () => {
    const renderAlgo = (x) => {
        if(x) {
            return <p>X verdadeiro</p>;
        }
        else {
            return <p>X falso</p>;
        }
    }

    const [X, setX] = useState(true)

    return (
        <div>
            {renderAlgo(false)}
            {renderAlgo(true)}

            {X ? (<p>Verdadeiro</p>):(<p>Falso</p>)}

            <button onClick={() => setX(false)}>Clique para modificar para falso</button>
        </div>
    )
}

export default RenderCondicional