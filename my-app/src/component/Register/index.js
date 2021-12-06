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
             <FormH1>Register To login in account
                      </FormH1>
                      <FormLabel htmlfor='for'>Email</FormLabel>
                      <FormInput type='email'/>
                      <FormLabel htmlfor='for'>Name</FormLabel>
                      <FormInput type='text'/>
                      <FormLabel htmlfor='for'>Location</FormLabel>
                      <FormInput type='text'/>
                      <FormLabel htmlfor='for'>Mobile</FormLabel>
                      <FormInput type='number'/>
                      <FormLabel type='password'>Password</FormLabel>
                      <FormInput type='password'/>
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forget Password</Text>
             </NewForm>
            
             
              
          </FormContent>
          </FormWrap>
      </Container>
    )
}

export default Register
