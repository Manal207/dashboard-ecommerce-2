import React from 'react'
import { Login } from './Components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsList } from './Components/ProductsList'


export const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="ProductsList" element={<ProductsList/>}/>
        </Routes>
      </Router>
  )
}

export default App