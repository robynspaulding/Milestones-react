import { Link } from "react-router-dom";

export function KidsIndex(props) {
  return (
    <div id="kids-index" className="container">
      <h1>All Kids</h1>
      {props.kids.map((kid) => (
        <div key={kid.id} className="row justify-content-center">
          <div className="card-deck col-2 shadow m-3" style={{ width: "40rem" }}>
            <h2 className="card-title"> {kid.name}</h2>
            <br />

            <img src={kid.image_url} style={{ width: "18rem" }} />
            <br />
            <br />
            <div className="col text-center">
              <Link to={`/kids/${kid.id}`}>
                {" "}
                <button type="button" className="btn btn-outline-primary">
                  See {kid.name}'s details
                </button>{" "}
                <br />
                <br />
              </Link>
              <button type="button" className="btn btn-outline-primary" onClick={() => props.onSelectKid(kid)}>
                Edit profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
