import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Location from "./pages/Location"
import Error from "./pages/Error"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>   
    </div>
  )
}

export default App