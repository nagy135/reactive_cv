import React from 'react';
import {
  NavLink
} from "react-router-dom";

const Personal = (props) => {
  if (!props.data) return '';
  return (
    <form onSubmit={() => {return false;}}>
      <div className="mt-5 m-3">

        <div className="row">
          <div className="col btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-info active">
              <input
                type="radio"
                name="gender"
                id="gender-male"
                value="male"
                checked={props.data.gender === "male"}
                onChange={(e) => {
                  props.onDataUpdate(e, 'gender')
                }}
              /> Male
              </label>
            <label className="btn btn-info">
              <input
                type="radio"
                name="gender"
                id="gender-female"
                value="female"
                checked={props.data.gender === "female"}
                onChange={(e) => {
                  props.onDataUpdate(e, 'gender')
                }}
              /> Female
              </label>
          </div>
          <div className="col">
            <input type="text" className="form-control" id="degree" placeholder="Degree" onChange={(e) => { props.onDataUpdate(e, 'degree') }} value={props.data.degree} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <input type="email" className="form-control" id="email" placeholder="Email" value={props.data.email} onChange={(e) => { props.onDataUpdate(e, 'email') }} />
          </div>
          <div className="col">
            <input type="text" className="form-control" id="phone" placeholder="Phone" value={props.data.phone} onChange={(e) => { props.onDataUpdate(e, 'phone') }} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <input type="text" className="form-control" id="name" placeholder="Name" value={props.data.name} onChange={(e) => { props.onDataUpdate(e, 'name') }} />
          </div>
          <div className="col">
            <input type="text" className="form-control" id="surname" placeholder="Surname" value={props.data.surname} onChange={(e) => { props.onDataUpdate(e, 'surname') }} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <input type="date" className="form-control" id="birth" placeholder="Date of Birth" value={props.data.birth} onChange={(e) => { props.onDataUpdate(e, 'birth') }} />
          </div>
          <div className="col btn-group btn-group-toggle mb-4" data-toggle="buttons">
            <label className="btn btn-info active">
              <span>Photo</span>
              <input style={{ display: 'none' }} type="file" name="photo" id="photo" value={props.data.photo} onChange={(e) => { props.onDataUpdate(e, 'photo') }} autoComplete="off" />
            </label>
          </div>
        </div>

        <hr />

        <div className="row mt-5">
          <div className="col">
            <input type="text" className="form-control" id="street" placeholder="Street" value={props.data.street} onChange={(e) => { props.onDataUpdate(e, 'street') }} />
          </div>
          <div className="col">
            <input type="text" className="form-control" id="number" placeholder="Number" value={props.data.number} onChange={(e) => { props.onDataUpdate(e, 'number') }} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <input type="text" className="form-control" id="psc" placeholder="PSC" value={props.data.psc} onChange={(e) => { props.onDataUpdate(e, 'psc') }} />
          </div>
          <div className="col">
            <input type="text" className="form-control" id="city" placeholder="City" value={props.data.city} onChange={(e) => { props.onDataUpdate(e, 'city') }} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <input type="text" className="form-control" id="country" placeholder="Country" value={props.data.country} onChange={(e) => { props.onDataUpdate(e, 'country') }} />
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

export default Personal;
