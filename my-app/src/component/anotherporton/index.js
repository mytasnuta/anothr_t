import React from 'react'
import { Button } from '../ButtonElements'
import ReactPlayer from 'react-player'
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
        ImgWrap,
        
     } from './Anotherporton'
 const AnotherInfoSection = ({lightText,
    topline,
    imgStart,
    id,
    LightBg,
    heading,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2}) => {
    return (
        
         <InfoContainer LightBg={LightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                   <Column1>
                    <TextWrapper>
                        <TopLine>{topline}</TopLine>
                        <Heading lightText={lightText}>{heading}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                   </Column1> 
                   <Column2>
                    <ImgWrap>
                    <ReactPlayer width='380px' height='240px' controls url='https://www.youtube.com/watch?v=WEDIj9JBTC8' />
              
                   
                    </ImgWrap>
                   </Column2>

                </InfoRow>
            </InfoWrapper>
         </InfoContainer>   
        
    )
}
export default AnotherInfoSection