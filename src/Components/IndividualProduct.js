import React from 'react'

export const IndividualProduct = ({individualProduct}) => {
    console.log(individualProduct);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text productName'>{individualProduct.productName}</div>
            <div className='product-text category'>{individualProduct.category}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='product-text pieces'>$ {individualProduct.pieces}</div>
            <div className='btn-delete'>delete</div>
        </div> 
    )
}