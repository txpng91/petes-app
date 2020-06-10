import React, { Component } from "react";
class Hollister extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron big-banner" style={{width:'1400px', height: '950px', paddingTop:'500px'}}>
          <div class="card-shop" style={{width:'300px', margin:'auto', height: '160px'}}>
            <div class="card-body">
              <h3>Selected items are 50% to 60% off!</h3>
              <a href="#Shop" class="btn btn-primary">Shop Now!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Hollister;