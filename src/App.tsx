import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import {Header} from "./components/Header.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    </>
  )
}

export default App
