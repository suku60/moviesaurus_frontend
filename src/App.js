import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';

import Profile from './Containers/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Login from './Containers/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import SideButtonLogout from './Components/SideButtonLogout/SideButtonLogout';
import Background from './Components/Background/Background';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Background/>
      {/* <SideButtonLogout/> */}
      <Sidebar id="sidebar_container"/>
      <Routes id="routes_container">

          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
