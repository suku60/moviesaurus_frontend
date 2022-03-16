import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as AdminSvg} from '../../img/admin.svg'
import './SideButtonAdmin.css';
import '../Sidebar/Sidebar.css'

const SideButtonAdmin = (props) => {

    let desiredView = useNavigate();
//     let sidebarData = props.passport?.token;

//     console.log("magiia?", sidebarData)

//     const [sidebarDisplay, setSidebarDisplay] = useState("none")

//     // console.log("display before if", sidebarDisplay)
//     console.log("por aquí hay...", props.passport?.token)

//     useEffect(()=> {
        
//     },[]);
    
//     useEffect(() => {

//        if(props.passport?.token !== undefined){
//         //    console.log("consolelog de l .data.token dentro del if",props.passport?.data.token)
           
//         //    console.log("consolelog de l token dentro del if",props.passport?.data.token) 
//            setSidebarDisplay("flex")
//         //    console.log("display inside if=", sidebarDisplay)

//         if(sidebarData === ""){
//             setSidebarDisplay("none")
//         }

//     }
// },[sidebarData]);

const pathFinder = () => {
    desiredView(props.pathUrl)
}


    return (
        <div className="sidebar_admin_container"onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <AdminSvg/> 
            </div>
            <div className="icon_text" id="admin_background">admin
            </div>
        </div>
    )
};

// admin button will have to appear only when an admin logs + 
// need to expand sidebar height when this happens

export default SideButtonAdmin;