import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"
import Header from "./Header"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App