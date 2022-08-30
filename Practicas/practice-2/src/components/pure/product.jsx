import React, { useContext } from 'react'
import { productDataContext } from '../../context/productContext';
import '../../styles/productStyle.css'
const Product = () => {

    const { data, setData } = useContext( productDataContext );

  data.forEach(product => {
    return (
    <div className='card text-bg-dark m-4'>
        <div className='card-header'>Product {product.name}</div>
        <div className='card-body'>
            <h2 className='card-text'>Amount {product.amount}</h2>
            <h3 className='card-text'>Price {product.price}</h3>
            <h4 className='card-text'>IVA {product.IVA}</h4>
        </div>
    </div>
  );
  }) 
  
};

export default Product