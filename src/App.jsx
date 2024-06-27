import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    Aos.init()
  },[])
  return(
    <div>
      <Header />
      <Navigation/>
      <Banner/>
      <Profile/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App
