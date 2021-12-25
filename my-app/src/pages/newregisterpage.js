import React from 'react'
import RegistrationSection from '../component/FirstpageofRegistration'



import { homeObjOne } from '../component/FirstpageofRegistration/data'
import Footer from '../component/Last'
import Livesection from '../component/livebutton'
import Navbar from '../component/Navbar'
import {Getstarted} from '../component/FirstpageofRegistration/RegistrationElemets'



const  Registrationnewpage= () => {
    return (
            <div>
              <Navbar/>
              <Getstarted>Lets Gets Started</Getstarted>
              <RegistrationSection{...homeObjOne}/>
             
              <Footer/>
            </div>
            
           
       
    )
}

export default Registrationnewpage
