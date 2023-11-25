import React from 'react'
import {IndividualOrder} from './IndividualOrder'

export const Orders = ({orders}) => {

    // console.log(orders);

    return orders.map((individualOrder)=>(
        <IndividualOrder key = {individualOrder.ID} individualOrder={individualOrder}/>
    ))
    
}


