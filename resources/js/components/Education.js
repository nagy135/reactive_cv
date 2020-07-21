import React from 'react';

const Education = (props) => {
  return (
    <form onSubmit={() => {return false;}}>
      <div className="mt-5 m-3">
        <div className="row mt-3">
          <div className="col">
            <input type="text" className="form-control" id="level" placeholder="Highest level reached" value={props.level} onChange={(e) => { props.onDataUpdate(e, 'level')}}/>
          </div>
        </div>

        <hr />
        <div className="row mt-3 mb-3">
          <div className="col h2">Schools</div>
        </div>

        {props.data.schools.map((val, index) => {
          return (
            <div key={index}>
              <hr/>
              <span>#{index+1}</span>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <input type="text" className="form-control" id="name" value={val.name} onChange={(e) => { props.onDataUpdate(e, 'name', index) }} placeholder="Name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" id="city" value={val.city} onChange={(e) => { props.onDataUpdate(e, 'city', index) }} placeholder="City" />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <input type="text" className="form-control" id="field" value={val.field} onChange={(e) => { props.onDataUpdate(e, 'field', index) }} placeholder="Field"/>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <input type="date" className="form-control" id="entry" value={val.entry} onChange={(e) => { props.onDataUpdate(e, 'entry', index) }} placeholder="Entry year" />
                </div>
                <div className="col">
                  <input type="date" className="form-control" id="finish" value={val.finish} onChange={(e) => { props.onDataUpdate(e, 'finish', index) }} placeholder="Finish year" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-end">
                  <div className="btn btn-secondary" onClick={() => {
                    props.onPopSchool(index)
                  }}>remove</div>
                </div>
                </div>

            </div>
          )
        })}
        <hr />
        <div className="row mt-3">
          <div className="col d-flex justify-content-end">
            <div className="btn btn-secondary" onClick={props.onAddSchool}>Add another</div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-end">
            <div className="btn btn-primary btn-xl mt-3" >
              Next
              </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Education;
