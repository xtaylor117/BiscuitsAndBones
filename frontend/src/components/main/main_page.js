import React from 'react';
import './main_page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page-container">
        <div className="main-page-body">
          <p className="main-description">
            Are you a pet owner who wishes your pet had a friend to play with 
            nearby? Biscuits and Bones is a web app that helps pet owners host, 
            attend, and connect with other owners to set up playdates. Join today!
          </p>
        </div>
        <div className="gtku-container">
          <p className="gtku"> Who are we? </p>
          <div className="main-links">
            <div>
              Peter Min
              <div className="our-links">
                <a href="https://github.com/pmin825"><i className="fa fa-github-square" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/peter-min-02a62a13a/"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              </div>
            </div>
            <div>
              Jonathan Siu
              <div className="our-links">
                <a href="https://github.com/jonsiu826"><i className="fa fa-github-square" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/jonathansiu826/"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              </div>
            </div>
            <div>
              Chris Lee
              <div className="our-links">
                <a href="https://github.com/cjbreezey"><i className="fa fa-github-square" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/christopher-j-lee/"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              </div>
            </div>
            <div>
              Taylor Lee
              <div className="our-links">
                <a href="https://github.com/xtaylor117"><i className="fa fa-github-square" aria-hidden="true"/></a>
                <a href="https://www.linkedin.com/in/taylorlee117/"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;