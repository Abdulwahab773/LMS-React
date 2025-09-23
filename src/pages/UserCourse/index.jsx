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
let Enrolled = (course)=>{
    if (!uid) {
        console.log("User not logged in, UID missing");
        navigate("/login")
      }else{
        console.log("userLogin");
        localStorage.setItem("user-Course-Select", course);
        navigate("/EnrolledFrom")
        
      }
}
console.log(courses.name);




  return (
    <>


{courses.length > 0 ? (
        courses.map((course, i) => (
          <div key={i}>
            <img src={course.Image || "default-image.png"} alt="Course" />
            <h1>Course Name: {course.courseName}</h1>
            <h1>Course Fees: {course.courseFees}</h1>
            <p>Course Description: {course.courseDesc}</p>
            
            
            <ButtonCmp title="Enrolled" onClick={() => Enrolled(course.courseName)} />
          </div>
        ))
      ) : (
        <p>No student courses found.</p>
      )}

<ButtonCmp  title='view all courses' onClick={()=>{
navigate("/All-Courses")
}}/>



    </>
  )
}

export default UserCourse
