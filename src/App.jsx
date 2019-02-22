import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './components/home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
