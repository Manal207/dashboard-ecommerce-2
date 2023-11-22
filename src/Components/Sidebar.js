import React from 'react';
import '../CSSFiles/Sidebar.css';
import { ReactComponent as DashboardIcon } from '../icons/dashboard.svg';
import { ReactComponent as ProductsIcon } from '../icons/products.svg';
import { ReactComponent as OrdersIcon } from '../icons/orders.svg';
import { ReactComponent as CustomersIcon } from '../icons/customers.svg';
import { ReactComponent as ReportsIcon } from '../icons/reports.svg';
import { ReactComponent as MessagesIcon } from '../icons/messages.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import nikelogo from '../Images/nikelogosvg.svg'

export const Sidebar = () => {
    return (
        
        <div className="sidebar">
            <div className='sidebar-logo'>
                <img className='nikelogo' src={nikelogo}  alt="logo"/>
            </div>
            <div className="sidebar-menu">
                <div className="menu-item">
                    <DashboardIcon className="menu-icon" />
                    <span className='menu-text'>Dashboard</span>
                </div>
                <div className="menu-item">
                    <ProductsIcon className="menu-icon" />
                    <span className='menu-text'>Products</span>
                </div>
                <div className="menu-item">
                    <OrdersIcon className="menu-icon" />
                    <span className='menu-text'>Orders</span>
                </div>
                <div className="menu-item">
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
