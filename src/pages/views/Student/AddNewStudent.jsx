import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewStudentToDb } from '../../../Redux/Slices/StudentSlice';
import { useNavigate } from 'react-router-dom';

const AddNewStudent = () => {
    const[formdata,setformData]=useState({
      name:"",
      email:"",
      age:"",
      gender:"",
      standard:"",
      division:"",
      guardian:"",
      guardian_phonenumber:"",
      address:"",
      pincode:""
    });
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
   
    const handleChange = (e) => {
  const { name, value } = e.target;

  setformData((prev) => ({
    ...prev,
    [name]: value
  }));
};

    const AddStudent=()=>{
    
    dispatch(addNewStudentToDb(formdata));
    navigate("/allStudentslisted");
    }
  return (
    <div className='bg-amber-200 border border-amber-600 '>
    <h2 className='align-middle font-semibold'>Add Student Details</h2>
    
   <form onSubmit={AddStudent}>
          <div className='h-full flex flex-col m-5 p-5 space-y-5'>
            
            <label>NAME <input className='' type='text' name="name" value={formdata.name} onChange={handleChange} /></label>
             <label>EMAIL <input className='' type='email' name="email" value={formdata.email} onChange={handleChange} /></label>
            <label>AGE <input type='number' name="age" value={formdata.age}  onChange={handleChange} /></label>
             <label>GENDER <input type='text' name='gender' value={formdata.gender} onChange={handleChange} /></label>
              <label>STANDARD <input type='number' name='standard' value={formdata.standard} onChange={handleChange} /></label>
              <label>DIVISION <input type='text' name='division' value={formdata.division} onChange={handleChange} /></label>
             <label>GUARDIAN NAME <input type='text' name='guardian' value={formdata.guardian} onChange={handleChange} /></label>
            <label>GUARDIAN PHONENUMBER <input type='number' name="guardian_phonenumber" value={formdata.guardian_phonenumber} onChange={handleChange} /></label>
                 <label>ADDRESS <input type='text' name='address' value={formdata.address} onChange={handleChange} /></label>
                    <label>PINCODE <input type='number' name='pincode' value={formdata.pincode} onChange={handleChange} /></label>
                    
              <button className='bg-amber-400  '>SUBMIT</button>
              
       </div>
         </form>  
        </div>
       

  )
}

export default AddNewStudent