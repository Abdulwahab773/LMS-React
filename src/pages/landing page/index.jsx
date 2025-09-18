import React from 'react'
import ButtonCmp from '../../components/buttonCmp'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
    let navigator = useNavigate()
    let uid = localStorage.getItem("uid")



  return (
    <div>



    <ButtonCmp title='Student Dashboard' onClick={()=>{
if(uid){
    
    navigator("/UserDeshbord")
}else{
    alert("User Not Login")
    navigator("/login")
}
}} />
    </div>
  )
}

export default  LandingPage
