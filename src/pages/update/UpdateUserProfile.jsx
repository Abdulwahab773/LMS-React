import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import InputCmp from '../../components/inputFieldCmp';
import ButtonCmp from '../../components/buttonCmp';

const UpdateUserProfile = () => {
  const uid = localStorage.getItem("uid");

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const auth = getAuth();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === uid) {
        setDisplayName(user.displayName || "");
        setEmail(user.email || "");
        setPhotoURL(user.photoURL || "https://via.placeholder.com/150");
        setNewPhotoURL(user.photoURL || "https://via.placeholder.com/150");
      }
    });
    return () => unsubscribe();
  }, [auth, uid]);

  
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "wahab-ayan-LMS");
      data.append("cloud_name", "dw0yxu2o0");

      const res = await fetch("https://api.cloudinary.com/v1_1/dw0yxu2o0/image/upload", {
        method: "POST",
        body: data
      });

      const uploaded = await res.json();
      setNewPhotoURL(uploaded.secure_url);
      setPhotoURL(uploaded.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleUpdateProfile = async () => {
    const user = auth.currentUser;
    if (!user) return console.log("No user signed in.");
    if (user.uid !== uid) return console.log("UID mismatch. Cannot update profile.");

    try {
      await updateProfile(user, {
        displayName,
        photoURL: newPhotoURL
      });

      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Update User Profile</h1>

      <img
        src={photoURL || "https://via.placeholder.com/150"}
        alt="User Profile"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />

      <InputCmp
        placeholder="Enter Your Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <p className="mt-2 mb-4 text-gray-300">Email: {email}</p>

      {loading ? (
        <p className="text-center text-indigo-500 font-semibold mb-4">Uploading...</p>
      ) : (
        <input
          type="file"
          onChange={handleFileUpload}
          className="mb-4 mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
          file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
        />
      )}

      <ButtonCmp title="Update Profile" onClick={handleUpdateProfile} />
    </div>
  );
};

export default UpdateUserProfile;
