import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NavbarSection from './Components/NavbarSection/NavbarSection'
import FooterSection from './Components/FooterSection/FooterSection'
import Portfolio from './Pages/Portfolio'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavbarSection/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      <FooterSection/>
    </div>
  )
}

export default App
