import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-links">
                <Link to={'/events'}>All Playdates</Link>
                <Link to={`/profile/${this.props.currentUser.id}`}>Profile</Link>
                <button className="logout-button" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="nav-links">
                  <Link to={'/signup'}>Signup</Link>
                  <Link to={'/login'}>Login</Link>          
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar">
          <Link className="nav-header" to={'/'}>Biscuits and Bones</Link>
          { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;