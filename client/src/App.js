import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Signin from "./components/Signin";
import SideSection from "./components/SideSection";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Routes className="App">
        <Route exact path="/" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sidesection" element={<SideSection />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
