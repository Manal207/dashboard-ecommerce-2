import React, { useState, useEffect } from 'react'
import { Orders } from './Orders'
import { fs } from '../Config/Config'
import { useNavigate } from 'react-router-dom'



export const OrdersList = () => {
    const [orders, setOrders]= useState([]);

    const navigate = useNavigate();

    // Function to navigate to the ProductsList
    


    // getting products function
    const getOrders = async () => {
        const ordersSnapshot = await fs.collection('Orders').get();
        const ordersArray = ordersSnapshot.docs.map(snap => {
            return { ID: snap.id, ...snap.data() };
        });
        setOrders(ordersArray);
    }

    useEffect(() => {
        getOrders();
    }, []);

   

    return (
        <div>
            {orders.length > 0 ? (
                <div className='container-fluid'>
                    <h1 className='text-center'>Orders</h1>
                    <div className='products-box'>
                        <Orders orders={orders}/>
                    </div>
                </div>
            ) : (
                <div className='container-fluid'>Please wait....</div>
            )}
        </div>
    )
}

