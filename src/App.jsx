import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App
