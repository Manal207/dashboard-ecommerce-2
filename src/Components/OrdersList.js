import React, { useState, useEffect } from 'react'
import { Orders } from './Orders'
import { fs } from '../Config/Config'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import '../CSSFiles/OrdersList.css'



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
                    <Sidebar/>
                    <label className='Orders-text'>Orders</label><br></br><br></br>
                    <div className='orders-box'>
                        <Orders orders={orders}/>
                    </div>
                </div>
            ) : (
                <div className='container-fluid'>Please wait....</div>
            )}
        </div>
    )
}

