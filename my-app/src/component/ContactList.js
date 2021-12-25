import React from "react";
import { Link } from "react-router-dom";
import CardContact from "./ContactCard";

const ContactList = (props) => {
   const  deletContactHandler = (id) =>{
       props.getContactId(id);
   }
  
   const renderContactList = props.contacts.map((contact) => {
         return (
          <CardContact contact={contact} clickHander={deletContactHandler} key={contact.id}></CardContact>
         );
   })
    return(
        <div class="main">
          <h2>Find out through Location
                {/* <Link to="/add">    
                <button className="ui button blue right"> Add contact</button>
                </Link> */}
               
            </h2>
            <div class="ui fluid icon input">
                   <input type="text" placeholder="Search through loaction wise..." />
                   <i class="search icon"></i>
            </div>
        
            <div class="ui right sidebar">hii</div>
            <div className="ui celled list">
            {renderContactList}
        </div>
        </div>
    )


}
export default ContactList




























// import React from "react";
// // import { Link } from "react-router-dom"
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//   console.log(props);

//   const deleteConactHandler = (id) => {
//     props.getContactId(id);
//   };


//   const renderContactList = props.contacts.map((contact) => {
//     return (
//       <ContactCard
//         contact={contact}
//         clickHander={deleteConactHandler}
//         key={contact.id}
//       />
//     );
//   });
//   return (
//     <div class="main">
//       <h2>Tutor
//         {/* <Link to="/add">
//         <button className="ui button blue right">Add Contact</button>
//        </Link> */}
//       </h2>
//       <div className="ui celled list">{renderContactList}</div>;

//     </div>
//   )
// };

// export default ContactList;