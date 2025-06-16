
import About from './About'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Passwordgen from './Components/Passwordgen'
import { Route, Routes } from "react-router-dom"

const  App = ()=> {
   return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Passwordgen />} />

          <Route path="/about"  element={<About/>} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  )
}

export default App
