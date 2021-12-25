import React from "react";


class AddContact extends React.Component {
   state = {
       name:"",
       university:"",
       subject:"",
       location:""
   }
   
   add = (e) => {
       e.preventDefault();
       if(this.state.name === "" || this.state.university === "" || this.state.subject === ""){
           alert("This Field need to Be complete otherwise you can't apply")
           return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "",university: "",subject:"",location:""});
        this.props.history.push("/cont");

   }
  
    render(){
    return(
     <div className="ui main">
         <h2>
             
         </h2>
         <form className="ui form" onSubmit={this.add}>
             
             <div className="field">
                 <label>Name</label>
                 <input 
                 type="text" 
                 name="name" 
                 placeholder="Enter your Name" 
                 value={this.state.name}
                 onChange={ (e) => this.setState({name: e.target.value})}/>
             </div>

             <div className="field">
                 <label>University</label>
                 <input type="text"
                  name="university"
                  placeholder="Enter your University Name" 
                  value={this.state.university}
                  onChange={ (e) => this.setState({university: e.target.value})}
                  />
             </div>

             <div className="field">
                 <label>Subject</label>
                 <input type="text" 
                 name="subject"
                 placeholder="Enter The subject what you want to teach" 
                 value={this.state.subject}
                 onChange={ (e) => this.setState({subject: e.target.value})}/>
             </div>

             <div className="field">
                 <label>Location</label>
                 <input type="text" 
                 name="location" 
                 placeholder="Enter Location"
                 value={this.state.location}
                 onChange={ (e) => this.setState({location: e.target.value})} />
             </div>


             <button className="ui button green   ">Apply For Job Board</button>


         </form>
     </div>    
    )


}
}
export default AddContact



































































// import React from "react";


// class AddContact extends React.Component {
//   state = {
//     name: "",
//     university: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.university === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", university: "" });
//     this.props.history.push("/cont")
//   };
//   render() {
//     return (
      
//       <div className="ui main">
//         {/* <h2>Teacher Registration</h2> */}
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>University</label>
//             <input
//               type="text"
//               name="university"
//               placeholder="University"
//               value={this.state.university}
//               onChange={(e) => this.setState({ university: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;