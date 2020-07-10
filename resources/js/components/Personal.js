import React from 'react';
import {
  NavLink
} from "react-router-dom";

class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      gender: '',
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
     };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mt-5 m-3">

          <div className="row">
            <div className="col btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-info active">
                <input type="radio" name="gender" id="gender-male" autoComplete="off" value="male"value="male" checked={this.props.data.gender === "male"} onClick={this.props.onDataUpdate}/> Male
              </label>
              <label className="btn btn-info">
                <input type="radio" name="gender" id="gender-female" autoComplete="off" value="female" value="female" checked={this.props.data.gender === "female"} onClick={this.props.onDataUpdate}/> Female
              </label>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="degree" placeholder="Degree" onChange={(e) => {this.props.onDataUpdate(e, 'degree')}} value={this.props.data.degree} />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input type="email" className="form-control" id="email" placeholder="Email" value={this.props.data.email} onChange={(e) => {this.props.onDataUpdate(e, 'email')}}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="phone" placeholder="Phone" value={this.props.data.phone} onChange={(e) => {this.props.onDataUpdate(e, 'phone')}}/>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input type="text" className="form-control" id="name" placeholder="Name" value={this.props.data.name} onChange={(e) => {this.props.onDataUpdate(e, 'name')}}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="surname" placeholder="Surname" value={this.props.data.surname} onChange={(e) => {this.props.onDataUpdate(e, 'surname')}}/>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input type="date" className="form-control" id="birth" placeholder="Date of Birth" value={this.props.data.birth} onChange={(e) => {this.props.onDataUpdate(e, 'birth')}}/>
            </div>
            <div className="col btn-group btn-group-toggle mb-4" data-toggle="buttons">
              <label className="btn btn-info active">
                <span>Photo</span>
                <input style={{display: 'none'}} type="file" name="photo" id="photo" value={this.props.data.photo} onChange={(e) => {this.props.onDataUpdate(e, 'photo')}} autoComplete="off"/> 
              </label>
            </div>
          </div>

          <hr />
          
          <div className="row mt-5">
            <div className="col">
              <input type="text" className="form-control" id="street" placeholder="Street" value={this.props.data.street} onChange={(e) => {this.props.onDataUpdate(e, 'street')}}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="number" placeholder="Number" value={this.props.data.number} onChange={(e) => {this.props.onDataUpdate(e, 'number')}}/>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input type="text" className="form-control" id="psc" placeholder="PSC" value={this.props.data.psc} onChange={(e) => {this.props.onDataUpdate(e, 'psc')}}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" id="city" placeholder="City" value={this.props.data.city} onChange={(e) => {this.props.onDataUpdate(e, 'city')}}/>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input type="text" className="form-control" id="country" placeholder="Country" value={this.props.data.country} onChange={(e) => {this.props.onDataUpdate(e, 'country')}}/>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col d-flex justify-content-end">
              <NavLink className="btn btn-primary btn-xl mt-3" to="/education">
                Next
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Personal;
