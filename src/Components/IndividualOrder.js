import React from 'react'

export const IndividualOrder = ({individualOrder}) => {
    console.log(individualOrder);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualOrder.url} alt="product-img"/>
            </div>
            <div className='product-text productName'>{individualOrder.productName}</div>
            <div className='product-text price'>$ {individualOrder.price}</div>
        </div> 
    )
}