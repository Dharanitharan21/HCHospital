import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aboutpage from './components/Aboutpage'
import Servicepage from './components/Servicepage'
import Doctorspage from './components/Doctorspage'
import Appointmentpage from './components/Appointmentpage'
import ContactPage from './components/ContactPage'
import Homecontent from './components/Homecontent'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Homecontent/>}></Route>
    <Route path='about' element={<Aboutpage/>}></Route>
    <Route path='services' element={<Servicepage/>}></Route>
    <Route path='doctors' element={<Doctorspage/>}></Route>
    <Route path='appointments' element={<Appointmentpage/>}></Route>
    <Route path='contact' element={<ContactPage/>}></Route>
   
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
