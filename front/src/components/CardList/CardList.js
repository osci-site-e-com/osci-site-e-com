import React from 'react';
import products from "../../datas/products.json"
import Card from '../Card/Card.js';

const CardList = () => {

    const myProducts = products.products
    return (
        <>
        {myProducts.map((product, index) =>{
           return <Card productInfos={product} key={index}/>
        })}
        </>
    );
};

export default CardList;