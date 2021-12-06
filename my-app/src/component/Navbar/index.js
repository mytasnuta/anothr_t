import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcone, 
    Navmenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} 
from './NavbarElements'

const Navbar = () => {
    
        return (
            <Nav>
               <NavbarContainer>
                   <NavLogo to='/' >
                       Tution Point
                   </NavLogo>
                   <MobileIcone>
                       <FaBars />
                   </MobileIcone>  
                  <Navmenu>
                      <NavItem>
                         <NavLinks to="home">HOME</NavLinks> 
                      </NavItem>
                      <NavItem>
                         <NavLinks to="jobboard">JOB BOARD</NavLinks> 
                      </NavItem>
                      <NavItem>
                         <NavLinks to="services">COURSES</NavLinks> 
                      </NavItem>
                      <NavItem>
                         <NavLinks to="login">LOGIN</NavLinks> 
                      </NavItem>
                  </Navmenu>
                  <NavBtn>
                      <NavBtnLink to="/register">REGISTRATION</NavBtnLink>
                  </NavBtn>
               </NavbarContainer>
           </Nav>
         
    );
};

export default Navbar





















 

