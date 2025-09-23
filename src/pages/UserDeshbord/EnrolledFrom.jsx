import React, { useEffect, useState } from "react";
import InputCmp from "../../components/inputFieldCmp";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import ButtonCmp from "../../components/buttonCmp";

const EnrolledFrom = () => {
  let [FatherName, setFatherName] = useState("");
  let [address, setaddress] = useState("");
  let [city, setcity] = useState("");
  let [cnic, setCNIC] = useState("");
  let [country, setcountry] = useState("");
  let [dob, setdob] = useState("");
  let [email, setemail] = useState("");
  let [Name, setName] = useState("");
  let [gender, setgender] = useState("");
  let [lastQualification, setlastQualification] = useState("");
  let [studentImg, setstudentImg] = useState("");
  const [userImage, setUserImage] = useState("");
  let [loading, setLoading] = useState(false);
  let [userCheckEngrolled, setUserCheckEngrolled] = useState("");
  let [userCheckApplicants, setUserCheckApplicants] = useState("");
  let [bankDetails, setBankDetails] = useState("");
  let [userImageBank, setUserImageBank] = useState("");

  let [userCourseSelected, setUserCourseSelected] = useState("");
  let uid = localStorage.getItem("uid");
  let selectCorse = localStorage.getItem("user-Course-Select");
  useEffect(() => {
    setUserCourseSelected(selectCorse);
    checkApplicants();
    checkEnrolled();
    fetchBankDetails();
  }, []);

  const checkEnrolled = async () => {
    const q = query(collection(db, "Enrolled"), where("useruid", "==", uid));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      let userData = null;
      snapshot.forEach((doc) => {
        userData = { ...doc.data(), status: "Enrolled" };
        setUserCheckEngrolled(userData);
      });
      return userData;
    }
    return null;
  };

  const checkApplicants = async () => {
    const q = query(collection(db, "applicants"), where("useruid", "==", uid));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      let userData = null;
      snapshot.forEach((doc) => {
        userData = { ...doc.data(), status: "Applicant" };
        setUserCheckApplicants(userData);
      });
      return userData;
    }
    return null;
  };

  console.log(userCheckEngrolled);
  console.log(userCheckApplicants);

  let addUserForm = async () => {
    if (
      !FatherName ||
      !address ||
      !city ||
      !cnic ||
      !country ||
      !dob ||
      !email ||
      !gender ||
      !lastQualification ||
      !studentImg
    ) {
      alert("⚠ Please fill all fields before submitting.");
      return;
    }

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
        useruid: uid,
        UsreName: Name,
        userCourseSelect: userCourseSelected,
        userImg: userImage,
        userImageBank: userImageBank,
      });

      console.log(docRef);
      checkApplicants();
      localStorage.removeItem("user-Course-Select");
    } catch (error) {
      console.log(error.message);
    }
  };

  let handleFileUpload = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "wahab-ayan-LMS");
    data.append("cloud_name", "dw0yxu2o0");

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dw0yxu2o0/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let uploadedImageURL = await res.json();
    console.log("Uploaded Image URL:", uploadedImageURL.url);
    setUserImage(uploadedImageURL.url);
    setLoading(false);
  };

  let handleFileUploadBankImage = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "wahab-ayan-LMS");
    data.append("cloud_name", "dw0yxu2o0");

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dw0yxu2o0/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let uploadedImageURL = await res.json();
    console.log("Uploaded Image URL:", uploadedImageURL.url);
    setUserImageBank(uploadedImageURL.url);
    setLoading(false);
  };

  console.log(userImageBank);
  console.log(studentImg);

  const fetchBankDetails = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bankDetails"));
      const details = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBankDetails(details);
    } catch (error) {
      console.error("Error fetching bank details: ", error);
    }
  };

  console.log(bankDetails);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          {userCheckEngrolled ? (
            <h1 className="text-green-600 font-bold text-lg">
              ✅ User is Enrolled
            </h1>
          ) : userCheckApplicants ? (
            <h1 className="text-blue-600 font-bold text-lg">
              📌 User is Applicant
            </h1>
          ) : (
            <>
              <InputCmp
                value={userCourseSelected}
                readOnly
                onChange={() => {
                  console.log("add course  name ");
                }}
              />

              <InputCmp
                placeholder="Enter Your FatherName"
                onChange={(e) => setFatherName(e.target.value)}
              />

              <InputCmp
                placeholder="Enter Your address"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your city"
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              />
              <InputCmp
                type={"number"}
                placeholder="Enter Your CNIC"
                onChange={(e) => {
                  setCNIC(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your country"
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your dob"
                type="date"
                onChange={(e) => {
                  setdob(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your gender"
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your lastQualification"
                onChange={(e) => {
                  setlastQualification(e.target.value);
                }}
              />
              <InputCmp
                placeholder="Enter Your studentImg"
                onChange={(e) => {
                  setstudentImg(e.target.value);
                }}
              />

              {loading ? (
                <p className="text-center text-indigo-500 font-semibold">
                  Uploading...
                </p>
              ) : (
                <input
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
      file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
      file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                  type="file"
                  onChange={handleFileUpload}
                />
              )}

              <ButtonCmp title="add user Form" onClick={addUserForm} />

              <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Bank Details</h2>
                {bankDetails.length > 0 ? (
                  bankDetails.map((detail) => (
                    <div
                      key={detail.id}
                      className="border p-4 rounded-lg mb-3 bg-gray-50 shadow-sm"
                    >
                      <p>
                        <strong>Account Holder:</strong> {detail.accountHolderName}
                      </p>
                      <p>
                        <strong>Account No:</strong> {detail.accountNumber}
                      </p>
                      <p>
                        <strong>Bank Name:</strong> {detail.bankName}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No bank details found.</p>
                )}
              </div>

              {loading ? (
                <p className="text-center text-indigo-500 font-semibold">
                  Uploading...
                </p>
              ) : (
                <input
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
      file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
      file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                  type="file"
                  onChange={handleFileUploadBankImage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrolledFrom;
