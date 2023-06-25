import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col">
          <h5>User Register Form</h5>
          <p>message</p>
          <form >
            <div className="row">
              <div className="col">
                <div className="mb">
                    <label className="form-label">Name</label>
                    <input type="text" />
                </div>
              </div>

              <div className="col">
                <div className="mb">
                    <label className="form-label">UserName</label>
                    <input type="text" />
                </div>
              </div>

              <div className="col">
                <div className="mb">
                    <label className="form-label">Email</label>
                    <input type="email" />
                </div>
              </div>

              <div className="col">
                <div className="mb">
                    <label className="form-label">Password</label>
                    <input type="password" />
                </div>
              </div>

              <div className="col">
                <div className="mb">
                    <label className="form-label">Phone No</label>
                    <input type="number" />
                </div>
              </div>

              <div className="col">
                <div className="mb">
                    <label className="form-label">Gender</label>
                    <select name="gender" >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
              </div>

              <div className="col">
                <div className="mb">
                   <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
