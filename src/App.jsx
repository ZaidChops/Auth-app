import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar'
import Register from './component/Pages/Register'
import Home from './component/Pages/Home'
import Login from './component/Pages/Login'

const App = () => {
  return (
    
    <Router>
      <Navbar/>
     <div className="container p-5">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
     </div>
     <ToastContainer/>
    </Router>
      
    
  )
}

export default App
