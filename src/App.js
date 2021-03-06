import "./styles/App.scss";
import AnimationHome from "./comps/AnimationHome";
import { Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Homepage from "./comps/Homepage";
import Exchanges from "./comps/Exchanges";
import CryptoDetails from "./comps/CryptoDetails";
import Cryptocurrencies from "./comps/Cryptocurrencies";
import News from "./comps/News";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
          <AnimationHome />
        <div className="routes">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/exchanges">
            <Exchanges />
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
          <Route exact path="/crypto/:coinId">
            <CryptoDetails />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </div>
      </div>

      <div className="footer">
        <h2>
          <span>Crypto </span> Wallstreet
        </h2>
        <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148">
          {" "}
          Designed by Dev. <span>Chex</span>
        </a>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
