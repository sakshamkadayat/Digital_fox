import React from "react";
import profile from "../../assets/a.png";

export default function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
          <span><b>User Login</b> </span> 
          <div class="mb-3 row">
              <label for="inputEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-9">
                <input
                  type="Email"
                  class="form-control"
                  id="inputEmail"
                />
              </div>
            </div>
           
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            
            
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
