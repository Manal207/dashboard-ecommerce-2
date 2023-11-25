import React, { useState, useEffect } from 'react'
import { Customers } from './Customers'
import { fs } from '../Config/Config'
import { Sidebar } from './Sidebar'
import '../CSSFiles/CustomersList.css'

export const CustomersList = () => {
    const [customers, setCustomers]= useState([]);

    // getting products function
    const getCustomers = async () => {
        const customersSnapshot = await fs.collection('Customers').get();
        const customersArray = customersSnapshot.docs.map(snap => {
            return { ID: snap.id, ...snap.data() };
        });
        setCustomers(customersArray);
    }

    useEffect(() => {
        getCustomers();
    }, []);


  return (
    <div>
            {customers.length > 0 ? (
                <div className='container-fluid'>
                    <Sidebar/>
                    <label className='Orders-text'>Customers</label><br></br><br></br>
                    <div className='customers-box'>
                        <Customers customers={customers}/>
                    </div>
                </div>
            ) : (
                <div className='container-fluid'>Please wait....</div>
            )}
    </div>
  )
}
