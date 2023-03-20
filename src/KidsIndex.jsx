import { Link } from "react-router-dom";

export function KidsIndex(props) {
  return (
    <div id="kids-index">
      <h1>All Kids</h1>
      {props.kids.map((kid) => (
        <>
          <div key={kid.id}>
            <h2> {kid.name}</h2>
            <img src={kid.image_url} style={{ width: "18rem" }} />
            <br />
            <Link to={`/kids/${kid.id}`}>See {kid.name}'s details</Link>
          </div>
          <button onClick={() => props.onSelectKid(kid)}>Edit {kid.name}'s profile</button>
        </>
      ))}
    </div>
  );
}
