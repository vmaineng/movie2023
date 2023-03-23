import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NavHome from './components/NavHome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavHome />
      <BrowserRouter> 
      <Routes> 
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
