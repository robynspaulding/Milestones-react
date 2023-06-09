import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export function KidsIndex(props) {
  return (
    <div id="kids-index" className="container">
      <h1> Kids</h1>
      <Row xs={1} md={2} className="g-4">
        {props.kids.map((kid) => (
          <div key={kid.id} className="row justify-content-center">
            <div className="card col-2 shadow m-3" style={{ width: "20rem" }}>
              <h2 className="card-title"> {kid.name}</h2>
              <br />
              <div className="row justify-content-center">
                <img src={kid.image_url} style={{ width: "18rem" }} />
              </div>
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
      </Row>
    </div>
  );
}
