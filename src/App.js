import "./App.css";
import Monitor from "./componets/Monitor";
import Navigationbar from "./componets/Navigationbar";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <div className="componets">
        <Monitor />
      </div>
    </div>
  );
}

export default App;
