import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import ProfilePage from './pages/ProfilePage/ProfilePage';
//import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route exact path="/pro-networking/" element={<HomePage />} />
          <Route exact path="/pro-networking/about-us" element={<AboutUs />} />
          <Route exact path="/pro-networking/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
