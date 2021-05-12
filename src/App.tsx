import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventTypes from "./routes/EventTypes";
import PropsTypes from "./routes/PropsTypes";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/eventtypes">EventTypes</Link>
          </li>
          <li>
            <Link to="/propstypes">PropsTypes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/eventtypes">
          <EventTypes />
        </Route>
        <Route path="/propstypes">
          <PropsTypes>hello world</PropsTypes>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
