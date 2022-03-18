import React, {useEffect, useState} from "react";
import './Profile.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";


const Profile = (props) => {

    console.log("props en profile", props)
    let desiredView = useNavigate("")

    const [userData, setUserData] = useState({
        username: props.passport?.username,
        birthdate: props.passport?.birthdate,
        email: props.passport?.email
    });

    const [orders, setOrders] = useState([]);
    const [movies, setMovies] = useState([]);

    console.log("usedata before everything", userData)

    const [displayName, setDisplayName] = useState("");
    const [displayBirth, setDisplayBirth] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");

    const [validationMessage, setValidationMessage] = useState("none");
    
    console.log()
    useEffect(()=> {
    getUserOrders();  
    showLatestMovies();

    if(props.passport?.token === ""){
        desiredView("/");
    }
    },[]);

    useEffect(()=> {

        if(props.passport?.token === ""){
            desiredView("/");
        }
        

        },[orders, movies, props]);


    const fillUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    };

    const changeDisplayName = () => {
        if(displayName === "none"){
          setDisplayName("flex")
        }else{
          setDisplayName("none")
        }
  
      }

      const changeDisplayEmail = () => {
        if(displayEmail === "none"){
          setDisplayEmail("flex")
        }else{
          setDisplayEmail("none")
        }
  
      }

      const changeDisplayBirth = () => {
        if(displayBirth === "none"){
          setDisplayBirth("flex")
        }else{
          setDisplayBirth("none")
        }
  
      }

    const updateUserData = async () => {

        let dataBody = {
            username: userData.username,
            birthdate: userData.birthdate,
            email: userData.email

        }
        console.log("databody we're sending...", dataBody)

        let auth = {
            headers: { Authorization:`Bearer ${props.passport?.token}`}
        }

        try {
            let dataResponse = await axios.put(`http://localhost:3000/users/update/${props.passport?.id}`, dataBody, auth);
        
            // console.log("userdata antes de meterlo en redux", userData)
            if(dataResponse){
                // props.dispatch({type:UPDATE_PASSPORT, payload: userData})

                setValidationMessage("flex")
                setTimeout(() => {
                    setValidationMessage("none")
                    
                props.dispatch({ type: LOGOUT});

                  }, 3900);
            }
        } catch (error) {
            console.log("response failure here", error)
        }
    }

    const getUserOrders = async () => {

        try {

            let ordersResponse = await axios.get("http://localhost:3000/orders/show/active");
            console.log("nos llegan estas orders:", ordersResponse)
        }catch(error){
            console.log(error)
        }

    }

    const showLatestMovies = async () => {

        try {

            let moviesResponse = await axios.get("http://localhost:3000/movies/newest");
            console.log("nos llegan estas orders:", moviesResponse)
        }catch(error){
            console.log(error)
        }

    }

    return (
        <div className="box_profile animation_webpage_toright">
           <div className="box_profile_inner2" id="box_user">
                <div className="profile_title">your data</div>
                <div className="profile_name">name: {props.passport?.name}</div>
                <div className="profile_username">username: {props.passport?.username}</div>
                
                <div className="profile_username">email: {props.passport?.email}</div>
                <br/>
                <div className="update_profile">
                    <div className="profile_title">update your data here</div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>username
                        </div>
                        <div className="input_box">
                            <input type="username" name="username" id="input_name" title="username" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayName()}}>hide
                            </div>
                        </div>
                    </div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayBirth}} onClick={()=>{changeDisplayBirth()}}>birthdate
                        </div>
                        <div className="input_box">
                            <input type="date" name="birthdate" id="input_name" title="birthdate" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayBirth()}}>hide
                            </div>
                        </div>
                    </div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayEmail}} onClick={()=>{changeDisplayEmail()}}>email
                        </div>
                        <div className="input_box">
                            <input type="email" name="email" id="input_name" title="email" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayEmail()}}>hide
                            </div>
                        </div>
                    </div>      
                    <div className="update_button" onClick={()=>{updateUserData()}}>update data</div>
                </div>
                <div className="validation_message" style={{display:validationMessage}}>your data was updated succesfully<br/>you will be logged out and redirected to our main page<br/>please log again</div>
                
           </div>
           
           <div className="box_profile_inner2" id="box_orders_profile">
               <div className="orders_title">your active orders here</div>
               <div className="orders_data">
               </div>
           </div>

           <div className="box_profile_inner2" id="box_newest">
               <div className="orders_title">latest movies</div>
               <div className="orders_data">
               </div>
           </div>
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Profile);