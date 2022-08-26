import React, { useContext } from 'react'
import { productDataContext } from '../../context/productContext';
import '../../styles/productStyle.css'
const Product = () => {

    const { data, setData } = useContext( productDataContext );

  return (
    <div className='card text-bg-dark m-4'>
        <div className='card-header'>Product {data.name}</div>
        <div className='card-body'>
            <h2 className='card-text'>Amount {data.amount}</h2>
            <h3 className='card-text'>Price {data.price}</h3>
            <h4 className='card-text'>IVA {data.IVA}</h4>
        </div>
    </div>
  );
};

export default Product