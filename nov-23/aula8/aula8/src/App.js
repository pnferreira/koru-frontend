import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard';
import PostComponente from './components/PostComponente';
import FormApi from './components/FormApi';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/produtos")
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.log(error));
  }, [])


  return (
    <div className="container">
      <h1>Apresentação de Produtos</h1>
      <h2>Formulário de usuário</h2>
      <FormApi/>

      <h2>Cards</h2>
      <div className='row'>
        {produtos.map(produto => (
          <div key={produto.id} className='col-md-4 mb-4'>
            <ProductCard produto={produto} />
          </div>
        ))}
      </div>

      <PostComponente/>
    </div>
  );
}

export default App;
