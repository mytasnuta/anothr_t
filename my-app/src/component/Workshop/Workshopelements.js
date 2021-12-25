
import styled from "styled-components";
import { Link as LinkR} from 'react-router-dom'

export const ServiceContainer = styled.div`

height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: #fff;

@media screen and (max-width: 768px){
    height: 1100px;
}
@media screen and (max-width: 480px){
    height: 1300px;
}

`

export const ServiceWrapper = styled.div`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding:0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns:1fr 1fr ;
}
@media screen and (max-width: 768px){
    grid-template-columns:1fr;
    padding:0 20px;
}
`

export const ServiceCard = styled.div`
background: #6255A5;
display:flex;
flex-direction: column;
justify-content:flex-start;
align-items:left;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
color:white;
&:hover {
    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor:pointer;

}
`


export const AnotherImage = styled.img`

// margin-left:200px;
height:40px;
width:40px;
margin-bottom:10px;
border-radius: 50%;
`
export const Imagerow =styled.div`
display: grid;
grid-template-columns:20px 20px;


`
export const Servicerow=styled.div`
display: grid;
grid-template-columns:1fr 1fr;


`
export const Image = styled.img`
height:60px;
width:50px;
margin-bottom:10px;

`

export const ServiceH1 = styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:40px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesH2=styled.h2`

font-size: 1rem;
margin-bottom:10px;
`

export const ServiceP=styled.p`
color: #000;
font-size:1rem;
margin-bottom:10px;
`



export const Button_course= styled.button`


border-radius:50px;
background:#fff;





font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;

width:100px;
height:30px;
`;
export const Btn_Link=styled(LinkR)`
color:#000;
`