import axios from "axios";
import { useState } from "react";
import emailLogo from "./assets/email.png";
import passwordLogo from "./assets/password.png";
import { Link } from "react-router-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <div className="row justify-content-center">
        <div className="card shadow m-3" style={{ width: "25rem" }}>
          <h1>Login</h1>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form align="left" onSubmit={handleSubmit}>
            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={emailLogo} />
              </span>
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="Your email address"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />
            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={passwordLogo} />
              </span>
              <input
                name="password"
                type="password"
                class="form-control"
                placeholder="Your password"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="col text-center">
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
              <p>
                Not a user?&nbsp;
                <Link to={`/signup`}>Sign Up Here</Link>
              </p>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
