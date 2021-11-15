//import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>

    </>
  );
}

export default App;
