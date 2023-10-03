import React, {useContext} from 'react'
import Navbar from '../blocks/Navbar'
import Sidebar from '../blocks/Sidebar'
import {Outlet} from "react-router-dom"
import styled from '@emotion/styled'
import { GlobalContext } from "../services/GlobalContext"

const LayoutContainer = styled.div<{ml: string}>`
    margin-top: 90px;
    margin-left: ${(props)=>props.ml};
`

const OutletContainer = styled.div`
  padding: 20px;
`

const Weblayout :React.FC= () => {
  const {toggle} = useContext (GlobalContext);
  return (
    <LayoutContainer ml={toggle ? "100px" : "200px"}>
        <Sidebar />
        <Navbar /> 
        <OutletContainer>     
          <Outlet />
        </OutletContainer>
      
    </LayoutContainer>
  )
}

export default Weblayout
