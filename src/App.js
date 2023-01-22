import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <div>
      <Navbar />
      <hr />
     {/* <HomePage /> 
      <AboutUs />*/}
      <ProfilePage />
    </div>
  );
}

export default App;
