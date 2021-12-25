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
    NavBtnLink,
    NavBtn_Link
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
                         <NavLinks to="/">HOME</NavLinks> 
                      </NavItem>
                      <NavBtn>
                         <NavBtn_Link to="/cont">JOB BOARD</NavBtn_Link> 
                      </NavBtn>
                      <NavItem>
                         <NavLinks to="services">COURSES</NavLinks> 
                      </NavItem>
                      <NavItem>
                         <NavLinks to="/login">LOGIN</NavLinks> 
                      </NavItem>
                  </Navmenu>
                  <NavBtn>
                      <NavBtnLink to="/regpage">REGISTRATION</NavBtnLink>
                  </NavBtn>
               </NavbarContainer>
           </Nav>
         
    );
};

export default Navbar





















 

