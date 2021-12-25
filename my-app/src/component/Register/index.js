import React from 'react'
import { Container,FormWrap,FormContent,
    NewForm,FormH1,FormLabel,FormInput,FormButton,Text
    } from './RegisterElements'

const Register = () => {
    return (
      <Container>
          <FormWrap>
          <FormContent>
             <NewForm action="#">
             <FormH1>LOG IN</FormH1>
                      <FormLabel htmlfor='for'>Email</FormLabel>
                      <FormInput type='email'/>
                      <FormLabel htmlfor='for'>Name</FormLabel>
                      <FormInput type='text'/>
                      
                      
                      <FormLabel type='password'>Password</FormLabel>
                      <FormInput type='password'/>
                      <FormButton type='submit'>SIGN UP</FormButton>
                      <Text>Forget Password</Text>
             </NewForm>
            
             
              
          </FormContent>
          </FormWrap>
      </Container>
    )
}

export default Register
