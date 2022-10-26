import React from 'react'
import { Link } from 'react-router-dom'

import {Button} from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useDispatch, useSelector } from 'react-redux'

import {logout} from '../firebase'
import {logout as logoutHandle} from '../store/auth'

import { useNavigate } from 'react-router-dom'

const ButtonReg = styled.button('color: white;','background-color: #9999ff;','border: none;','border-radius: 5px;','padding: 0.6rem 1.2rem;','margin: 10px;','font-size: 16px;','text-decoration: none;','text-align: center;','cursor: pointer;')
const ButtonLog = styled.button('color: white;','background-color: #77b300;','border: none;','border-radius: 5px;','padding: 0.6rem 1.2rem;','margin: 10px;','font-size: 16px;','text-decoration: none;','text-align: center;','cursor: pointer;')
const ButtonExit = styled.button('color: white;','background-color: red;','border: none;','border-radius: 5px;','padding: 0.6rem 1.2rem;','margin: 10px;','font-size: 16px;','text-decoration: none;','text-align: center;','cursor: pointer;')

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)

  const handleLogout = async () => {
    await logout()
    dispatch(logoutHandle())
    navigate('/login',{
      replace: true
    })
  }

  if(user){
    return(
      <div>
        <h1>Welcome</h1>
        <ButtonExit onClick={handleLogout}>Exit</ButtonExit>
      </div>
    )
  }
  return (
    <div>
        <ButtonReg as={Link} to='/register'>Register</ButtonReg>
        <ButtonLog as={Link} to='/login'>Login</ButtonLog>
    </div>
  )
}

export default Home