import React, { useState } from "react";

function Signup(props) {
  const [mail, setmail] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [pass, setpass] = useState();
  const [cpass, setcpass] = useState();

  const handleOnChangeE = (e) => {
    console.log(e.target.value);
    setmail(e.target.value);
  };
  const handleOnChangeFn = (e) => {
    console.log(e.target.value);
    setfname(e.target.value);
  };
  const handleOnChangeLn = (e) => {
    console.log(e.target.value);
    setlname(e.target.value);
  };
  const handleOnChangeP = (e) => {
    console.log(e.target.value);
    setpass(e.target.value);
  };
  const handleOnChangeCP = (e) => {
    console.log(e.target.value);
    setcpass(e.target.value);
  };

  const handleButtonClick = () => {
    // props.isnotLogin()
    localStorage.setItem('mail',mail)
    localStorage.setItem('pass',pass)
  };
  const handleButtonClickL = () => {
    props.isLogin()
  };
  return (
    <>
      <div className="body">
        <div class="row">
          <div class="col-md-6">
            {/* <img src="https://www.elfi.com/wp-content/uploads/2021/08/ELFI-vs.-SoFi-1-1400x800.jpg" alt='background'/> */}
            {/* <img src=""/>  */}
          </div>

          <div class=" formback col-md-6">
            <div class="hey">
              <h1>
                <b>Hey There </b>
              </h1>
            </div>
            <div class="login">
              <ul
                className=" insidelog nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
                id="pillNav2"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link  rounded-5"
                    id="home-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Login
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active rounded-5"
                    id="profile-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
              <div class="form">
                <form>
                  <div class=" inform row">
                    <div class="col-md-6">
                      <label>
                        <h4>First Name :</h4>
                      </label>
                      <input type="text" size="30" onChange={(e)=>handleOnChangeFn(e)} />
                    </div>
                    <div class="col-md-6">
                      <label>
                        <h4>Last Name :</h4>
                      </label>
                      <input type="text" size="30" onChange={(e)=>handleOnChangeLn(e)} />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      <h4>Email address</h4>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e)=>handleOnChangeE(e)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      <h4>Password</h4>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e)=>handleOnChangeP(e)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      <h4> Confirm Password</h4>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e)=>handleOnChangeCP(e)}
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      I've read terms and privacy policy
                    </label>
                    <div>
                      <a href="#">Terms</a>
                      <br />
                      <a href="#">Privacy policy</a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => handleButtonClick()}
                  >
                    Sign up
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => handleButtonClickL()}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
