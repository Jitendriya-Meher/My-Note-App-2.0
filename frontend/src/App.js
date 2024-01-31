import "./App.css";
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

    <NavBar></NavBar>

    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }></Route>

    </Routes>

  </div>;
}

export default App;