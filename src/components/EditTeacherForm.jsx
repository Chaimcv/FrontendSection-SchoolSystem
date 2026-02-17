import React, { useState } from 'react'
import { fetchOneTeacherDetails, postEditedTeacherDetails } from '../Redux/Slices/TeacherSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditTeacherForm = () => {
    const dispatch=useDispatch();
const TeacherToBeEdited=useSelector((store)=>store.teacher.oneTeacherDetailsData);
console.log(TeacherToBeEdited.data,"teacherto beEdited");

 const [tname, setTname] = useState(TeacherToBeEdited.data.name);
  const [tage, setTage] = useState("");
  const [tcity, setTcity] = useState("");
  const [tpin, setTpin] = useState("");
  const [tsubject, setTsubjectata] = useState("");
  const [tphoneNumber, setTphonenumber] = useState("");
  const [tstandard, setTstandard] = useState("");
    // const {teacherid}=useParams();
    // console.log(teacherid,"id obtained");
    //  useEffect(()=>{
    //         dispatch(fetchOneTeacherDetails(teacherid))
             
    //         },[teacherid]);

     const EditTeacher=(id)=>{
     dispatch(postEditedTeacherDetails(id))
    }
  return (
    <div>
        <form onSubmit={EditTeacher(TeacherToBeEdited.data._id)}>
            {TeacherToBeEdited ? (
        <div className='border border-black flex flex-col m-5 p-5 space-y-5'>

          <label>NAME: <input type='text'  value={tname} onChange={(e)=>setTname(e.target.value)} /></label>
         
          
          {/* <label>PINCODE: <input type='text'defaultValue={TeacherToBeEdited.data.pin} value={tpin} onChange={(e)=>setTpin(e.target.value)} /></label>
          <label>CITY: <input type='text' defaultValue={TeacherToBeEdited.city}value={tcity} onChange={(e)=>setTcity(e.target.value)} /></label>
          <label>SUBJECT: <input type='text' defaultValue={TeacherToBeEdited.subject}value={tsubject} onChange={(e)=>setTsubjectata(e.target.value)} /></label>
          <label>PHONE: <input type='number'defaultValue={TeacherToBeEdited.phoneNumber} value={tphoneNumber} onChange={(e)=>setTphonenumber(e.target.value)} /></label>
          <label>STANDARD: <input type='text'defaultValue={TeacherToBeEdited.standard} value={tstandard} onChange={(e)=>setTstandard(e.target.value)} /></label> */}

          <button type='submit'>SUBMIT</button>

        </div>
        ):
        <><h1>no teacher</h1></>}
      </form>
    </div>
  )
}

export default EditTeacherForm