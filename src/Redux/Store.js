import { configureStore } from "@reduxjs/toolkit";
import TeacherReducer from "./Slices/TeacherSlice";    //whole TeacherSlice will be imported irrespective of name(Teacherreducer)
import StudentSlice from "./Slices/StudentSlice"; 
const store=configureStore({
    reducer:{
        teacher:TeacherReducer,
        student:StudentSlice,
       
    }
});
export default store;