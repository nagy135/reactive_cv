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
    this.middleKeyMapper = {
      personal: null,
      education: 'schools',
      experience: 'positions'
    }
    this.state = {
      personal: {
        gender: 'male',
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
      },
      education: {
        level: '',
        schools: [{
          name: 'ahaskfaskdjaskdjaksjd',
          city: '',
          field: '',
          entry: '',
          finish: ''
        }]
      },
      experience: {
        positions: [{
          position: 'chujko',
          employer: '',
          description: '',
          from: '',
          to: ''
        }]
      }
    };
    // this.handleDataUpdate = this.handleDataUpdate.bind(this);
    this.handleAddSchool = this.handleAddSchool.bind(this);
    this.handlePopSchool = this.handlePopSchool.bind(this);
    this.handlePersonalDataUpdate = this.handlePersonalDataUpdate.bind(this);
    this.handleEducationDataUpdate = this.handleEducationDataUpdate.bind(this);
    this.handleExperienceDataUpdate = this.handleExperienceDataUpdate.bind(this);
  }
  handlePersonalDataUpdate(event, type, index=null) {
    this.handleData('personal', type, index, event.target.value)
  }
  handleEducationDataUpdate(event, type, index=null) {
    this.handleData('education', type, index, event.target.value)
  }
  handleExperienceDataUpdate(event, type, index=null) {
    this.handleData('experience', type, index, event.target.value)
  }
  handleData(step, type, index, new_val){
    var newState = { ...this.state };
    var middleKey = this.middleKeyMapper[step];
    if (!(index))
      newState[step][type] = new_val;
    else
      newState[step][middleKey][index][type] = new_val;
    this.setState(newState)
    console.log(newState);
  }

  handlePopSchool(index){
    var newState = { ...this.state };
    newState.education.schools.splice(index, 1);
    this.setState(newState)
  }

  handleAddSchool(){
    var newState = { ...this.state };
    newState.education.schools.push({
      name: '',
      city: '',
      field: '',
      entry: '',
      finish: ''
    });
    this.setState(newState)
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="d-flex justify-content-center">
              <NavLink className="btn btn-xl btn-primary m-2" to="/"
                isActive={(match, location) => {
                  if ([
                    '/education',
                    '/experience',
                    '/skills'
                  ].includes(location.pathname)) return false;
                  return true;
                }}>
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

          <Switch>
            <Route path="/education">
              <Education
                data={this.state.education}
                onDataUpdate={this.handleEducationDataUpdate}
                onAddSchool={this.handleAddSchool}
                onPopSchool={this.handlePopSchool}
              />
            </Route>
            <Route path="/experience">
              <Experience
                data={this.state.experience}
              />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/personal">
              <Personal
              onDataUpdate={this.handlePersonalDataUpdate}
              data={this.state.personal}/>
            </Route>
            <Route path="/">
              <Personal
              onDataUpdate={this.handlePersonalDataUpdate}
              data={this.state.personal}/>
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
