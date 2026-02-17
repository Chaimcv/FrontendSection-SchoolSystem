import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminRoutes from './Routes/AdminRoutes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeacherRoutes from './Routes/TeacherRoutes';
import Homepage from './pages/Homepage';

function App() {

  //  const[data,setData]=useState([]);
  
  //   useEffect(() => {
  //   fetch('http://127.0.0.1:8000/teacher')               //backend connection api
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message)
  //   );
  
  // }, []);
  // console.log(data,"data accessed from backend");
  
  
  return (
    <div className="App">
         <Header />
      <BrowserRouter>
      <Routes>
     
        <Route path="/admin/*" element={<AdminRoutes />}/>
        <Route path='/teacher/*' element={<TeacherRoutes />}/>

        <Route path='/' element={<Homepage />}/>
      </Routes>
      </BrowserRouter>
         <Footer />
    </div>
  );
}

export default App;
