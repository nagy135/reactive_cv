import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Personal from './Personal'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        gender: 'female',
        degree: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        birth: '',
        photo: '',
        street: '',
        number: '',
        psc: '',
        city: '',
        number: '',
        country: '',
      }
    };
    this.handleDataUpdate = this.handleDataUpdate.bind(this);
  }
  handleDataUpdate(event, type='gender') {
    var newState = { ...this.state };
    newState['personal'][type] = event.target.value;
    this.setState(newState)
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="d-flex justify-content-center">
              <NavLink className="btn btn-xl btn-primary m-2" to="/personal">
                    Personal
                  </NavLink>
                  <NavLink className="btn btn-xl btn-primary m-2" to="/education">
                    Education
                  </NavLink>
                  <NavLink className="btn btn-xl btn-primary m-2" to="/experience">
                    Experience
                  </NavLink>
                  <NavLink className="btn btn-xl btn-primary m-2" to="/skills">
                    Skills
                  </NavLink>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/personal">
              <Personal  onDataUpdate={this.handleDataUpdate} data={this.state.personal}/>
            </Route>
            <Route path="/">
              <Personal />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
