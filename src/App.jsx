
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Clients from './pages/Clients'
import Vaga from './pages/Vaga'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/clients" element={<Clients/>}></Route>
        <Route path="/vaga" element={<Vaga/>}></Route>
      </Routes>
     
    </Router>
  )
}

export default App
