import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ResumeWorkspace from "./pages/ResumeWorkspace/ResumeWorkspace"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeWorkspace />} />
        {/* <Route path="/presignup" element={<PreSignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} /> */}
      </Routes>
    </Router>)
}

export default App
