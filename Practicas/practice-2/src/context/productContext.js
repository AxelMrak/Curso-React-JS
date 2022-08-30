import React, { createContext, useState } from 'react';

export const productDataContext = React.createContext();

const productData = [{
    name: 'Sugar',
    amount: 0,
    price: 0,
    IVA: 21,
}];


export const ProductContext = ({ children }) => {

    const [data, setData] = useState(productData);

    return (
        <productDataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </productDataContext.Provider>
    );
};

