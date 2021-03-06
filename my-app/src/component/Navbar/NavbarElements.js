import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'  

export const Nav =styled.nav`
background: #fff;
height:80px;
marging-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index: 10;

@media screen and (max-width:960px) {
   transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
 display:flex;
 justify-content:space-between;
 height:80px;
 z-index:1;
 width:100%;
 padding:0 24px;
 max-width:1100px;
`;
export const NavLogo =styled(LinkR)`
color:#000;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center; 
margin-left:24px;
font-weight:bold;
text-decoration:none;

`;

export const MobileIcone=styled.div`
display:none;

@media screen and (max-width: 768px){
    display:Block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#000;
}
`

export const Navmenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;
@media screen and (max-width: 760px){
    display:none;
}

`;
export const NavItem = styled.li`
height:80px;

`;
export const NavLinks=styled(LinkS)`
color: black;
display:flex;
align-items:center;
text-decoration:none;
paddin:0 1rem;
height:100%;
cursor:pointer;
margin-right: 50px;
&.active{
    border-bottom:3px solid #01bf71;
}

`;

export const NavBtn=styled.nav`
display:flex;
align-items:center;
@media screen and (max-width:760px){
    display:none;

}
`
export const NavBtn_Link=styled(LinkR)`

color:#000;
cursor:pointer;
margin-right:30px;
&:hover{
  

}
`
export const NavBtnLink=styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
// color:#010606;
color:#fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

// &:hover{
//     transition: all in 0.2s ease-in-out;
//     background:#fff;
//     color:#010606;

// }
`
