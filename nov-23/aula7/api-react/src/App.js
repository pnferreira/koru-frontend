import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const url = "http://localhost:5001/api/produtos";
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="App">
      <h1>Lista Produtos</h1>
      <ul>
        {
          produtos.map((produto) => (<li key={produto.id}>{produto.nome} - R$: {produto.preco}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
