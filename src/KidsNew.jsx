import axios from "axios";
import bioLogo from "./assets/bio.png";
import imageLogo from "./assets/person.png";
import birthdayLogo from "./assets/birthday.png";

export function KidsNew() {
  const handleCreateKid = (params) => {
    axios.post("http://localhost:3000/kids.json", params).then((response) => {
      const newKid = response.data;
      console.log("created new kid profile", newKid);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateKid(params);
    event.target.reset;
  };

  return (
    <div id="kids-new">
      <div className="row justify-content-center">
        <div className="card shadow m-3" style={{ width: "40rem" }}>
          <h1>Add new kid</h1>
          <form onSubmit={handleSubmit}>
            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={bioLogo} />
              </span>
              <input
                name="name"
                type="text"
                class="form-control"
                placeholder="Yogi name"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={birthdayLogo} />
              </span>
              <input
                name="birthday"
                type="text"
                class="form-control"
                placeholder="Kid's brithday"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="input-group input-group-sm flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <img width="30px" src={imageLogo} />
              </span>
              <input
                name="image_url"
                type="text"
                class="form-control"
                placeholder="Profile image URL"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="row justify-content-center">
              <button className="btn btn-outline-primary" type="submit">
                Create Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
