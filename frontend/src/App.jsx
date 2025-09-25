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
import ViewReports from './Components/ViewReports'
import UploadReports from './Components/UploadReports'
import YourProfile from './Components/YourProfile'
import UserNavbar from './Components/UserNavbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Router>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <Home />
                            <Services />
                            <About />
                            <Contact />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={<><Navbar /><Login /></>} />
                    <Route path="/signup" element={<><Navbar /><Signup /></>} />

                    <Route path="/user-dashboard" element={<ProtectedRoute role="user"><><UserNavbar /><UserDashboard /></></ProtectedRoute>} />
                    <Route path="/hospital-dashboard" element={<ProtectedRoute role="hospital"><HospitalDashboard /></ProtectedRoute>} />
                    <Route path="/view-reports" element={
                        <ProtectedRoute role="user">
                            <><UserNavbar /><ViewReports /></>
                        </ProtectedRoute>
                    } />
                    <Route path="/upload-reports" element={
                        <ProtectedRoute role="user">
                            <><UserNavbar /><UploadReports /></>
                        </ProtectedRoute>
                    } />
                    <Route path="/your-profile" element={
                        <ProtectedRoute role="user">
                            <><UserNavbar /><YourProfile /></>
                        </ProtectedRoute>
                    } />
                </Routes>

            </Router>
        </>)

}

export default App
