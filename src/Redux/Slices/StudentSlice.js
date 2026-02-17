import { createSlice } from "@reduxjs/toolkit";

const baseUrl=process.env.REACT_APP_API_SCHOOL

const initialState={
    errors:null,
    studentData:[],
    message:null,
    oneStudent:null

}
const StudentSlice=createSlice({
    name:"Students",
    initialState,
    reducers:{

    }
})

export default StudentSlice.reducer;