import React from 'react';
import '../CSSFiles/Sidebar.css';
import { ReactComponent as DashboardIcon } from '../icons/dashboard.svg';
import { ReactComponent as ProductsIcon } from '../icons/products.svg';
import { ReactComponent as OrdersIcon } from '../icons/orders.svg';
import { ReactComponent as CustomersIcon } from '../icons/customers.svg';
import { ReactComponent as ReportsIcon } from '../icons/reports.svg';
import { ReactComponent as MessagesIcon } from '../icons/messages.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import { useNavigate } from 'react-router-dom';

import nikelogo from '../Images/nikelogosvg.svg'

export const Sidebar = () => {

    const navigate = useNavigate();

    // Function to navigate to the ProductsList
    const goToProductsList = () => {
        navigate('/ProductsList'); // Use the correct path for your ProductsList component
    };

    const goToOrdersList = () => {
        navigate('/OrdersList');
    };

    const goToCustomersList = ()=>{
        navigate('/CustomersList')
    };

    const goToOverview = ()=>{
        navigate('/Overview')
    }


    return (
        
        <div className="sidebar">
            <div className='sidebar-logo'>
                <img className='nikelogo' src={nikelogo}  alt="logo"/>
            </div>
            <div className="sidebar-menu">
                <div className="menu-item" onClick={goToOverview}>
                    <DashboardIcon className="menu-icon" />
                    <span className='menu-text'>Dashboard</span>
                </div>
                <div className="menu-item" onClick={goToProductsList}>
                    <ProductsIcon className="menu-icon" />
                    <span className='menu-text'>Products</span>
                </div>
                <div className="menu-item" onClick={goToOrdersList}>
                    <OrdersIcon className="menu-icon"/>
                    <span className='menu-text'>Orders</span>
                </div>
                <div className="menu-item" onClick={goToCustomersList}>
                    <CustomersIcon className="menu-icon" />
                    <span className='menu-text'>Customers</span>
                </div>
                <div className="menu-item">
                    <MessagesIcon className="menu-icon" />
                    <span className='menu-text'>Messages</span>
                </div>
                <div className="menu-item">
                    <SettingsIcon className="menu-icon" />
                    <span className='menu-text'>Settings</span>
                </div>
            </div>
        </div>
    );
};
