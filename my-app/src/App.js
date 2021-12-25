import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import "./App.css";

import AddContact from "./component/AddContact";
import ContactDetail from "./component/ContactDetail";
import ContactList from "./component/ContactList";
import './App.css';
import Header from "./component/Header";
import Home from './pages/index'
// import RegistrationPage from './pages/newregisterpage'
import CouseVideoLecture from './pages/singlecourse'
import Anter from './pages/another'
import Navbar from "./component/Navbar";
import Footer from "./component/Last";
import Info from "./pages/newregisterpage";
import Registrationnewpage from "./pages/newregisterpage"
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
   const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact }]);
  }
  const removeContactHandler= (id) =>{
      const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    })

    setContacts(newContactList);
  }

  useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContacts) (setContacts(retriveContacts));

 }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);
  // /*new added*/
  // const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts,{id: uuidv4(), ...contact} ]);
  // };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

   /*new added*/
  return (
      
    <Router>
   
      <Switch>
 
          <Route path="/" exact component={Home} />
          {/* <Route path="/register" exact component={RegistrationPage} /> */}
          <Route path="/singlepage" exact component={CouseVideoLecture} />
          <Route path="/another" exact component={Anter} />
          <Route path="/regpage" exact component={Registrationnewpage} />
      

      <div className="ui container">
        <Navbar/>
       <Header />
          <Route
            path="/cont"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
        
        <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
             {/* <Route path="/contact/:id" component={ContactDetail} />
             */}
      </div>
      </Switch>
   
    </Router>
    );
     
   
    
  }


export default App;
