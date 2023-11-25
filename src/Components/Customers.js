import React from 'react'
import {IndividualCustomer} from './IndividualCustomer'

export const Customers = ({customers}) => {
  
    return customers.map((individualCustomer)=>(
        <IndividualCustomer key = {individualCustomer.ID} individualCustomer={individualCustomer}/> 
        
    ))

}
