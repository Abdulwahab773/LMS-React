import React from 'react'
import InputCmp from '../../components/inputFieldCmp'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from 'react';
import ButtonCmp from '../../components/buttonCmp';
import { Link, useNavigate } from 'react-router-dom';



const SingUpPage = () => {

let [userEmail , setUserEmail] = useState("")
let [userPassword , setUserPassword] = useState("")
let navigator = useNavigate()


let singupUser =  async()=>{
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,userEmail ,userPassword);
  
    console.log("User created successfully:", userCredential.user);
    navigator("/")


  } catch (error) {
    console.error("Error creating user:", error.message);
  }
  
  }



  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
  
     
      const user = result.user;
      console.log("Google Login successful:", user.uid);
  
      localStorage.setItem("uid", user.uid);
     
      localStorage.setItem("uid", user.uid);
  
    } catch (error) {
      console.error("Google Login error:", error.message);
    }
  }



  return (
    <>








<InputCmp  placeholder="Enter Your Email"  onChange={(e)=>{
setUserEmail(e.target.value);

}} />


<InputCmp  placeholder="Enter Your Password" onChange={(e)=>{
setUserPassword(e.target.value);

}} />


<ButtonCmp  placeholder="Enter Your Password" onClick={()=>{
  singupUser()



}}  title={"SingUp"} />

<ButtonCmp  title='signIn With Google '  onClick={signInWithGoogle}  />


<p >
        Already have an account?{" "}
        <Link to="/" >
          Login
        </Link>
      </p>


    </>
  )
}

export default SingUpPage
