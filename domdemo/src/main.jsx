import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/components/Home.jsx'
import Aboutus from './assets/components/Aboutus.jsx'
import Careers from './assets/components/careers.jsx'
import Contact from './assets/components/Contactus.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

const disha=createBrowserRouter(createRoutesFromElements(
  <Route element={<App></App>} path='/'>

<Route element={<Contact></Contact>} path='/Contact'></Route>
<Route element={<Careers></Careers>} path='/Careers'></Route>
<Route element={<Home></Home>} path='/Home'></Route>
<Route element={<Aboutus></Aboutus>} path='/About'></Route>

  </Route>
))

createRoot(document.getElementById('root')).render(
<RouterProvider router={disha}>
    <App />
</RouterProvider>
)

