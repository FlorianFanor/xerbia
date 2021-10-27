import "./App.scss";
import Header from "./components/Header";
import MainPage from "./screens/MainPage";
import Footer from "./components/Footer";
import ShoppingCart from "./screens/ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="App" className="App">
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Header />
        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
