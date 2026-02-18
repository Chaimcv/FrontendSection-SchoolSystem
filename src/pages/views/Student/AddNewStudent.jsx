import React, { useState } from 'react'

const AddNewStudent = () => {
    const[data,setformData]=useState();
    const handleChange=(e)=>{
        setformData(e.target.value);
    }
    const AddStudent=()=>{
        
    }
  return (
    <div className='bg-amber-200 border border-amber-600 '>
    
   
          <div className='h-screen flex'>
            <form onSubmit={AddStudent}>
            <label>NAME<input className='' type='text' onChange={handleChange} /></label>
            <label>AGE<input type='text'  onChange={handleChange} /></label>
             <label>GENDER<input type='text' onChange={handleChange} /></label>
              <label>STANDARD<input type='text' onChange={handleChange} /></label>
              <label>DIVISION<input type='text' onChange={handleChange} /></label>
             <label>GUARDIAN NAME<input type='text' onChange={handleChange} /></label>
            <label>GUARDIAN PHONENUMBER<input type='text' onChange={handleChange} /></label>
                 <label>ADDRESS<input type='text'  onChange={handleChange} /></label>
                    <label>PINCODE<input type='text' onChange={handleChange} /></label>
                    
              <button>SUBMIT</button>
             </form>     
       </div>
        </div>
       

  )
}

export default AddNewStudent