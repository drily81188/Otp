import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Otp } from "./components/Otp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Otp /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
