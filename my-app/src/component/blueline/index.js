import React from 'react'
import {LineContainer,LineWrap,Threetext,Textline ,Linkstext} from './BlueElements'
 const LineforEnroll = () => {
    return (
        <LineContainer>
           <LineWrap>
                  <Threetext>
                
                      <Textline style={{marginTop: '21px'}}>
                      <Linkstext to="/cont">
                      Hire a Tutor
                      </Linkstext>
                      </Textline>

                      <Textline>
                      <Linkstext to="/regpage">
                      Become a Tutor
                      </Linkstext>
                      </Textline>

                      <Textline>
                      Your Learning Asistant
                      </Textline>
                  </Threetext>
              
           </LineWrap>
            
        </LineContainer>
    )
}
export default LineforEnroll