import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import  Home from "./pages/home/home";
import UserList from "./pages/UserList/UserList"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import User from "./pages/User/User";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/UserList" element={<UserList/>}/>
          <Route path="UserList/:Id" element={<User/>}/>
        </Routes>
        
        
      </div>
    
    </Router>
  );
}

export default App;
