import React from "react";
import teacherimage from '../images/femalee.png'


const CardContact = (props) => {
    const {id, name , university , subject , location} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image"  style={{marginTop:"17px",height:"45px",width:"45px"}} src={teacherimage} alt="a teacher image"/>
        <div className="content">
           
            <div className="header">Name         : {name} </div>
            <div className="header">University   : {university} </div>
            <div className="header">Subject List : {subject} </div>
            <div className="header">Location     : {location} </div>

        </div>
        <i className="envelope open outline alternate outline icon" 
        style={{color:"black",marginTop:"17px"}} 
        ></i>
        {/* <i className="trash alternate outline icon" 
        style={{color:"black",marginTop:"7px"}} 
        onClick={() => props.clickHander(id)}></i>
         */}
           
          
    </div>
    )

}
export default CardContact




















































// import React from "react";
// import { Link } from "react-router-dom";
// import user from "../images/user.png";

// const ContactCard = (props) => {
//   const { id, name,  university } = props.contact;
//   return (
//     <div className="item">
//       <img className="ui avatar image" src={user} alt="user" />
//       <div className="content">
//         <Link to={{pathname:`/contact/${id}`, state:{contact :props.contact}}}>
//         <div className="header">{name}</div>
//         <div>{university}</div>
//         </Link>
//       </div>
//       {/* <i
//         className="trash alternate outline icon"
//         style={{ color: "red", marginTop: "7px" }}
//         onClick={() => props.clickHander(id)}
//       ></i> */}
//        <button className="ui button blue right">
//             View
//           </button>
//     </div>
//   )
// }

// export default ContactCard;