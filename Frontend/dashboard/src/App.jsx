import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import ProductMenu from './suby/components/ProductMenu'
import Home from './Home'


import "./App.css"
import NotFound from './vendorDashboard/components/NotFound'
import UserLandingPage from './suby/pages/UserLandingPage'


const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserLandingPage/>}/>
          <Route path='/vendor' element = {<LandingPage />}/>
          <Route path='/*' element = {<NotFound />} />
                    <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />

      </Routes>
   
    </div>
  )
}

export default App