import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import ButtonCmp from '../../components/buttonCmp';

const AllCourses = () => {



    let [allCourses ,setAllCourses] = useState("")
    let navigate = useNavigate()


useEffect(()=>{
    getAllCourses()
},[])


    const getAllCourses = () => {
        const q = query(collection(db, "courses"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const tempArr = [];
          querySnapshot.forEach((doc) => {
            tempArr.push(doc.data());
            setAllCourses(tempArr);
          });
        });
      };
      const uid = localStorage.getItem("uid"); 

      let Enrolled = ()=>{
        if (!uid) {
            console.log("⚠ User not logged in, UID missing");
            navigate("/login")
          }else{
            console.log("userLogin");
            navigate("/userCourses")
            
          }
    }

    
  return (
    <>




{allCourses.length > 0 ? (
  allCourses.map((userFor, i) => (
    <div key={i} >
      <img src={userFor.Image || "default-image.png"} alt="Student Image" />
      <h1>Courses Name: {userFor.name}</h1>
      <h1>Course fees: {userFor.Fees}</h1>
      <p>courses Description : {userFor.Description}</p>
      <ButtonCmp  title='Enrolled' onClick={Enrolled} />

    </div>
  ))
) : (
  <p>No student courses  found.</p>
)}





    </>
  )
}

export default AllCourses
