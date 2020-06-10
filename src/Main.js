import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Hollister from "./Hollister";
import AboutUs from "./AboutUs";
import Shop from "./Shop";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <div class="col-one"></div>
          <ul className="header">
            <li><NavLink exact to="/">HOLLISTER</NavLink></li>
            <li><NavLink to="/AboutUs">ABOUT US</NavLink></li>
            <li><NavLink to="/Shop">SHOP</NavLink></li>
          </ul>
          <div className="content" style={{height: '995px'}}>
            <Route exact path="/" component={Hollister}/>
            <Route path="/AboutUs" component={AboutUs}/>
            <Route path="/Shop" component={Shop}/>
          </div>
          <div class="footer">
          <h4 style={{color:'white'}}>Follow Us!</h4>
            <div className="row">
            <div class="col" style={{color:'white'}}>Instagram</div>
            <div class="col" style={{color:'white'}}>Facebook</div>
            <div class="col" style={{color:'white'}}>Instagram</div>
          </div>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;