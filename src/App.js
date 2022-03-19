import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';

import Profile from './Containers/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Login from './Containers/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Sidebarbox from './Components/Sidebarbox/Sidebarbox';
import Background from './Components/Background/Background';
import Movies from './Containers/Movies/Movies';

import SelectedMovie from './Containers/SelectedMovie/SelectedMovie';
import Orders from './Containers/Orders/Orders';
import Admin from './Containers/Admin/Admin';
import Errorpage from './Containers/Errorpage/Errorpage';
import SquareButtonProfile from './Components/SquareButtonProfile/SquareButtonProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Background/>
      {/* <SquareButtonProfile/> */}
      {/* <SideButtonLogout/> */}
      {/* <Sidebar id="sidebar_container"/> */}
      <Sidebarbox id="sidebar_container"/>
      
      <Routes id="routes_container">
        
      <Route path="/*" element={<Errorpage/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/selected" element={<SelectedMovie/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/admin" element={<Admin/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
