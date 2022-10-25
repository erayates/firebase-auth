import React from 'react'

import { useState } from 'react';
import {ChakraProvider,Button,FormControl,FormLabel,Input,useToast} from '@chakra-ui/react';

import {login} from '../firebase'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const toast = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await login(email,password)
    if(user){
      toast({
        title: "You logged in successfully.",
        status: "info",
        duration: 2000,
      })
      setEmail('')
      setPassword('')
    }else{
        toast({
            title: "Invalid email or password or Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
            status: "error",
            duration: 2000,
            isClosable:true
        })
    }
  }
  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <FormLabel mt={4}>Password</FormLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button colorScheme='blue' mt={4} w={"100%"} disabled={!email || !password} type="submit">Login</Button>
      </FormControl>
      </form>
      
  
    </ChakraProvider>
  
    
  );
  
}

export default Login