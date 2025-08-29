import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import HospitalSide from './Components/HospitalSide'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

        const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar /><Home /><Footer /></>
        },
        {
            path: "/about",
            element: <><Navbar /><About /><Footer /></>
        },
        {
            path: "/services",
            element: <><Navbar /><Services /><Footer /></>
        },
        {
            path: "/contact",
            element: <><Navbar /><Contact /><Footer /></>
        },
        {
            path: "/hospital",
            element: <><Navbar /><HospitalSide/><Footer /></>
        }
    ])

    return <RouterProvider router={router} />;
    
}

export default App
