import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import ButtonCmp from '../../components/buttonCmp';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const UserDeshbord = () => {

  let navigator = useNavigate()
    let uid = localStorage.getItem("uid")
    let [userCheckEngrolled,setUserCheckEngrolled] = useState("")
    let [userCheckApplicants,setUserCheckApplicants] = useState("")


useEffect(()=>{
    checkEnrolled()
    checkApplicants()

},[])


const handleLogout = () => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
      localStorage.removeItem("uid"); 
      navigator("/")
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};


const checkEnrolled = async () => {
    const q = query(
      collection(db, "Enrolled"),
      where("useruid", "==", uid)
    );
    const snapshot = await getDocs(q);
  
    if (!snapshot.empty) {
      let userData = null;
      snapshot.forEach((doc) => {
        userData = { ...doc.data(), status: "Enrolled" };
        setUserCheckEngrolled(userData)
      });
      return userData;
    }
    return null;
  };
  

  const checkApplicants = async () => {
    const q = query(
      collection(db, "applicants"),
      where("useruid", "==", uid)
    );
    const snapshot = await getDocs(q);
  
    if (!snapshot.empty) {
      let userData = null;
      snapshot.forEach((doc) => {
        userData = { ...doc.data(), status: "Applicant" };
        setUserCheckApplicants(userData)
      });
      return userData;
    }
    return null;
  };

  
console.log(userCheckEngrolled);
console.log(userCheckApplicants);





  return (
    <div>

<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
    {userCheckEngrolled ? (
      <>
        <h1 className="text-green-600 font-bold text-lg mb-4">✅ User is Enrolled</h1>

        <p><span className="font-medium text-gray-800">📧 Email:</span> {userCheckEngrolled.UserEmail}</p>
        <p><span className="font-medium text-gray-800">👨 Father Name:</span> {userCheckEngrolled.UserFatherName}</p>
        <p><span className="font-medium text-gray-800">🏠 Address:</span> {userCheckEngrolled.UserAddress}</p>
        <p><span className="font-medium text-gray-800">🌆 City:</span> {userCheckEngrolled.UserCity}</p>
        <p><span className="font-medium text-gray-800">🌍 Country:</span> {userCheckEngrolled.UserCountry}</p>
        <p><span className="font-medium text-gray-800">🆔 CNIC:</span> {userCheckEngrolled.UserCNIC}</p>
        <p><span className="font-medium text-gray-800">🎓 Qualification:</span> {userCheckEngrolled.UserLastQualification}</p>
        <p><span className="font-medium bg-amber-400">⚧ Gender:</span> {userCheckEngrolled.UserGender}</p>
      </>
    ) : userCheckApplicants ? (
      <>
        <h1 className="text-blue-600 font-bold text-lg mb-4">📌 User is Applicant</h1>

       
      </>
    ) : (
        <>
      <h1 className="text-red-600 font-bold text-lg">You’re currently not enrolled in any classes.</h1>
      <ButtonCmp title='Enroll Now' onClick={()=>{
navigator("/UserCourse")
      }} />
        </>
    )}
  </div>
</div>


<ButtonCmp title='sing out ' onClick={handleLogout}/>

<ButtonCmp  title='edit profile' onClick={()=>{
  navigator()
}} />




    </div>
  )
}

export default UserDeshbord
