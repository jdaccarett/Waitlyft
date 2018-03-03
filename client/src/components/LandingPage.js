import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return(
      <header className="landing">
        <div className="landing__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Hitch A Ride</span>
                    <span className="heading-primary--sub">And save your seat</span>
                </h1>

                <a href="#" className="btn btn--pink btn--animated">Sign up today</a>
            </div>
      </header>
    );
  }
}

export default Landing;
