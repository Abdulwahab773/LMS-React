// import React, { useEffect, useState } from 'react'
// import {  collection, onSnapshot, query } from 'firebase/firestore'
// import { db } from '../../firebase'
// import ButtonCmp from '../../components/buttonCmp'
// import { useNavigate } from 'react-router-dom'


// const UserCourses = () => {

// let [userCourse ,setUserCourse] = useState("")
// let navigate = useNavigate()



// useEffect(()=>{
//   getCourses()
// },[])
//   const getCourses = () => {
//     const q = query(collection(db, "courses"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const tempArr = [];
//       querySnapshot.forEach((doc) => {
//         tempArr.push(doc.data());
//         setUserCourse(tempArr);
//       });
//     });
//   };


// console.log(userCourse);

//   return (
//     <div>
//       <h1>Courses</h1>

//       {userCourse.length > 0 ? (
//   userCourse.map((userFor, i) => (
//     <div key={i} >
//       <img src={userFor.Image || "default-image.png"} alt="Student Image" />
//       <h1>Courses Name: {userFor.name}</h1>
//       <h1>Course fees: {userFor.Fees}</h1>
//       <p>courses Description : {userFor.Description}</p>
//  <ButtonCmp
//         title="Enrolled"
//         onClick={() => {
//           console.log("Selected Course:", userFor.name); 
//         localStorage.setItem("user-Course-Select",userFor.name)
          
//           navigate("/UserDeshbord");

//         }}
//       />
//     </div>
//   ))
// ) : (
//   <p>No student courses  found.</p>
// )}

//     </div>
//   )
// }

// export default UserCourses
