import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import LoginPage from './pages/login'
import AuthRoute from './Routes/AuthRoute'
import SingUpPage from './pages/singup'
import AdminDeshbord from './pages/Admin/AdminDeshbord'
import PrivateRoute from './Routes/PrivateRoute'
import UserDeshbord from './pages/UserDeshbord'
import NotFound from './pages/NotFound/NotFound'


const App = () => {




  
  return (
    <>

<Routes>

<Route  element={<AuthRoute />}>
  
  <Route  index element={<LoginPage />}  />
  <Route  path="/Signup" element={<SingUpPage  />}  />

</Route>

<Route  path="*" element={<NotFound  />}  />



<Route element={<PrivateRoute />} >


<Route  path='/UserDeshbord'  element={<UserDeshbord /> }/>

</Route>




</Routes>


    </>
  )
}

export default App
