import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router'

import { createBrowserRouter, RouterProvider } from 'react-router'
import QoutesPage from './Qoutes/Qoutes.jsx'
import Home from './Home/Home.jsx'

const router = createBrowserRouter([
  {
    element:<Home/>,
    path:"/"
  },
  {
    element:<QoutesPage/>,
    path:"/qoutes"
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
// hi