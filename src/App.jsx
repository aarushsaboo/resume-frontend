import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ResumeWorkspace from "./pages/ResumeWorkspace/ResumeWorkspace"
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeWorkspace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>)
}

export default App
