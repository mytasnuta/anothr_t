import styled from "styled-components";
  
import { Link as LinkR} from 'react-router-dom'
export const InfoContainer = styled.div`
color:#fff;


@media screen and (max-width : 768px){
    padding:100px 0;
}
`
export const InfoWrapper=styled.div`

display = grid;
z-index:1;
height:400px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
padding-left:150px;
justify-content:center;

`
export const InfoRow = styled.div`
padding-top:30px;
display:grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};
@media screen and (max-width : 768px){

    grid-template-areas: ${({ imgStart }) => 
    imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'` };}
`
export const Column1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const Column2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0 ;
padding-bottom:60px;
`

export const TopLine = styled.p`
color: #000;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bootm:16px;
`

export const Heading = styled.h1`

margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color: ${({ lightText }) => (lightText ? '#000' : '#000')
};
@media screen and (max-width:480px){
    font-size:32px;
}
`
export const Subtitle = styled.p`
max-width:400px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({ darkText }) => (darkText ? '#000' : '#000')};
`

export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;

`
export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
export const Img = styled.img`
width: 100%;
margin:0 0 10px 0;

padding-right:0;
`

export const Getstarted = styled.h1`
text-align:center;
margin-top:150px;
margin-bottom:80px;
`




export const Button_course= styled.button`
// border-radius:50px;
// background: #363A3C;;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;

width:150px;
height:40px;


left: 173px;
top: 1006px;

background: #84D19F;
border-radius: 0px 30px;
`;
export const Btn_Link=styled(LinkR)`
color:#fff;
`







