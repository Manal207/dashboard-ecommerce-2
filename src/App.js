import React from 'react'
import { Login } from './Components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsList } from './Components/ProductsList'
import { AddProduct } from './Components/AddProduct'
import { OrdersList } from './Components/OrdersList'
import { Sidebar } from './Components/Sidebar'
import { CustomersList } from './Components/CustomersList'
import { Overview } from './Components/Overview'


export const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="ProductsList" element={<ProductsList/>}/>
          <Route path="OrdersList" element={<OrdersList/>}/>
          <Route path="CustomersList" element={<CustomersList/>}/>
          <Route path="AddProduct" element={<AddProduct/>}/>
          <Route path="Sidebar" element={<Sidebar/>}/>
          <Route path="Overview" element={<Overview/>}/>
        
        </Routes>
      </Router>
  )
}

export default App