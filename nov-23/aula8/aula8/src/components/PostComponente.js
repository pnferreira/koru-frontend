import React, { useState } from 'react'

const PostComponente = () => {
    const [produto, setProduto] = useState({
        nome: "",
        quantidade: "",
        descricao: ""
    });

    const handleSubmit = async () => {
        const response = await fetch("http://localhost:5001/cadastro", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });

        const data = await response.json();
        console.log(data);
    }

    const handleChange = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <h1>Cadastro de Produtos</h1>
            <div className="mb-3">
                <label for="nome" className="form-label">Nome do produto: </label>
                <input type="text" className="form-control" name="nome" value={produto.nome} onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label for="qt" className="form-label">Quantidade: </label>
                <input type="text" className="form-control" name="quantidade" value={produto.quantidade} onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label for="descricao" className="form-label">Descricao do produto: </label>
                <input type="text" className="form-control" name="descricao" value={produto.descricao} onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary" id="envio" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default PostComponente