import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import LoginPage from './pages/login'
import AuthRoute from './Routes/AuthRoute'
import SingUpPage from './pages/singup'
import AdminDeshbord from './pages/Admin/AdminDeshbord'
import PrivateRoute from './Routes/PrivateRoute'
import NotFound from './pages/NotFound/NotFound'
import UserCourse from './pages/UserCourse'
import AllCourses from './pages/UserCourse/AllCourses'
import UserCourses from './pages/UserDeshbord/UserCourses'
import UserDeshbord from './pages/UserDeshbord'


const App = () => {




  
  return (
    <>

<Routes>

<Route  element={<AuthRoute />}>
  
  <Route  path="/login" element={<LoginPage />}  />
  <Route  path="/Signup" element={<SingUpPage  />}  />

</Route>

<Route  path="*" element={<NotFound  />}  />
<Route  index element={<UserCourse  />}  />
<Route  path='/All-Courses' element={<AllCourses />} />




<Route element={<PrivateRoute />} >


<Route  path='/UserDeshbord'  element={<UserDeshbord /> }/>
<Route path='/userCourses' element={<UserCourses />} />


</Route>




</Routes>


    </>
  )
}

export default App
