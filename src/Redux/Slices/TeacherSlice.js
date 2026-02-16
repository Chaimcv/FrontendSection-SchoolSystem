import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
 
const baseUrl=process.env.REACT_APP_API_SCHOOL
const initialState={ 
        errors:null,
        teacherData:[],        //for all teachers
        message:null,
    }
const TeacherSlice=createSlice({
    name:"Teacher",
    initialState,
    reducers:{                      //like setFuction in useState
         setError:(state,action)=>{
              state.errors=action.payload;
         },
         
            setTeacherData:(state,action)=>{
                state.teacherData=action.payload;
            },
            setMessage:(state,action)=>{
                state.message=action.payload;
            }
         
    }
 });
 // fetch teachers              
    export const fetchTeachersData=()=>async(dispatch)=>{
        try{
           const response=await axios.get(`${baseUrl}/teacher`)
           console.log(response.data,"response checked for teacher at teacherSlice");
           
             if(response.data)
               {
                const {data,message}=response.data;
                  dispatch(setTeacherData(data));
                  dispatch(setMessage(message));
                 }
           
        }catch(error){
            dispatch(setError(error));
        }
    }
 export const{setError,setTeacherData,setMessage}=TeacherSlice.actions;
 export default TeacherSlice.reducer;