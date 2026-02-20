import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersData } from '../Redux/Slices/TeacherSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[inputtedEmail,setInputtedEmail]=useState();
    const[inputtedPassword,setInputtedPassword]=useState();
    const navigate=useNavigate();

    const DatabaseValues=useSelector((state)=>state.teacher.teacherData);
    console.log(DatabaseValues,"valuesss");

     const dispatch=useDispatch();
     
    const LoginFunction=()=>{
     dispatch(fetchTeachersData());
     console.log(inputtedEmail,"email");
     console.log(inputtedPassword,"password");
    }
   const TeacherLoginPage=()=>{
    navigate("/teacher/login");
   }
    const PrincipalLoginPage=()=>{
    navigate("/admin");
   }
   const ParentLoginPage=()=>{
    navigate("/parentLogin");
   }
  return (
    <div>
      <div>
        <button className="bg-slate-100 rounded-lg m-1 p-2" onClick={TeacherLoginPage}>LOGIN AS TEACHER</button>
         <button className="bg-slate-100 rounded-lg m-1 p-2" onClick={PrincipalLoginPage}>LOGIN AS PRINCIPAL</button>
          <button className="bg-slate-100 rounded-lg p-2" onClick={ParentLoginPage}>LOGIN AS PARENT</button>
      </div>
        <div className=' border border-gray-600 rounded-md bg-slate-400 m-10 p-5 space-y-5'>
          <label >Email:  <input className='p-2 m-1'type='text'value={inputtedEmail} onChange={(e)=>setInputtedEmail(e.target.value)} placeholder='Enter your email'></input></label><br/> 
            <label >Password: <input className='p-2 m-1' type='password' value={inputtedPassword} onChange={(e)=>setInputtedPassword(e.target.value)} placeholder='Enter your password'></input></label> <br />
            <button className="bg-slate-100 rounded-lg p-2" onClick={LoginFunction}>LOGIN</button>
        </div>
        <div></div>
    </div>
  )
}

export default Login