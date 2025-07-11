import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home/page"
import MyVisions from "./pages/My_Visions/page"
import Industrialist from "./pages/Industrialist/page"
import Builder from "./pages/Builder/page"
import SocialWorker from "./pages/Social_Worker/page"
import Contactme from "./pages/Contactme/page"

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_visions" element={<MyVisions />} />
        <Route path="/magnate" element={<Industrialist />} />
        <Route path="/estate" element={<Builder />} />
        <Route path="/lions_club" element={<SocialWorker />} />
        <Route path="/reach_me" element={<Contactme />} />
      </Routes>
    </Router>
  )
}

export default App
