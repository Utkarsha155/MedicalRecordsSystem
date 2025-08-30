import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import HospitalSide from './Components/HospitalSide'

function App() {
    return (
    
    <>
    <Navbar/>
    <main>
        <Home/>
        <About />
        <Services />
        <Contact />
        <HospitalSide/>
    </main>
    <Footer/>    
    </>)
    
}

export default App
