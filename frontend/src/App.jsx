import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProtectedRoute from "./Components/ProtectedRoute";
import UserDashboard from './Components/UserDashboard'
import HospitalDashboard from './Components/HospitalDashboard'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <Services />
                            <About />
                            <Contact />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/user-dashboard" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
                    <Route path="/hospital-dashboard" element={<ProtectedRoute role="user"><HospitalDashboard /></ProtectedRoute>} />
                </Routes>
                
            </Router>
        </>)

}

export default App
