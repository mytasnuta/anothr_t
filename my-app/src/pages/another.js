import React from 'react'
import AnotherInfoSection from '../component/anotherporton'


import { homeObjOne } from '../component/anotherporton/data'
import Navbar from '../component/Navbar'




const  Anter= () => {
    return (
            <div>
              <Navbar/>
              <AnotherInfoSection{...homeObjOne}/>
          
            </div>
            
           
       
    )
}

export default  Anter
