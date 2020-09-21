import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../Styles/NavBar.css'
import Cart from './Cart'
import Help from './Help'
import Offers from './Offers'
import Search from './Search'
import SignIn from './SignIn'
import Home from './Home'
import LocationSearch from './LocationSearch'
import Restaurant from './Restaurant'
import { FaInfoCircle, FaPercentage, FaSearch , FaShoppingCart, FaUser} from 'react-icons/fa'

function NavBar() {
  return (
    <Router>
      <div>
            <div className = "NavBar-css">
                <div>
                    <Link to="/" className = "NavbarLink" 
                        style={{
                            color : "orange",
                            fontFamily : "ProximaNova,Arial,Helvetica Neue,sans-serif",
                            fontWeight : "bolder",fontSize : "30px",
                            position: "relative",
                            left:"-200px"
                            }}>
                    S!</Link>
                </div>

                <div ><Link to="/LocationSearch" className = "NavbarLink" style={{ position: "relative",left:"-220px"}}><FaSearch />Location Search</Link></div>

                <div ><Link to="/Search" className = "NavbarLink"><FaSearch />Search</Link></div>
                
                <div ><Link to="/Offers" className = "NavbarLink"><FaPercentage/>Offers</Link></div>
                
                <div ><Link to="/Help" className = "NavbarLink"><FaInfoCircle />Help</Link></div>

                <div ><Link to="/SignIn" className = "NavbarLink"><FaUser />Sign In</Link></div>
                
                <div ><Link to="/Cart" className = "NavbarLink"><FaShoppingCart />Cart</Link></div>
            </div>
          

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/LocationSearch">
            <LocationSearch />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route path="/Offers">
            <Restaurant />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;