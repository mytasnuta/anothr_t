import React from 'react'

import { 
         InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        Button_course,
        Btn_Link,
        ImgWrap,
        Img
     } from './RegistrationElemets'
 const RegistrationSection= ({lightText,
    topline,
    imgStart,
    id,
    LightBg,
    darkText,
   }) => {
    return (
        
         <InfoContainer LightBg={LightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                   <Column1>
                    <TextWrapper>
                        <TopLine>{topline}</TopLine>
                        <Heading lightText={lightText}>Tutors</Heading>
                        <Subtitle darkText={darkText}>Find your preferred tuition jobs, Shine your tutoring career,
                         Earn the most at your end.</Subtitle>
                        <Button_course>
                            <Btn_Link to="/add">Join Now</Btn_Link>
                       </Button_course>
                    </TextWrapper>
                   </Column1> 
                   <Column2>
                  
                    <TextWrapper>
                        <TopLine></TopLine>
                        <Heading lightText={lightText}>Students and Parents</Heading>
                        <Subtitle darkText={darkText}>requirements, Find your expected tutors nearby, recruit Your expected one.</Subtitle>
                        <Button_course>
                            <Btn_Link to="/add">Join Now</Btn_Link>
                       </Button_course>
                    </TextWrapper>
                  
                   </Column2>

                </InfoRow>
            </InfoWrapper>
         </InfoContainer>   
        
    )
}
export default RegistrationSection