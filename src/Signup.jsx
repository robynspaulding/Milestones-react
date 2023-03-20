import axios from "axios";
import { useState } from "react";
import emailLogo from "./assets/email.png";
import passwordLogo from "./assets/password.png";
import bioLogo from "./assets/bio.png";
import { Link } from "react-router-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <div className="row justify-content-center">
        <div className="card shadow m-3" style={{ width: "25rem" }}>
          <h1>Signup</h1>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form align="center" onSubmit={handleSubmit}>
            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={bioLogo} />
              </span>
              <input
                name="name"
                type="name"
                class="form-control"
                placeholder="Your name "
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

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
                placeholder="Type password"
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
                name="password_confirmation"
                type="password"
                class="form-control"
                placeholder="Confirm password"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <button className="btn btn-outline-primary" type="submit">
              Create account
            </button>
            <br />

            <br />
            <p>
              Already a user?&nbsp;
              <Link to={`/login`}>Login Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
