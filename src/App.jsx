import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './assets/Pages/Homepage'
import Aboutpage from './assets/Pages/Aboutpage'
import Contactpage from './assets/Pages/Contactpage'
import Servicespage from './assets/Pages/Servicespage'
import Projectspage from './assets/Pages/Projectspage'
import Testimonialpage from './assets/Pages/Testimonialpage'
import PrimaryLayout from './assets/Layout/PrimaryLayout'
import Notfoundpage from './assets/Pages/Notfoundpage'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<PrimaryLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
          <Route path='/services' element={<Servicespage/>}/>
          <Route path='/projects' element={<Projectspage/>}/>
          <Route path='/testimonial' element={<Testimonialpage/>}/>
        </Route>
        <Route>
          <Route path='*' element={<Notfoundpage/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App