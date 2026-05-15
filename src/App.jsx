import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import LoginPage from "./pages/Login";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}