import React from 'react'
import '../CSSFiles/ProductsList.css'
import { ReactComponent as TrashIcon } from '../icons/trash.svg';


export const IndividualProduct = ({individualProduct}) => {
    console.log(individualProduct);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='col1'>
                <div className='product-text productName'>Product Name : {individualProduct.productName}</div><br></br>
                <div className='product-text category'>Product Category : {individualProduct.category}</div>
            </div>
            <div className='col2'>
                <div className='product-text price'>Product Price : $ {individualProduct.price}</div><br></br>
                <div className='product-text pieces'>Number of pieces : {individualProduct.pieces}</div>
            </div>
            <TrashIcon className="trash-icon" />
        </div> 
    )
}