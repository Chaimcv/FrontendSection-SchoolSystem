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
        navigate("/admin/dashboard");
     }
    else{
       
        alert("Invalid Credentials");
    }
   } 
  return (
    <div>
        <div  className=' border border-red-600 rounded-md bg-red-400 m-10 p-5 space-y-5'>
            <label>Email <input className='p-2 m-1 rounded-sm' type='email' placeholder='Enter  registered email' value={adminEmail} onChange={(e)=>setAdminemail(e.target.value)} /></label><br />
             <label>Password <input  className='p-2 m-1 rounded-sm' type='password' placeholder='Enter password' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)} /></label><br />
             <button className="bg-red-100 rounded-lg p-2" onClick={checkValidAdmin}>Login</button>
        </div>
        {/* <div><h5>New Admin? Register here</h5><button onClick={navigateToRegistration()}>SignUp</button></div> */}
    </div>
  )
}

export default AdminLogin