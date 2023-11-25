import React from 'react'

export const IndividualOrder = ({individualOrder}) => {
    console.log(individualOrder);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualOrder.url} alt="product-img"/>
            </div>
            <div className='col1'>
                <div className='product-text productName'>Product Name : {individualOrder.productName}</div><br></br>
                <div className='product-text price'>Product Price : $ {individualOrder.price}</div><br></br>
                <div className='product-text address'>Delivery address : {individualOrder.address}</div>
            </div>
            <div className='col2'>
                <div className='product-text date'>Order's date : {individualOrder.date}</div><br></br>
                <div className='product-text status'>Order's status : {individualOrder.status}</div>
            </div>
        </div> 
    )
}