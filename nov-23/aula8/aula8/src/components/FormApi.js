import React, { useState } from 'react'

const FormApi = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = async (e) => {
        const valor = e.target.value;

        const response = await fetch(`https://opencep.com/v1/${valor}`);
        const data = await response.json();
        setInputValue(data.uf);
    }


    return (
        <div>
            <form>
                <input onChange={handleChange}></input>
                <input type="text" defaultValue={inputValue}></input>
            </form>
        </div>
    )
}

export default FormApi