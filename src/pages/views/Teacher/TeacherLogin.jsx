import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersData } from '../../../Redux/Slices/TeacherSlice';
import { useNavigate } from 'react-router-dom';

const TeacherLogin = () => {
     const[inputtedEmail,setInputtedEmail]=useState();
        const[inputtedPassword,setInputtedPassword]=useState();
         const navigate=useNavigate();
         const DatabaseValues=useSelector((state)=>state.teacher.teacherData);
         console.log(DatabaseValues,"valuesss");

//          const test = DatabaseValues.find(
//   (t) => t.Email === inputtedEmail
// );

// console.log(test?.name);

         const test=DatabaseValues.find((t)=>
            t.Email===inputtedEmail);
         const teacherIdPassedForLogin=test?._id;
            console.log(teacherIdPassedForLogin,"specific value");
        //   console.log(test?.password,"specific value");
     const dispatch=useDispatch();
     
        const LoginAsTeacher=()=>{
          dispatch(fetchTeachersData());
          if(inputtedEmail===test?.Email&& inputtedPassword===test?.Password){
            console.log("ok");
            navigate(`/teacher/profile/${teacherIdPassedForLogin}`);

          }
          else{
            console.log("not ok");
          }
              console.log(inputtedEmail,"email");
              console.log(inputtedPassword,"password");
        }
  return (
    <div>
         <div className=' border border-orange-600 rounded-md bg-orange-400 m-10 p-5 space-y-5'>
          <label >Email:  <input className='p-2 m-1'type='text'value={inputtedEmail} onChange={(e)=>setInputtedEmail(e.target.value)} placeholder='Enter your email'></input></label><br/> 
            <label >Password: <input className='p-2 m-1' type='password' value={inputtedPassword} onChange={(e)=>setInputtedPassword(e.target.value)} placeholder='Enter your password'></input></label> <br />
            <button className="bg-orange-100 rounded-lg p-2" onClick={LoginAsTeacher}>LOGIN</button>
        </div>
    </div>
  )
}

export default TeacherLogin