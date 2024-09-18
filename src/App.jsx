
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import Cform from './pages/Cform'
import Footer from './static/Footer'
import About from './pages/About'
import Navbar from './static/navbar/Navbar'
import Auth from './pages/Auth'

function App() {
  

  return (
    <>
      <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register/>} />
      <Route  path="/about" element={<About/>}/>
      <Route  path="/form" element={<Cform/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
