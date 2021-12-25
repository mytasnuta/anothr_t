import styled from "styled-components";


export const Container = styled.div`
min-height: 699px;
position:absoulate;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
margin-top:60px;
margin-bottom:60px;
background:liner-gradient(
    108deg,
    rgba(1, 147, 86, 1) 100%;
    rgba(10, 201, 122, 1) 100%;

)

`

export const FormWrap=styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;


@media screen and (max-width:400px){
    height:80%;
}

`





export const FormContent = styled.form`

height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480px){
   padding:10px;
}
`



export const NewForm = styled.form`
background: #F9F7FF;
max-width:500px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin: 0 auto;
padding:80px 32px;
border-radius:4px ;
box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width:400px){
   padding:32px 32px;
}

`



export const FormH1= styled.h1`
margin-bottom:40px;
color: #438172;
font-size:20px;
font-weight:400;
text-align:center;
`

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;


`

export const FormInput = styled.input`
padding:16px;
margin-bottom:32px;
border:none;

border-radius:4px;
`


export const FormButton = styled.button`
background : #01bf71;
padding:16px 0;
border:none;
border-radius:4px;
color:#fff;
font-size:14px;
`

export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#000;
font-size:14px;
`
















