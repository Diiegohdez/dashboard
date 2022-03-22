import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./app.css"


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="pages">Paginas</div>
      </div>
    
    </div>
  );
}

export default App;
