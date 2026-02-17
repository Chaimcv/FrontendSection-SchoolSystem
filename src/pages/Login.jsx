import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersData } from '../Redux/Slices/TeacherSlice';

const Login = () => {
    const[inputtedEmail,setInputtedEmail]=useState();
    const[inputtedPassword,setInputtedPassword]=useState();
    const DatabaseValues=useSelector((state)=>state.teacher.teacherData);
    console.log(DatabaseValues,"valuesss");
     const dispatch=useDispatch();
    const LoginFunction=()=>{
     dispatch(fetchTeachersData());
    }
   
  return (
    <div>
        <div className=' border border-gray-600 rounded-md bg-slate-400 m-10 p-5 space-y-5'>
          <label >Email:  <input className='p-2 m-1'type='text'value={inputtedEmail} onChange={(e)=>setInputtedEmail} placeholder='Enter your email'></input></label><br/> 
            <label >Password<input className='p-2 m-1' type='password' value={inputtedPassword} onChange={(e)=>setInputtedPassword} placeholder='Enter your password'></input></label> <br />
            <button className="bg-slate-100 rounded-lg" onClick={LoginFunction}>LOGIN</button>
        </div>
        <div></div>
    </div>
  )
}

export default Login