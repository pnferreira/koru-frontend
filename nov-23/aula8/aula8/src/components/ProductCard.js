import React from 'react'

const ProductCard = ({ produto }) => {
    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={produto.imagem} className='card-img-top' alt={produto.nome} />
            <div className='card-body'>
                <h5 className="card-title">{produto.nome}</h5>
                <p className='card-text'>{produto.descricao}</p>
            </div>

        </div>
    )
}

export default ProductCard