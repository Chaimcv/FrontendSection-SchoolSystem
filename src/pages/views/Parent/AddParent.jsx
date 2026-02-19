import React from 'react'
import { useSelector } from 'react-redux';

const AddParent = () => {
   const students= useSelector((state)=>state.student.studentData);
 const [{ Name }]  =students;
    console.log(Name);
    const AllStudents=()=>{
      
    }
  return (
    <div>
        <form>
            <div>
                {/* <select value={AllStudents}></select>
                <input type=''></input> */}
            </div>
        </form>
    </div>
  )
}

export default AddParent