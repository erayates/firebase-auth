import React from 'react'
import { Link } from 'react-router-dom'

import {Button} from '@chakra-ui/react'
import styled from '@emotion/styled'


const ButtonReg = styled.button('color: white;','background-color: #9999ff;','border: none;','border-radius: 5px;','padding: 0.6rem 1.2rem;','margin: 10px;','font-size: 16px;','text-decoration: none;','text-align: center;','cursor: pointer;')
const ButtonLog = styled.button('color: white;','background-color: #77b300;','border: none;','border-radius: 5px;','padding: 0.6rem 1.2rem;','margin: 10px;','font-size: 16px;','text-decoration: none;','text-align: center;','cursor: pointer;')
function Home() {
  return (
    <>
        <ButtonReg as={Link} to='/register'>Register</ButtonReg>
        <ButtonLog as={Link} to='/login'>Login</ButtonLog>
    </>
  )
}

export default Home