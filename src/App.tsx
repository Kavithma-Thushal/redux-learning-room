import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./views/pages/Register.tsx";
import Dashboard from "./views/pages/Dashboard.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}