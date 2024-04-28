import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import {Routes,Route} from 'react-router-dom'
import Add from "./pages/Add"
import List from "./pages/List"
import Order from "./pages/Order"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>
      <ToastContainer/>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/order" element={<Order />} />
      
      </Routes>
    </>
  )
}

export default App
