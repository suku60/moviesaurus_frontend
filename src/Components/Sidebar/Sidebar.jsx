import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
       <div className='box_sidebar animation_sidebar'>
           <div className="sidebar_item_container">
               <div className="sidebar_home_container">
                   <div className="icon_container"></div><div className="icon_text"></div>
               </div>
               <div className="sidebar_profile_container">
                   <div className="icon_container"></div><div className="icon_text"></div>
               </div>    
               <div className="sidebar_orders_container">
               <div className="icon_container"></div><div className="icon_text"></div>
               </div>
               <div className="sidebar_movies_container">
                 <div className="icon_container"></div><div className="icon_text"></div>
               </div>
               <div className="sidebar_logout_container">
              <div className="icon_container"></div><div className="icon_text"></div>
               </div>
           </div>
       </div>
       
    )
};

export default Sidebar;