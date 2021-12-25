
import styled from "styled-components";


export const FooterContainer=styled.footer`
margin-top:70px;
background-color:#01BF71;
`

export const FooterWrap = styled.div`
padding:48px 24px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

max-width:1100px;
margin:0 auto;
` 

export const FooterLinksContainer=styled.div`
display:flex;
flex-direction:row;
width:400px;

@media screen and (max-width:820px){
    padding-top:32px;

}
`

export const FooterLinksWrapper=styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const FooterLinkItems =styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width:420px){
    margin:0;
    padding:10px;
    width:100%;

}
`

export const FooterLinkTitle = styled.h1`
font-size:25px;
margin-bottom:30px;
`

export const FooterLink = styled.p`
color:#000;
text-decoration:none;
margin-bottom:0.5rem;
font-size:17px;

&:hover{
    color:#01bf71;
    transition:0.3s ease-out;
   }
`

export const Footer_text = styled.h4`
color:#000;
text-decoration:none;
margin-left:550px;

`
