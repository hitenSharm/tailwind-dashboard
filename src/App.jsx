import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Dashboard } from './components/Dashboard/Dashboard';
import Login from './components/Login'


function App() {

  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
