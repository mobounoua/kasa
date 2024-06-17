import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Location from "./pages/Location"
import Error from "./pages/Error"

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/kasa" : "";
  return (
    <div>
      <Router basename = {basename} >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>   
    </div>
  )
}

export default App