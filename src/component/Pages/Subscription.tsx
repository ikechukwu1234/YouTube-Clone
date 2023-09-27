import React from 'react'
import styled from '@emotion/styled'
import {PiDotsSixLight} from "react-icons/pi"
import {PiListDashesLight} from "react-icons/pi"

const Container = styled.div`
  padding: 40px
`
const Hold = styled.div`
 font-size: 12px;
`
const Man = styled.div`
  display:flex;
  justify-content: flex-end;
  font-size: 25px;
  p{
   font-size:18px
  }

`
const Card = styled.div`
height: 200px;
width: 350px;
background-color: white;
border-radius: 4px;
border: 1px solid black;
`
const CardHold = styled.div``
const Subscription:React.FC = () => {
  return (
    <Container>
        <Hold>
            <p>Latest</p>
            <Man>
              <p>Manage</p>
              <PiDotsSixLight/>
              <PiListDashesLight/>
            </Man>
        </Hold>
        <CardHold>
         <Card/>     
     </CardHold>

    </Container>
  )
}

export default Subscription