import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Stories from './Components/Stories/Stories'
import Login from './Components/Login/Login'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import { ToastContainer } from 'react-toastify'
import EmailVerify from './Components/EmailVerify/EmailVerify'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Stories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verify" element={<EmailVerify />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
