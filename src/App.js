import { HashRouter as Router, Route } from "react-router-dom";
import About from "./containers/About/About";
import Discover from "./containers/Discover/Discover";
import Search from "./containers/Search/Search";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}

export default App;
