import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import NavbarSection from './Components/NavbarSection/NavbarSection'
import FooterSection from './Components/FooterSection/FooterSection'
import BlogOne from './Pages/Blogs/BlogOne'

function App() {
 

  return (
    <div className="App">
      <NavbarSection/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/small-business-website-2025' element={<BlogOne/>}/>
      </Routes>
      <FooterSection/>
    </div>
  )
}

export default App
