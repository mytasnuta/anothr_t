import React from 'react'
import AnotherInfoSection from '../component/anotherporton'


import { homeObjOne } from '../component/anotherporton/data'
import Livesection from '../component/livebutton'
import Navbar from '../component/Navbar'




const  Anter= () => {
    return (
            <div>
              <Navbar/>
              <Livesection/>
              <AnotherInfoSection{...homeObjOne}/>
          
            </div>
            
           
       
    )
}

export default  Anter
