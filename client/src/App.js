import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Signin from "./components/Signin";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes className="App">
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
