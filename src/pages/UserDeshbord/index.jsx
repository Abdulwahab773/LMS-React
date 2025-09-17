import React, { useState } from 'react'
import InputCmp from '../../components/inputFieldCmp'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import ButtonCmp from '../../components/buttonCmp'

const UserDeshbord = () => {


let [FatherName ,setFatherName] = useState("")
let [address ,setaddress] = useState("")
let [city ,setcity] = useState("")
let [cnic ,setCNIC] = useState("")
let [country ,setcountry] = useState("")
let [dob ,setdob] = useState("")
let [email ,setemail] = useState("")
let [Name ,setName] = useState("")
let [gender ,setgender] = useState("")
let [lastQualification ,setlastQualification] = useState("")
let [studentImg ,setstudentImg] = useState("")



let addUserForm =async ()=>{

  if (!FatherName || !address || !city || !cnic || !country || !dob || !email || !gender || !lastQualification || !studentImg) {
    alert("⚠ Please fill all fields before submitting.");
    return;
  }

let uid =localStorage.getItem("uid")

  try {
    
    let docRef = await addDoc(collection(db, "applicants"), {
      UserFatherName: FatherName,       
      UserAddress: address,
      UserCity: city,
      UserCNIC: cnic,
      UserCountry: country,
      UserDOB: dob,
      UserEmail: email,
      UserGender: gender,
      UserLastQualification: lastQualification,
      UserStudentImg: studentImg,
    useruid :uid,
    UsreName :Name    
    });


console.log(docRef);


  } catch (error) {
    console.log(error.message);
    
  }
}







  return (
    <div>

      

<InputCmp  
  placeholder="Enter Your FatherName"  
  onChange={(e) => setFatherName(e.target.value)} 
/>

      <InputCmp  placeholder="Enter Your address" onChange={(e)=>{
setaddress(e.target.value)
        
      }}  />
      <InputCmp  placeholder="Enter Your city"onChange={(e)=>{
setcity(e.target.value)
        
      }}   />
      <InputCmp  placeholder="Enter Your CNIC" onChange={(e)=>{
setCNIC(e.target.value)
        
      }}   />
      <InputCmp  placeholder="Enter Your country" onChange={(e)=>{
setcountry(e.target.value)
        
      }}  />
      <InputCmp  placeholder="Enter Your dob"   type="date" onChange={(e)=>{
setdob(e.target.value)
        
      }}  />
      <InputCmp  placeholder="Enter Your email" onChange={(e)=>{
setemail(e.target.value)
        
      }}   />
      <InputCmp  placeholder="Enter Your full Name" onChange={(e)=>{
setName(e.target.value)
        
      }}   />
      <InputCmp  placeholder="Enter Your gender" onChange={(e)=>{
setgender(e.target.value)
        
      }}  />
      <InputCmp  placeholder="Enter Your lastQualification"onChange={(e)=>{
setlastQualification(e.target.value)
        
      }}   />
      <InputCmp  placeholder="Enter Your studentImg" onChange={(e)=>{
setstudentImg(e.target.value)
        
      }}  />


<ButtonCmp  onClick={addUserForm} />








    </div>
  )
}

export default UserDeshbord
