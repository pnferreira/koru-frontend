import React from 'react'
import {useState} from 'react'

const Listas = () => {
    const [list] = useState(["Poliana", "Nathalia", "Marianna", "Ian"])
    return (
        <div>
            <ul>
            {
                list.map((nome, idx) => (<li key={idx}>{nome}</li>))
            }
            </ul>
        </div>
    )
}

export default Listas