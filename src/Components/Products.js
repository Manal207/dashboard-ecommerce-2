import React from 'react'
import {IndividualProduct} from './IndividualProduct'

export const Products = ({products, onDelete}) => {

    // console.log(products);
    
    return products.map((individualProduct)=>(
        <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct} onDelete={onDelete}/>
    ))
}

