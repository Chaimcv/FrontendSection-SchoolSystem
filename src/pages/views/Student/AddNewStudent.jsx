import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewStudentToDb } from '../../../Redux/Slices/StudentSlice';
import { useNavigate } from 'react-router-dom';

const AddNewStudent = () => {
    const[formdata,setformData]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleChange=(e)=>{
        setformData(e.target.value);
    }
    const AddStudent=()=>{
    dispatch(addNewStudentToDb(formdata));
    navigate("/allStudentslisted");
    }
  return (
    <div className='bg-amber-200 border border-amber-600 '>
    <h2 className='align-middle font-semibold'>Add Student Details</h2>
   <form onSubmit={AddStudent}>
          <div className='h-full flex flex-col m-5 p-5 space-y-5'>
            
            <label>NAME<input className='' type='text' onChange={handleChange} /></label>
            <label>AGE<input type='text'  onChange={handleChange} /></label>
             <label>GENDER<input type='text' onChange={handleChange} /></label>
              <label>STANDARD<input type='text' onChange={handleChange} /></label>
              <label>DIVISION<input type='text' onChange={handleChange} /></label>
             <label>GUARDIAN NAME<input type='text' onChange={handleChange} /></label>
            <label>GUARDIAN PHONENUMBER<input type='text' onChange={handleChange} /></label>
                 <label>ADDRESS<input type='text'  onChange={handleChange} /></label>
                    <label>PINCODE<input type='text' onChange={handleChange} /></label>
                    
              <button className='bg-amber-400  '>SUBMIT</button>
              
       </div>
         </form>  
        </div>
       

  )
}

export default AddNewStudent