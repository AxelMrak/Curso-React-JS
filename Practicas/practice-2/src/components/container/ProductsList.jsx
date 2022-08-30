import React, { useContext } from 'react';
import { productDataContext } from '../../context/productContext';
import Product from '../pure/product';
import '../../styles/productsListStyle.css'


const ProductsList = () => {

    const { data, setData } = useContext( productDataContext );

    

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1>Products list</h1>
            <Product></Product>
        </div>
    )
}

export default ProductsList