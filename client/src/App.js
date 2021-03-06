import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/settings";
import Messenger from "./pages/messenger/messenger";
import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user? <Home/> : <Register/>} />
        <Route path="/register" element={user? <Navigate  to ="/" /> : <Register/>} />
        <Route path="/login" element={user? <Navigate  to ="/" /> : <Login/>} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="/settings" element={!user? <Navigate  to ="/register" /> : <Settings/>} />
        <Route path="/messenger" element={!user? <Navigate  to ="/register" /> : <Messenger/>} />
      </Routes>
    </Router>
  );
}

export default App;
