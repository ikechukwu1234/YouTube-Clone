import React from 'react'
import styled from '@emotion/styled'
import { BiDotsHorizontal, BiLike } from 'react-icons/bi'
import { BsHandThumbsDown } from 'react-icons/bs'
import { MdOutlineFeedback } from 'react-icons/md'
import { PiShareFatFill } from 'react-icons/pi'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const First = styled.div`
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Second = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const Icon = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H3 = styled.div``

const CardHold = styled.div`
    height: 550px;
    width: 400px;
    background-color: black;
    border: 1px solid silver;
    outline: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Short :React.FC= () => {
  return (
    <Container>
        <First>
      <CardHold />
      </First>
      <Second>
        <Icon>
          <BiLike/>
        </Icon>
        <H3>3.3M</H3>
        <Icon>
           <BsHandThumbsDown/>
       </Icon>
       <H3>Dislike</H3>
       <Icon>
        <MdOutlineFeedback/>
       </Icon>
       <H3>7.3k</H3>
       <Icon>
        <PiShareFatFill/>
       </Icon>
       <H3>Share</H3>
       <Icon>
        <BiDotsHorizontal/>
       </Icon>
      </Second>
    </Container>
  )
}

export default Short
