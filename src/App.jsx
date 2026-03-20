import Navbar from "./Components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero.jsx";
import Footer from "./Components/Footer.jsx";
import Mac from "./Pages/Macc/Mac.jsx";
import IPad from "./Pages/Ipad/IPad.jsx";
import IPhone from "./Pages/Iphone/IPhone.jsx";
import Support from "./Pages/Support/Support.jsx";
import Buy from "./Pages/Buy/Buy.jsx";
function App() {
 

  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path='/mac' element={<Mac/>} />
      <Route path='/mac/explore-all-mac' element={<Mac/>} />
      <Route path="/ipad" element={<IPad/>} />
      <Route path="/iphone" element={<IPhone/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/buy" element={<Buy/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
  )
}

export default App
