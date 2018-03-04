import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  renderContent(){
    switch (this.props.auth) {
      case null:
        return; //still deciding.
      case false: //not logged in.
        return (
          <a href="/auth/facebook" className="user-nav__item">Login With FB</a>
        );
      default:
        return (
        <a href="/api/logout" className="user-nav__item">Logout</a>
      );
    }
  }


  render() {
    console.log("props ",this.props);
    return(
      <header className="header">
        <Link
          to={this.props.auth ? '/dashboard' : '/'}
          className="logo"> WaitLyft
        </Link>
        <nav className="user-nav">
          <div className="user-nav__item">About Us</div>
          <div className="user-nav__item">Sign up</div>
          {this.renderContent()}
        </nav>

      </header>
    );
  }
}

// Gets State object out of redux store.
function mapStateToProps(state){
  //return an object that will be returned as state.
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);
