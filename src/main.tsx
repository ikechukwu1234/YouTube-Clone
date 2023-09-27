import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import Index from './component/routes/Allroute'
import GlobalStyle from './assets/Globalstyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Index} />
  </React.StrictMode>,
)
