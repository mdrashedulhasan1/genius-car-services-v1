import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
