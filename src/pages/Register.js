import React from 'react'

import { useState } from 'react';
import {ChakraProvider,Button,FormControl,FormLabel,FormHelperText,Input,useToast} from '@chakra-ui/react';

import {register} from '../firebase'

import {useDispatch} from 'react-redux'
import {login} from '../firebase'


function Register() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const toast = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await register(email,password)
    if(user){
      toast({
        title: "Account created",
        description: "We've succesfully created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true, 
      })
      setEmail('')
      setPassword('')
    }
  }
  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel mt={4}>Password</FormLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <FormHelperText>Must be at least 6 characters.</FormHelperText>
          <Button colorScheme='green' mt={4} w={"100%"} disabled={!email || !password || password.length < 6} type="submit">Register</Button>
          <Button colorScheme='blue' mt={4} w={"100%"} disabled={!email || !password} type="submit">Login</Button>
      </FormControl>
      </form>
      
  
    </ChakraProvider>
  
    
  );
  
}

export default Register