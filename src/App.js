import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/navbar';
import {Jumbotron} from './components/jumbotron';
import {Swlist} from './components/swlist';
import {SwlisDetail} from './components/swdetail';
import {Home} from './components/home';
import {HashRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <div>
    <Navbar/>
    <Jumbotron/>
</div>, document.getElementById('react-nav'));

ReactDOM.render(
    <div>
      <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/Swlist" component={Swlist}/>
            <Route path="/Detail/:id" component={SwlisDetail}/>
        </div>
      </Router>
</div>, document.getElementById('react-container'))