import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import ButtonCmp from '../../components/buttonCmp';

const AllCourses = () => {



    let [allCourses ,setAllCourses] = useState([])
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
          });
          setAllCourses(tempArr);
        });
      };
      const uid = localStorage.getItem("uid"); 

      let Enrolled = (course)=>{
        if (!uid) {
            console.log("⚠ User not logged in, UID missing");
            navigate("/login")
          }else{
            console.log("userLogin");
            localStorage.setItem("user-Course-Select", course.courseName);
            navigate("/EnrolledFrom")
            
          }
    }

    
  return (
    <>




{allCourses.length > 0 ? (
  allCourses.map((course, i) => (
    <div key={i}>
      <img src={course.Image || "default-image.png"} alt="Course Image" />
      <h1>Course Name: {course.courseName}</h1>
      <h1>Course Fees: {course.courseFees}</h1>
      <p>Course Description: {course.courseDesc}</p>

      <ButtonCmp title="Enrolled" onClick={() => Enrolled(course)} />
    </div>
  ))
) : (
  <p>No student courses found.</p>
)}





    </>
  )
}

export default AllCourses
