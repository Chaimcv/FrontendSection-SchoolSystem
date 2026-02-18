import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAStudent, fetchStudentsData } from '../../../Redux/Slices/StudentSlice';
import { useNavigate } from 'react-router-dom';

const StudentListing = () => {
      const dispatch=useDispatch();
      const navigate=useNavigate();
 
      const AllStudents=useSelector((state)=>state.student.studentData)||[]; 
      console.log(AllStudents,"all students");

      useEffect(()=>{
        dispatch(fetchStudentsData());
      },[]);

      const viewStudentDetails=()=>{

      }

      const deleteStudent=(studentIdToDelete)=>{
        console.log(studentIdToDelete,"id");
      dispatch(deleteAStudent(studentIdToDelete));
       dispatch(fetchStudentsData());
      }
      const AddStudent=()=>{
        navigate("/newStudent");
      }
  return (
    <div className='bg-amber-100'>
        
         <div className='bg-amber-200'><h3>Add New Student  <button className='rounded-md bg-amber-500 px-7' onClick={AddStudent}>+</button></h3></div>
      <div>
        <h3>Students</h3>
          <table className='auto p-2 m-10'>
            <thead className='bg-amber-700'>
              <tr className='p-5'>
                <th className='p-5'> NAME </th>
                 <th className='p-5'> AGE </th>
                <th className='p-5'> CLASS </th> 
                <th className='p-5'>DIVISION</th>
                 <th className='p-5'>GUARDIAN NAME </th>
                  <th></th>
                   <th></th>
                <th></th>
              </tr>
            </thead>
            
            <tbody  className='bg-amber-200' >
               {AllStudents?.map((item)=>(
              <tr key={item._id}>
                <td>{item?.Name}</td>
                 <td>{item?.Age}</td>
                  <td>{item?.Standard}</td>
                   <td>{item?.Division}</td>
                    <td>{item?.Guardian_name}</td>
                      <td><button className='bg-amber-500 rounded-lg m-2 p-2' onClick={ ()=> viewStudentDetails(item?._id)}>View Details</button></td>
                         <td><button className='bg-amber-500 rounded-lg m-2 p-2' onClick={ ()=> deleteStudent(item?._id)}>Delete</button></td>
              </tr>
               ))}
            </tbody>
            
          </table>
          
      </div>
    </div>
  )
}

export default StudentListing