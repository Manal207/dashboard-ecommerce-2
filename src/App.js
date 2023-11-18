import React from 'react'
import { Login } from './Components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsList } from './Components/ProductsList'
import { AddProduct } from './Components/AddProduct'


export const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="ProductsList" element={<ProductsList/>}/>
          <Route path="AddProduct" element={<AddProduct/>}/>
        </Routes>
      </Router>
  )
}

export default App