import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div``

const Butt = styled.button<{bg: string; cl:string}>`
   padding: 15px;
   border-radius: 10px;
   width: 130px;
   background-color: ${(props)=>props.bg};
   color: ${(props)=>props.cl};
   :hover{
    background-color: transparent;
    color: black;
    cursor: pointer;
   }
`

interface Iprops{
    bg:string;
    cl:string;
    title:string
}

const Button :React.FC<Iprops>= ({bg, cl, title}) => {
  return (
    <Container>
        <Butt bg={bg} cl={cl}>
            {title}
        </Butt>
      
    </Container>
  )
}

export default Button
