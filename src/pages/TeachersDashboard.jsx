import React, { useEffect, useState } from 'react'

const TeachersDashboard = () => {
   const[teachers,setTEachers]=useState();
    useEffect(()=>{
     fetch('http://127.0.0.1:8000/teacher')              
        .then((res) => res.json())
         .then((data) => setTEachers(data.data)
       );
    },[]);
   console.log(teachers,"data accessed");

   const deleteTeacher = (deletionId) =>{
    console.log(deletionId);
    alert("Deleted successfully");
   }
  return (
    <div>
        <h3>List of teachers</h3>
      {/* {teachers.map((item)=>(
        <div className='bg-green-200' key={item?.id}> */}
          <table className='auto p-2 m-2'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
             {teachers.map((item)=>(
        
            <tbody  className='bg-green-200' key={item?.id}>
              <tr>
                <td>{item?.name}</td>
                   <td>{item?.standard}</td>
                      <td><button className='bg-green-400 rounded-lg m-2 p-2'>View Details</button></td>
                         <td><button className='bg-green-400 rounded-lg m-2 p-2' onClick={ ()=> deleteTeacher(item?.id)}>Delete</button></td>
              </tr>
            </tbody>
             ))}
          </table>
          
      
    
      
    </div>
  )
}

export default TeachersDashboard