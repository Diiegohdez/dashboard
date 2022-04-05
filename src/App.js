import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import  Home from "./pages/home/home";
import "./App.css"



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
