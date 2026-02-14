import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate =useNavigate();
    const[adminEmail,setAdminemail]=useState();
    const[adminPassword,setAdminPassword]=useState();
  const adminEmailSaved=process.env.REACT_APP_API_ADMIN_EMAILS.split(',');
  const adminPasswordSaved=process.env.REACT_APP_API_ADMIN_PASSWORDS.split(',');
  console.log(adminEmailSaved,"admin emails");
   console.log(adminEmail);
   console.log(adminPassword);
   const checkValidAdmin=()=>{
     if(adminEmailSaved.includes(adminEmail)&& adminPasswordSaved.includes(adminPassword)){
        alert("Login Successfull");
        navigate("/dashboard");
     }
    else{
        alert("Invalid Credentials");
    }
   } 
  return (
    <div className='bg-red-400'>
        <div>
            <h3>email </h3><input type='email' value={adminEmail} onChange={(e)=>setAdminemail(e.target.value)}></input>
             <h3>Password </h3><input type='password' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)}></input>
             <button onClick={checkValidAdmin()}>Login</button>
        </div>
        {/* <div><h5>New Admin? Register here</h5><button onClick={navigateToRegistration()}>SignUp</button></div> */}
    </div>
  )
}

export default AdminLogin