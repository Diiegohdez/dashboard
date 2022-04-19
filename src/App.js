import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import  Home from "./pages/home/home";
import UserList from "./pages/UserList/UserList"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import ProductsList from "./pages/ProductsList/ProductsList";
import NewProducts from "./pages/home/NewProducts/NewProducts";


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
          <Route path="/NewUser" element={<NewUser/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="ProductsList/:Id" element={<ProductsList/>}/>
          <Route path="/NewProducts" element={<NewProducts/>}/>
        </Routes>
        
        
      </div>
    
    </Router>
  );
}

export default App;
