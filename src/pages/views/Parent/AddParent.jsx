import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const AddParent = () => {
   const students= useSelector((state)=>state.student.studentData);
   //const[nameSelection,setNameSelection]=useState();
   const[formData,setFormData]=useState({
    name:"",
    email:"",
    studentname:"",
    studentId:"",
    phonenumber:"",
    address:"",
    pincode:""

   });
    console.log(students);

    const AllStudents=()=>{
      
    }

     const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};
  return (
    <div className='bg-green-300 h-screen '>
       
        <form>
            <div className='flex flex-col m-16 p-4 space-y-4'>
                  <label>STUDENT NAME: 
                <select value={formData.studentname} onChange={handleChange}>
                    {students.map((item)=>(
            <option key={students?._id} value={students.Name} >{item.Name}</option>
            
        ))}
        </select>
        </label>
             <label>NAME :   <input type='text' name="name" value={formData.name} onChange={handleChange}></input></label>
              <label>EMAIL :  <input type='email' name="email" value={formData.email} onChange={handleChange}></input></label>
               <label>ADDRESS :  <input type='text' name="address" value={formData.address} onChange={handleChange}></input></label>
                <label>PINCODE :<input type='number' name="pincode" value={formData.pincode} onChange={handleChange}></input></label>
               <label>PHONENUMBER:  <input type='number' name="phonenumber" value={formData.phonenumber} onChange={handleChange}></input></label>
                <button className='bg-green-600 p-2 rounded-lg'>Sumbit</button>
            </div>
        </form>
    </div>
  )
}

export default AddParent