import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import  Home from "./pages/home/Home";
import "./app.css"



function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
        
      </div>
    
    </div>
  );
}

export default App;
