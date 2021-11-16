//import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/pages/Home";
import HeroContainer from "./components/HeroContainer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
      <HeroContainer/>
    </>
  );
}

export default App;
