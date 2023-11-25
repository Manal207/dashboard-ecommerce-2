import React from 'react'
import { Sidebar } from './Sidebar'
import '../CSSFiles/Overview.css'
import { fs } from '../Config/Config'
import { useState } from 'react'
import { useEffect } from 'react'


export const Overview = () => {

    

    const getOverviewData = async () => {
        try {
            const overviewDoc = await fs.collection('Overview').doc('q3XE5ACFcggkaZT8DyFD').get();
            if (overviewDoc.exists) {
              return overviewDoc.data();
            } else {
              console.log('No such document!');
            }
          } catch (error) {
            console.error("Error getting document:", error);
          }
    };


    const [data, setData] = useState({
        CompletedOrders: '',
        DeliveredOrders: '',
        Orders: '',
        PendingOrders: '',
        ProcessingOrders: '',
        Revenue: '',
        Visits: '',
        CLV:'',
        CAC:'',
        ROI:'',
      });
    
      useEffect(() => {
        getOverviewData().then(data => {
          if (data) {
            setData(data);
          }
        });
      }, []);

  return (

    <div>
        <div className='container-fluid'>
            <Sidebar/>
            <label className='Orders-text'>Overview</label><br></br><br></br>
            <div className='orders-box'>
                <div className='row1'>
                    <div className='grid1'>Revenue: {data.Revenue}</div>
                    <div className='grid2'>Visits: {data.Visits}</div>
                    <div className='grid3'>Total Orders: {data.Orders}</div>
                </div>
                <br></br>
                <div className='row2'>
                    <div className='horizontal-grid'>
                        <div>Processing Orders: {data.ProcessingOrders}</div>
                        <div>Delivered Orders: {data.DeliveredOrders}</div>
                        <div>Completed Orders: {data.CompletedOrders}</div>
                        <div>Pending Orders: {data.PendingOrders}</div>
                    </div>
                </div>
                <br></br>
                <div className='row3'>
                    <div className='grid1'>E-Commerce KPI'S</div>
                    <div className='grid2'>Customer Lifetime Value: {data.CLV}</div>
                    <div className='grid3'>Customer Acquisition Cost: {data.CAC}</div>
                    <div className='grid4'>Return On Investment: {data.ROI}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
