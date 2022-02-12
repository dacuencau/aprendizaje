
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Index from "./pages/Index"
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import "./input.css"
import "./styles/Styles.css"
import AuthLayout from './layouts/AuthLayout';
import Vehiculos from './pages/admin/Vehiculos';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
         <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>}></Route>
        </Route>
        <Route path="private" element={<PrivateLayout/>}>
        <Route path="admin" element={<Admin/>}>
        <Route path="vehiculos" element={<Vehiculos/>}></Route>
        </Route>
        </Route>
        

        <Route path="/" element={<PublicLayout/>}>
        <Route path="registro" element={<Registro/>}></Route>
       
        <Route path="" element={<Index/>}></Route>
        </Route>
       
      </Routes>



     </Router>
    </div>
  );
}

export default App;
