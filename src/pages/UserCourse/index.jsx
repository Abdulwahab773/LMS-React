import { collection, limit, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import {  useNavigate } from 'react-router-dom';
import ButtonCmp from '../../components/buttonCmp';

const UserCourse = () => {



    let [courses , setCourses] = useState("")
    let navigate = useNavigate()

 useEffect(()=>{
    getCoursesUser()
 },[])
 

    const getCoursesUser = () => {
        const q = query(
          collection(db, "courses"),
          limit(4) 
        );
      
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const tempArr = [];
          querySnapshot.forEach((doc) => {
            tempArr.push(doc.data());
          });
          setCourses(tempArr); 
        });
      
        return unsubscribe;
      };
      


console.log(courses);
const uid = localStorage.getItem("uid"); 
let Enrolled = ()=>{
    if (!uid) {
        console.log("User not logged in, UID missing");
        navigate("/login")
      }else{
        console.log("userLogin");
        navigate("/userCourses")
        
      }
}

  return (
    <>


      {courses.length > 0 ? (
  courses.map((userFor, i) => (
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

<ButtonCmp  title='view all courses' onClick={()=>{
navigate("/All-Courses")
}}/>



    </>
  )
}

export default UserCourse
