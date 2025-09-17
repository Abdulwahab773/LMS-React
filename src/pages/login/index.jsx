import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import InputCmp from "../../components/inputFieldCmp";
import ButtonCmp from "../../components/buttonCmp";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {
  let [userLoginEmail, setUserLoginEmail] = useState("");
  let [userLoginPassword, setUserLoginPassword] = useState("");
let navigator = useNavigate()

  const handleLogin = async () => {
  

    await signInWithEmailAndPassword(auth, userLoginEmail, userLoginPassword)
    .then((userCredential) => {
      const user = userCredential.user.uid;
      localStorage.setItem("uid", user);
      console.log("Login Successful:", user);
      navigator("/")
     
    
    })
    .catch((error) => {
      console.error("Login Error:", error.message);
  
     
    });
  



  };

  return (
    <>
      <InputCmp placeholder="Enter Your Email"  value={userLoginEmail}  onChange={(e) => setUserLoginEmail(e.target.value)} />

      <InputCmp placeholder="Enter Your Password" type="password" value={userLoginPassword} onChange={(e) => setUserLoginPassword(e.target.value)}/>

      <ButtonCmp onClick={handleLogin} title={"Login"} />


      Don’t have an account?{" "}
      <Link to="/signup" >
          Login
        </Link>
    </>
  );
};

export default LoginPage;
