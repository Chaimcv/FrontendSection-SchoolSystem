import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminRoutes from './Routes/AdminRoutes';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
         <Header />
      <BrowserRouter>
      <Routes>
     
        <Route path="/admin/*" element={<AdminRoutes />}/>
     
      </Routes>
      </BrowserRouter>
         <Footer />
    </div>
  );
}

export default App;
