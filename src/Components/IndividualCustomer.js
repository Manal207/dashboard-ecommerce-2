import React from 'react'


export const IndividualCustomer = ({individualCustomer}) => {
  return (
    <div className='customer'>
        <div className='first'>
            <div className='customer-img'>
                    <img src={individualCustomer.url} alt="customer-img"/>
            </div>
            <div className='NameAndEmail'>
                <div className='customerName'>{individualCustomer.name}</div>
                <div className='customerEmail'>{individualCustomer.email}</div><br></br>
            </div>
        </div>
        <div className='second'>
            <div className='customerId'>id: {individualCustomer.id}</div>
            <div className='customerTO'>Total Orders: {individualCustomer.totalOrders}</div>
            <div className='customerTS'>Total Spent: ${individualCustomer.totalSpent}</div>
        </div>
                
    </div> 
  )
}
