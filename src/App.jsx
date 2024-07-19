import './App.css'
import { Outlet } from 'react-router'
import Footer from './Components/Outlet/Footer'
import Navbar from './Components/Outlet/Navbar'
import Slides from './Components/Principal/Slides'

function App() {

  return (
    <>
      {/* <Navbar />
      <Outlet />
      <Footer /> */}

      <Slides />
    </>
  )
}

export default App
