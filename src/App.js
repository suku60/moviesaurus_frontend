import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Footer from './Components/Footer/Footer';
import Login from './Containers/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar id="sidebar_container"/>
      <Routes id="routes_container">
        
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
