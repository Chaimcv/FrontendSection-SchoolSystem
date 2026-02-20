import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherHomepage = () => {
    //const{id}=useParams();
    const navigate=useNavigate();
    const StudentList=()=>{
        navigate("/allStudentslisted");
    }
    const ParentList=()=>{
        navigate("/parentslist");
    }
  return (
    <div className='bg-green-200'>
        <div>
            <button className='bg-green-500 rounded-lg p-2 m-2'>My Profile</button>
        </div>
        <div>
            <button className='bg-green-500 rounded-lg p-2 m-2' onClick={StudentList}>Students</button><br />
             <button className='bg-green-500 rounded-lg p-2 m-2' onClick={ParentList}>Parents</button>
            <button></button>
        </div>
    </div>
  )
}

export default TeacherHomepage