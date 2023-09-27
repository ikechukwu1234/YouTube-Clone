import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineMenu, AiFillYoutube, AiOutlineSearch} from "react-icons/ai"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: blue;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.2);
`

const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: white;
`
const Second = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 250px;
   background-color: white;
`

const Icon1 = styled.div`
    color: black;
`

const Third = styled.div``
const Icon = styled.div`
    color: white;
`


const YouTube = styled.div`
    color: red;
    span{
        color: white;
    }
`

const Input = styled.input`
    padding: 10px;
    border: 1px solid silver;
    border-radius: 10px;
    height: 20px;
    width: 100%;


`

const Navbar:React.FC = () => {
  return (
    <Container>
        <First>
            <Icon>
            <AiOutlineMenu />
            </Icon>
            <YouTube>
                <AiFillYoutube />
                <span>YouTube</span>
            </YouTube>
        </First>
        <Second>
            <Input  placeholder='search'/>
            <Icon1>
                <AiOutlineSearch />
            </Icon1>
        </Second>
        <Third>3</Third>
        
      
    </Container>
  )
}

export default Navbar
