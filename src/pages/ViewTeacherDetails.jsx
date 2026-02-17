import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneTeacherDetails } from '../Redux/Slices/TeacherSlice';
import EditTeacherForm from '../components/EditTeacherForm';

const ViewTeacherDetails = () => {
const[editformVisibility,setEditFormVisibility]=useState(false);

const dispatch=useDispatch();
const oneTeacherDetail=useSelector((store)=>store.teacher.oneTeacherDetailsData);
console.log(oneTeacherDetail,"oneteacher");
    const {teacherid}=useParams();
    console.log(teacherid,"id obtained");

        useEffect(()=>{
        dispatch(fetchOneTeacherDetails(teacherid))
         
        },[teacherid]);
       //console.log(teacher,"teacher accessed");


       const EditTeacherDetails=(EditId)=>{
        setEditFormVisibility(true);
      console.log(EditId,"editid");                          
      dispatch(fetchOneTeacherDetails(EditId))                 //passed id
       }
      
  return (
    <div>
      {editformVisibility &&(
        <EditTeacherForm
        OnEditBtnClick={()=>setEditFormVisibility(false)} />
      )}
         <h1>Teacher Details</h1>

    {oneTeacherDetail ? (
      <div>
        <h2>Name: {oneTeacherDetail.data.name}</h2>
        <h2>Class: {oneTeacherDetail.data.standard}</h2>
        <h2>City: {oneTeacherDetail.data.city}</h2>
        <h2>Pincode: {oneTeacherDetail.data.pin}</h2>
        <h2>Phonenumber: {oneTeacherDetail.data.phoneNumber}</h2>
      </div>
    ) : (
      <h2>No teacher</h2>
    )}
    <button onClick={()=>EditTeacherDetails(oneTeacherDetail?.data?._id)} >Edit</button>
    </div>
  )
}

export default ViewTeacherDetails