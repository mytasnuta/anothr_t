import React from 'react'
import InfoSection from '../component/InfoSection'
import { homeObjOne,homeObjtwo } from '../component/InfoSection/data'
import Navbar from '../component/Navbar'
import Services from '../component/Courses'
import Footer from '../component/Last'
import TextforEnroll from '../component/Enroll'
import LineforEnroll from '../component/blueline'



export const Home = () => {
   
    return (
        <div>
          <Navbar/>
       
          <InfoSection {...homeObjOne}/>
          <LineforEnroll/>
          <TextforEnroll/>
         
          <Services />
          <InfoSection {...homeObjtwo}/>
        
          
         <Footer/>

        </div>
    )
}
export default Home