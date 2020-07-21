import React from 'react';

const Experience = (props) => {
  return (
    <form onSubmit={() => { return false; }}>
      {props.data.map((val, index) => {
        return (
          <div className="mt-5 m-3">
            <div className="row">
              <div className="col">
                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Position" onChange={(e) => { props.onDataUpdate(e, 'degree', index) }} value={props.data.degree} />
                  </div>
                </div>
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
    </form >
  );
}

export default Experience;
