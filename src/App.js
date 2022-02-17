import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Body/Home";
import Signal from "./Body/Signal";
import Market from "./Body/Market";
import News from "./Body/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/signal" component={Signal} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/news" component={News} />        
      </div>
    </Router>
  );
}

export default App;
