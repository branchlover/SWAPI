import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Star Wars API</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="active">
                  <Link className="nav-link" to="/Swlist">Swlist</Link>
                </li>
                </ul>
            </div>
        </nav>
      </Router>
    )
  }
}
