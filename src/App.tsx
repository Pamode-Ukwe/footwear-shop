import './App.css'
import Body from "./components/body/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
