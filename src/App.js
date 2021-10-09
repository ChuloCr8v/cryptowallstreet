import './styles/App.scss';

import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Homepage from './comps/Homepage';
import Exchanges from './comps/Exchanges';
import CryptoDetails from './comps/CryptoDetails';
import Cryptocurrencies from './comps/Cryptocurrencies';
import News from './comps/News';
import About from './comps/About';





function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
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
        <h2>Crypto Wallstreet</h2>
        <p>All rights reserved</p>
        <Link to="/About">About</Link>
      </div>
    </div>
  );
}

export default App;
