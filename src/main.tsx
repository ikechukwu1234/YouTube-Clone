import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import Index from './component/routes/Allroute'
import GlobalStyle from './assets/Globalstyle'
import {GlobalProvider} from "./component/services/GlobalContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
    <GlobalStyle />
    <RouterProvider router={Index} />
    </GlobalProvider>
  
  </React.StrictMode>,
)
