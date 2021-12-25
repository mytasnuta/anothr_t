import React from 'react'
import AnotherInfoSection from '../component/anotherporton'


import { homeObjOne } from '../component/anotherporton/data'
import ExtraInfoCourse from '../component/anotherportonextrapart'
import Footer from '../component/Last'
import Livesection from '../component/livebutton'
import Navbar from '../component/Navbar'




const  Anter= () => {
    return (
            <div>
              <Navbar/>
              <Livesection/>
              <AnotherInfoSection{...homeObjOne}/>
               <ExtraInfoCourse/>

               <Footer />
            </div>
            
           
       
    )
}

export default  Anter
