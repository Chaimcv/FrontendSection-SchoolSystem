import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherHomepage = () => {
    //const{id}=useParams();
    const navigate=useNavigate();
    const StudentList=()=>{
        navigate("/allStudentslisted");
    }
  return (
    <div className='bg-green-200'>
        <div>
            <button>Profile</button>
        </div>
        <div>
            <button onClick={StudentList}>Students</button>
            <button></button>
        </div>
    </div>
  )
}

export default TeacherHomepage